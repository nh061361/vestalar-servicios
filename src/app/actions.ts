
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  description: z.string(),
  service: z.string().optional(),
});

// Helper para crear una pausa
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function saveContact(formData: z.infer<typeof contactFormSchema>) {
  const validatedData = contactFormSchema.parse(formData);
  const { name, email, phone, description } = validatedData;

  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Flogo%2FVestalar_Logotipo_original_cmyk.png?alt=media&token=cbf7fd0c-3d53-42d0-9f33-d46a497bbbc8";
  
  // === Remitentes y destinatarios ===
  const companyEmail = 'vestalar@vestalar.com';
  const customerFacingSender = '"Vestalar" <vestalar@vestalar.com>';
  
  try {
    // 1. Enviar correo de notificación a la empresa
    await addDoc(collection(db, 'mail'), {
      to: [companyEmail],
      from: companyEmail,
      replyTo: email,
      message: {
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: `
          <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
            <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
              <img src="${logoUrl}" alt="Vestalar Logo" width="150" style="max-width: 150px; width: 100%; height: auto;">
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

    // 2. Esperar 1 segundo antes de enviar el siguiente correo para no saturar el servidor SMTP
    await delay(1000);

    // 3. Enviar correo de confirmación al cliente
    await addDoc(collection(db, 'mail'), {
      to: [email],
      from: customerFacingSender,
      replyTo: companyEmail, 
      message: {
        subject: `Hemos recibido tu solicitud de contacto - Vestalar`,
        html: `
          <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
            <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
              <img src="${logoUrl}" alt="Vestalar Logo" width="150" style="max-width: 150px; width: 100%; height: auto;">
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
    
    return { success: true };
  } catch (error) {
    console.error('Error al enviar los correos de contacto: ', error);
    return { success: false, error: 'Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde.' };
  }
}

    