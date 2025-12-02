
'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { saveContact } from '@/app/actions';
import { SteppedProgress } from './SteppedProgress';
import { Bath, Building, Home, Paintbrush, Utensils } from 'lucide-react';


const step1Schema = z.object({
  service: z.string().min(1, "Por favor, selecciona un servicio."),
});

const step2Schema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un email válido."),
  phone: z.string().optional(),
});

const step3Schema = z.object({
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres."),
});

const fullSchema = z.object({
    service: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    description: z.string(),
});


type FullFormData = z.infer<typeof fullSchema>;

const services = [
  { id: 'Reforma de Cocina', label: 'Reforma de Cocina', icon: Utensils },
  { id: 'Reforma de Baño', label: 'Reforma de Baño', icon: Bath },
  { id: 'Reforma Integral', label: 'Reforma Integral', icon: Home },
  { id: 'Oficina/Local', label: 'Oficina / Local', icon: Building },
  { id: 'Otro', label: 'Otro tipo de reforma', icon: Paintbrush },
];


export function BudgetRequestDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void; }) {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const methods = useForm<FullFormData>({
    resolver: async (data, context, options) => {
      if (step === 1) {
        return zodResolver(step1Schema)(data, context, options);
      }
      if (step === 2) {
        return zodResolver(step2Schema)(data, context, options);
      }
      return zodResolver(step3Schema)(data, context, options);
    },
    defaultValues: {
      service: '',
      name: '',
      email: '',
      phone: '',
      description: '',
    },
  });

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      if (step === 1) {
        const service = methods.getValues('service');
        if(service !== 'Otro') {
          methods.setValue('description', `Quisiera un presupuesto para una ${service.toLowerCase()}.`);
        } else {
          methods.setValue('description', `Quisiera un presupuesto para otro tipo de reforma.`);
        }
      }
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: Partial<FullFormData>) => {
    const allData = methods.getValues();
    const result = await saveContact(allData);

    if (result.success) {
      toast({
        title: '¡Solicitud enviada!',
        description: 'Gracias por contactar. Nos pondremos en contacto contigo pronto.',
      });
      methods.reset();
      setStep(1);
      onOpenChange(false);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: result.error || 'Hubo un problema al guardar tus datos. Por favor, inténtalo de nuevo.',
      });
    }
  };
  
  const handleServiceSelect = (service: string) => {
    methods.setValue('service', service);
    handleNext();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-center text-2xl">Solicita tu presupuesto</DialogTitle>
              <DialogDescription className="text-center">Sigue estos 3 sencillos pasos y te contactaremos.</DialogDescription>
            </DialogHeader>

            <div className="py-6">
              <SteppedProgress currentStep={step} totalSteps={3} />
            </div>

            <div className="min-h-[200px]">
              {step === 1 && (
                <div>
                  <h3 className="font-semibold text-center mb-4">Paso 1: ¿Qué reforma necesitas?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map(({ id, label, icon: Icon }) => (
                      <Button
                        key={id}
                        type="button"
                        variant={methods.watch('service') === id ? 'default' : 'outline'}
                        className="h-20 flex flex-col gap-2"
                        onClick={() => handleServiceSelect(id)}
                      >
                        <Icon className="w-6 h-6" />
                        <span>{label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                   <h3 className="font-semibold text-center mb-4">Paso 2: Tus datos de contacto</h3>
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
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-center mb-4">Paso 3: Cuéntanos más sobre tu proyecto</h3>
                  <FormField
                    control={methods.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe tu proyecto</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Danos más detalles, como metros cuadrados, calidades deseadas, etc."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            <DialogFooter className="mt-8">
              {step > 1 && <Button type="button" variant="outline" onClick={handleBack}>Volver</Button>}
              {step < 3 && step > 1 && <Button type="button" onClick={handleNext}>Siguiente</Button>}
              {step === 3 && <Button type="submit" disabled={methods.formState.isSubmitting}>
                {methods.formState.isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </Button>}
               {step === 1 && <DialogClose asChild><Button type="button" variant="ghost">Cancelar</Button></DialogClose>}
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
