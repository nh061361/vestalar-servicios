
'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { saveContact } from '@/app/actions';

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un email válido."),
  phone: z.string().optional(),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres."),
});

type ContactFormData = z.infer<typeof contactSchema>;

const messageSuggestions = [
    "Quisiera un presupuesto para una reforma integral.",
    "Necesito reformar la cocina.",
    "Me gustaría más información sobre la reforma de baños.",
];

export function ContactForm() {
  const { toast } = useToast();

  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const result = await saveContact(data);
    if (result.success) {
      toast({
        title: '¡Mensaje enviado!',
        description: 'Gracias por contactar. Nos pondremos en contacto contigo pronto.',
      });
      methods.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: result.error || 'Hubo un problema al guardar tus datos. Por favor, inténtalo de nuevo.',
      });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    methods.setValue('description', suggestion);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={methods.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Cómo te llamas?</FormLabel>
              <FormControl>
                <Input placeholder="Nos gusta dirigirnos a ti por tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Y tu dirección de correo electrónico?</FormLabel>
              <FormControl>
                <Input placeholder="Enviaremos a tu email tu presupuesto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Cuál es tu teléfono? (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Te llamaremos para preguntarte qué necesitas" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu mensaje</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntanos un poco sobre tu proyecto o duda."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-2">
            <p className="text-sm text-muted-foreground">O empieza con una de estas sugerencias:</p>
            <div className="flex flex-wrap gap-2">
                {messageSuggestions.map((suggestion, index) => (
                    <Button 
                        key={index}
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs"
                    >
                        {suggestion}
                    </Button>
                ))}
            </div>
        </div>

        <Button type="submit" className="w-full" disabled={methods.formState.isSubmitting}>
          {methods.formState.isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </form>
    </FormProvider>
  );
}
