
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Menu, Paintbrush, Bath, Utensils, Star, User, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import allImagesData from '@/lib/placeholder-images.json';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { BudgetRequestDialog } from '@/components/BudgetRequestDialog';
import { ContactForm } from '@/components/ContactForm';
import { cn } from '@/lib/utils';


const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  );


export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { placeholderImages: PlaceHolderImages } = allImagesData;

  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');
  const footerLogoImage = PlaceHolderImages.find(p => p.id === 'footer-logo');
  
  const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fvideo%2Fvideo-output-FBFFC3FC-0C6A-47DF-8723-E0CEB186A344-1.mp4?alt=media&token=08bc7908-ae12-42c0-af9f-a55dc4b0dfa7';

  const services = [
    {
      title: 'Reformas de Cocinas',
      description: 'Diseño y renovación de cocinas funcionales, modernas y acogedoras. Pide presupuesto para la reforma de tu cocina.',
      icon: Utensils,
      imageIds: ['kitchen-renovation-1', 'kitchen-renovation-2', 'kitchen-renovation-3'],
    },
    {
      title: 'Reformas de Baños',
      description: 'Transformamos tu baño en un oasis de relajación. Soluciones innovadoras para todos los espacios. Pide presupuesto para la reforma de tu baño.',
      icon: Bath,
      imageIds: ['bathroom-renovation-3'],
    },
    {
      title: 'Reformas Integrales',
      description: 'Renovamos completamente tu vivienda o local. Un resultado que superará tus expectativas. Pide presupuesto para tu reforma integral.',
      icon: Paintbrush,
      imageIds: ['full-renovation-1', 'full-renovation-2', 'full-renovation-3'],
    },
  ].map(service => {
    const images = service.imageIds
      .map(id => PlaceHolderImages.find(p => p.id === id))
      .filter((img): img is ImagePlaceholder => !!img);
    return { ...service, images };
  });

  const faqItems = [
    {
      question: "¿Qué tipo de reformas hacemos?",
      answer: "Ofrecemos una amplia gama de servicios de reforma. Desde reformas integrales de locales y viviendas a reformas de cocinas. Realizamos cualquier tipo de proyecto de reforma."
    },
    {
      question: "¿Cuánto tiempo dura una reforma?",
      answer: "La duración varía según la envergadura del proyecto. Una reforma de baño o cocina puede durar entre 2 y 4 semanas, mientras que una reforma integral completa puede llevar de 2 a 5 meses. Te daremos una estimación detallada y plazos claros en tu presupuesto."
    },
    {
      question: "¿Qué garantía ofrecemos?",
      answer: "Ofrecemos una garantía de 6 meses en la mano de obra de nuestras reformas y una garantía de hasta 2 años en los materiales utilizados, según las especificaciones del fabricante."
    },
    {
      question: "¿Cuándo recibiré mi presupuesto?",
      answer: "Una vez que nos contactes y tengamos todos los detalles de tu proyecto, recibirás un presupuesto detallado y sin compromiso en un plazo de 2 a 5 días hábiles. La transparencia es clave para nosotros."
    },
    {
        question: "¿Quién me va a contactar?",
        answer: "Un técnico especialista de nuestro equipo se pondrá en contacto contigo. Es la persona que te acompañará durante todo el proceso, desde la valoración inicial y el presupuesto hasta la supervisión y finalización de la obra."
    }
  ];

  const testimonials = [
    {
      name: "Sergio Montaner",
      rating: 5,
      review: "Tenía miedo de meterme en una obra grande, pero la experiencia ha sido mucho más fácil gracias a Jose y su equipo. Me ayudaron en la elección de materiales y siempre respetaron mi presupuesto. ¡Muy recomendables!",
      avatar: "https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fotros%2Ffotos%20opiniones%2Funnamed.png?alt=media&token=0e8b1b20-be62-4aa7-a3ef-da070cb82c95"
    },
    {
      name: "Javier Zabaleta",
      rating: 5,
      review: "Profesionalidad y atención al detalle. La reforma de mi cocina ha quedado espectacular. Cumplieron los plazos y el resultado final superó mis expectativas. ¡Contaré con ellos para futuras reformas sin dudarlo!",
      avatar: "https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fotros%2Ffotos%20opiniones%2Funnamed%20(1).png?alt=media&token=616f8d6a-2146-44ef-8f7d-f33e32f5bb25"
    },
    {
      name: "Macarena Mora",
      rating: 4,
      review: "Buen trabajo en la reforma integral de mi piso en Zaragoza. Hubo algunos pequeños retrasos, pero el equipo siempre fue comunicativo y resolutivo. La calidad de los acabados es excelente. Volvería a contratarlos.",
      avatar: "https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fotros%2Ffotos%20opiniones%2Funnamed%20(2).png?alt=media&token=0e59407b-f553-4bdf-82e9-172f1486c319"
    },
     {
      name: "Rafael Obon",
      rating: 5,
      review: "¡Mi baño parece otro! Me asesoraron genial con el diseño para aprovechar el espacio al máximo. Son un equipo muy limpio y organizado. Sin duda, la mejor empresa de reformas con la que he trabajado.",
      avatar: "https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fotros%2Ffotos%20opiniones%2Funnamed%20(3).png?alt=media&token=f2286c83-f645-40ad-b7eb-c3e674a4071b"
    },
    {
      name: "Laura Ortega",
      rating: 5,
      review: "Muy buena experiencia. Me cambiaron la bañera por un plato de ducha y todo fue muy bien. Trabajan de forma ordenada, cumplen con lo que dicen y el resultado ha quedado tal y como esperaba. Además, fueron limpios y cumplieron los plazos durante la obra. Dentro de unos meses nos meteremos con la cocina y lo dejaré de nuevo en sus manos.",
      avatar: "https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fotros%2Ffotos%20opiniones%2Funnamed%20(4).png?alt=media&token=13699e3e-b823-42a4-9bc2-a7bf07a7317a"
    }
  ];

  const ratingDistribution = [
    { rating: 5, percentage: 80 },
    { rating: 4, percentage: 20 },
    { rating: 3, percentage: 0 },
    { rating: 2, percentage: 0 },
    { rating: 1, percentage: 0 },
  ];
  
  const totalReviews = 5;
  const averageRating = 4.8;


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <BudgetRequestDialog open={isBudgetModalOpen} onOpenChange={setIsBudgetModalOpen} />
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center">
            {logoImage && <Image 
              src={logoImage.imageUrl} 
              alt="Vestalar Logo - Empresa de Reformas en Zaragoza" 
              width={115} 
              height={38}
              className="object-contain"
              priority
            />}
          </a>
          <nav className="hidden md:flex gap-6 items-center">
            <Button variant="ghost" asChild><a href="/proyectos">Proyectos</a></Button>
            <Button variant="ghost" asChild><a href="#services">Servicios</a></Button>
            <Button variant="ghost" asChild><a href="/quienes-somos">Quiénes somos</a></Button>
            <Button variant="ghost" asChild><a href="#reviews">Opiniones</a></Button>
            <Button variant="ghost" asChild><a href="#faq">Preguntas Frecuentes</a></Button>
            <Button variant="default" onClick={() => setIsBudgetModalOpen(true)}>Pide Presupuesto</Button>
          </nav>
          <div className="md:hidden">
            {isClient && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Menú de Navegación</SheetTitle>
                    <SheetDescription>
                      Navega por las diferentes secciones de la web.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col items-start gap-4 p-4 mt-8">
                     {logoImage && <Image 
                      src={logoImage.imageUrl} 
                      alt="Vestalar Logo" 
                      width={115} 
                      height={38}
                      className="object-contain mb-4"
                    />}
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/proyectos">Proyectos</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/#services">Servicios</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/quienes-somos">Quiénes somos</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/#reviews">Opiniones</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/#faq">Preguntas Frecuentes</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="default" className="w-full justify-start" onClick={() => setIsBudgetModalOpen(true)}>Pide Presupuesto</Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[78vh] w-full overflow-hidden">
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/10 p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Transformamos tu Hogar</h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl">Expertos en Reformas Integrales en Zaragoza. Calidad y confianza para el proyecto de tus sueños. Pide tu presupuesto a medida sin compromiso.</p>
            <Button size="lg" className="mt-8" onClick={() => setIsBudgetModalOpen(true)}>Solicita Presupuesto Online</Button>
          </div>
        </section>

        <section id="services" className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios de Reformas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {service.images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={600}
                              height={400}
                              className="w-full h-48 object-cover"
                              data-ai-hint={image.imageHint}
                            />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {service.images.length > 1 && <>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </>}
                  </Carousel>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <service.icon className="w-8 h-8 text-primary" />
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">La opinión de nuestros clientes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <Card className="lg:col-span-1 p-6 shadow-lg">
                    <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-lg">Opiniones de Google</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-5xl font-bold">{averageRating}</span>
                            <div className="flex flex-col">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">En base a {totalReviews} opiniones</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {ratingDistribution.map((item) => (
                                <div key={item.rating} className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">{item.rating}</span>
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    <Progress value={item.percentage} className="w-full h-2" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="lg:col-span-2">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2">
                                    <div className="p-1 h-full">
                                        <Card className="h-full flex flex-col justify-between p-6 shadow-lg">
                                            <div>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <Avatar>
                                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                                                        <AvatarFallback>
                                                          {testimonial.name.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-semibold">{testimonial.name}</p>
                                                        <div className="flex">
                                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                            ))}
                                                            {[...Array(5 - testimonial.rating)].map((_, i) => (
                                                                <Star key={i} className="w-4 h-4 text-gray-300" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-muted-foreground text-sm italic">"{testimonial.review}"</p>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4" />
                        <CarouselNext className="-right-4" />
                    </Carousel>
                </div>
            </div>
        </div>
    </section>

        <section id="faq" className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-3 space-y-6">
                <h2 className="text-3xl font-bold">Contacta con Nosotros</h2>
                <p className="text-muted-foreground text-lg">
                  ¿Tienes una idea? ¿Una duda? Sea lo que sea, estamos aquí para ayudarte a hacerla realidad.
                  Rellena el formulario o utiliza nuestros datos de contacto directo. Te responderemos lo antes posible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-lg">+34 670 933 371</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <span className="text-lg">vestalar@vestalar.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="text-lg">Con base en Zaragoza</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                      <CardTitle>Rellena el formulario</CardTitle>
                      <CardDescription>Nos pondremos en contacto contigo lo antes posible.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                      <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-4 items-start">
             {footerLogoImage && <Image 
              src={footerLogoImage.imageUrl} 
              alt="Vestalar Logo Negativo - Empresa de reformas" 
              width={115} 
              height={38}
              className="object-contain"
            />}
            <p className="text-sm">
              Tu empresa de reformas integrales con base en Zaragoza. Transformamos espacios para crear el hogar de tus sueños.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/proyectos" className="hover:underline">Proyectos</a></li>
              <li><a href="/#services" className="hover:underline">Servicios</a></li>
              <li><a href="/quienes-somos" className="hover:underline">Quiénes somos</a></li>
              <li><a href="/#reviews" className="hover:underline">Opiniones</a></li>
              <li><a href="/#faq" className="hover:underline">Preguntas Frecuentes</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setIsBudgetModalOpen(true); }} className="hover:underline">Contacto y Presupuesto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><span>+34 670 933 371</span></li>
              <li className="flex items-center gap-2"><span>vestalar@vestalar.com</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram /></a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-6 border-t border-accent-foreground/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Vestalar Servicios. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs text-accent-foreground/80">
            <a href="/politica-de-privacidad" className="hover:underline">Política de Privacidad</a>
            <span className="mx-2">|</span>
            <a href="/politica-de-cookies" className="hover:underline">Política de Cookies</a>
            <span className="mx-2">|</span>
            <a href="/aviso-legal" className="hover:underline">Aviso Legal</a>
             <span className="mx-2">|</span>
            <a href="/programa-fse-aragon" className="hover:underline">Programa FSE+ Aragón</a>
          </p>
        </div>
      </footer>
      
    </div>
  );
}
