
'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  description: z.string(),
});

// Este action ahora solo guarda la solicitud en una nueva colección 'contact-requests'.
// Una Cloud Function se encargará de procesar esta solicitud y enviar los correos.
export async function saveContact(formData: z.infer<typeof contactFormSchema>) {
  const validatedData = contactFormSchema.parse(formData);

  try {
    // 1. Guardar la solicitud en la colección 'contact-requests'
    await addDoc(collection(db, 'contact-requests'), {
      ...validatedData,
      createdAt: serverTimestamp(),
      status: 'pending', // Estado inicial
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error al guardar la solicitud de contacto: ', error);
    return { success: false, error: 'Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde.' };
  }
}
