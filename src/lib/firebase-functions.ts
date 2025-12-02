
'use server';
/**
 * Este archivo está destinado a contener la lógica de las Cloud Functions.
 * En un entorno de desarrollo local, estos se pueden simular o probar,
 * pero deben implementarse en Firebase para que funcionen en producción.
 * 
 * Para implementar:
 * 1. Asegúrate de tener Firebase CLI instalado.
 * 2. Inicializa Firebase Functions en tu proyecto si aún no lo has hecho.
 * 3. Copia el código de la función a tu archivo de funciones (p. ej., `functions/src/index.ts`).
 * 4. Implementa las funciones usando `firebase deploy --only functions`.
 */
import * a functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

// Helper para crear una pausa
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Cloud Function que se dispara al crear un nuevo documento en 'contact-requests'.
 * Se encarga de enviar los dos correos electrónicos: uno a la empresa y otro de confirmación al cliente.
 */
export const processContactRequest = functions.region('europe-west1').firestore
  .document('contact-requests/{docId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    if (!data) {
      console.log('No data associated with the event');
      return;
    }

    const { name, email, phone, description } = data;
    const docId = context.params.docId;

    const logoUrl = "https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Flogo%2FVestalar_Logotipo_original_cmyk.png?alt=media&token=cbf7fd0c-3d53-42d0-9f33-d46a497bbbc8";
    const fromEmailAuthorized = 'marketing@vestalar.com';
    const toEmail = 'marketing@vestalar.com';

    try {
      // 1. Enviar correo de notificación a la empresa
      await db.collection('mail').add({
        to: [toEmail],
        from: fromEmailAuthorized,
        replyTo: email,
        message: {
          subject: `Nuevo mensaje de contacto de ${name}`,
          html: `
            <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
              <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                <img src="${logoUrl}" alt="Vestalar Logo" style="max-width: 150px;">
              </div>
              <div style="padding: 30px;">
                <h2 style="color: #21435a; margin-top: 0;">Nuevo Mensaje desde la Web</h2>
                <p>Has recibido una nueva consulta a través del formulario de contacto de tu página web.</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; font-weight: bold; width: 120px;">Nombre:</td>
                    <td style="padding: 10px 0;">${name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; font-weight: bold;">Email (para responder):</td>
                    <td style="padding: 10px 0;">${email}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 10px 0; font-weight: bold;">Teléfono:</td>
                    <td style="padding: 10px 0;">${phone || 'No proporcionado'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Mensaje:</td>
                    <td style="padding: 10px 0;">${description}</td>
                  </tr>
                </table>
              </div>
              <div style="background-color: #3a7da5; color: white; text-align: center; padding: 15px; font-size: 12px;">
                <p>&copy; ${new Date().getFullYear()} Vestalar Servicios. Mensaje autogenerado.</p>
              </div>
            </div>
          `,
        },
      });

      console.log('Correo de notificación a la empresa enviado con éxito.');

      // 2. Esperar 3 segundos antes de enviar el siguiente correo
      await delay(3000);

      // 3. Enviar correo de confirmación al cliente
      await db.collection('mail').add({
        to: [email],
        from: fromEmailAuthorized, 
        replyTo: toEmail,
        message: {
          subject: `Hemos recibido tu solicitud de contacto - Vestalar`,
          html: `
            <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
              <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
                <img src="${logoUrl}" alt="Vestalar Logo" style="max-width: 150px;">
              </div>
              <div style="padding: 30px;">
                <h2 style="color: #21435a; margin-top: 0;">¡Gracias por contactar con Vestalar!</h2>
                <p>Hola ${name},</p>
                <p>Hemos recibido tu solicitud correctamente. Un especialista de nuestro equipo la revisará y se pondrá en contacto contigo a la mayor brevedad posible.</p>
                <p>Normalmente respondemos en un plazo de 24 horas laborables.</p>
                <div style="background-color: #f9f9f9; border-left: 4px solid #3a7da5; padding: 15px; margin-top: 20px;">
                  <p style="margin: 0; font-style: italic;">"${description}"</p>
                </div>
                <p style="margin-top: 30px;">Gracias por tu confianza,</p>
                <p style="font-weight: bold; margin: 0;">El equipo de Vestalar</p>
              </div>
              <div style="background-color: #3a7da5; color: white; text-align: center; padding: 15px; font-size: 12px;">
                <p>&copy; ${new Date().getFullYear()} Vestalar Servicios. Mensaje autogenerado.</p>
              </div>
            </div>
          `,
        },
      });
      
      console.log('Correo de confirmación al cliente enviado con éxito.');
      
      // Actualizar el estado del documento a 'processed'
      return snap.ref.update({ status: 'processed' });

    } catch (error) {
      console.error('Error al procesar la solicitud de contacto:', error);
      // Actualizar el estado del documento a 'error'
      return snap.ref.update({ status: 'error', errorMessage: (error as Error).message });
    }
  });

