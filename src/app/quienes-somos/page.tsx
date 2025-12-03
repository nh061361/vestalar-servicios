
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Facebook, Instagram, Linkedin, Award, Users, Handshake, Leaf, Rocket, Heart } from 'lucide-react';
import allImagesData from '@/lib/placeholder-images.json';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { BudgetRequestDialog } from '@/components/BudgetRequestDialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';


export default function AboutUsPage() {
  const [isClient, setIsClient] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { placeholderImages: PlaceHolderImages } = allImagesData;

  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');
  const footerLogoImage = PlaceHolderImages.find(p => p.id === 'footer-logo');
  const aboutUsHero = PlaceHolderImages.find(p => p.id === 'about-us-hero');

  if (!aboutUsHero) {
      // Handle the case where the hero image is not found, maybe show a fallback or nothing
      return <div>Loading...</div>;
  }

  const values = [
    {
      icon: Award,
      title: "Calidad y Experiencia",
      description: "Más de 20 años de experiencia y un compromiso inquebrantable con los acabados de primera calidad."
    },
    {
      icon: Users,
      title: "Satisfacción del Cliente",
      description: "Tu tranquilidad es nuestra prioridad. Te acompañamos en cada paso del proceso, de principio a fin."
    },
    {
      icon: Handshake,
      title: "Confianza y Transparencia",
      description: "Comunicación clara y presupuestos detallados. Construimos relaciones basadas en la honestidad."
    },
    {
      icon: Leaf,
      title: "Compromiso Local (Km 0)",
      description: "Apostamos por proveedores de proximidad para impulsar la economía local y reducir la huella ambiental."
    }
  ];

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
              style={{ width: '115px', height: 'auto' }}
              className="object-contain"
              priority
            />}
          </a>
          <nav className="hidden md:flex gap-6 items-center">
            <Button variant="ghost" asChild><a href="/#services">Servicios</a></Button>
            <Button variant="ghost" asChild><a href="/quienes-somos">Quiénes somos</a></Button>
            <Button variant="ghost" asChild><a href="/proyectos">Proyectos</a></Button>
            <Button variant="ghost" asChild><a href="/#reviews">Opiniones</a></Button>
            <Button variant="ghost" asChild><a href="/#faq">Preguntas Frecuentes</a></Button>
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
                  <nav className="flex flex-col items-start gap-4 p-4 mt-8">
                     {logoImage && <Image 
                      src={logoImage.imageUrl} 
                      alt="Vestalar Logo" 
                      width={115} 
                      height={38} 
                      style={{ width: '115px', height: 'auto' }}
                      className="object-contain mb-4"
                    />}
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/#services">Servicios</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/quienes-somos">Quiénes somos</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/proyectos">Proyectos</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/#reviews">Opiniones</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="ghost" className="w-full justify-start" asChild><a href="/#faq">Preguntas Frecuentes</a></Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button variant="default" className="w-full justify-start" onClick={() => setIsBudgetModalOpen(true)}>Inicia Tu Proyecto Con Nosotros</Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative h-[50vh] w-full">
          <Image
            src={aboutUsHero.imageUrl}
            alt={aboutUsHero.description}
            width={1920}
            height={960}
            className="w-full h-full object-cover"
            data-ai-hint={aboutUsHero.imageHint}
            priority
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50 p-4 w-full">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Sobre Vestalar</h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl">Construyendo sueños, reformando realidades.</p>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Nuestra Esencia</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                Somos un equipo de profesionales con más de veinte años de experiencia. Nos encanta renovar hogares y negocios, cuidando cada detalle como si fuera nuestra propia casa. Usamos materiales de proximidad (km 0) para darle vida a tus proyectos, apoyar la economía local y reducir la huella ambiental. Nuestro objetivo es que disfrutes del proceso y te sientas acompañado en todo momento.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="text-center flex flex-col items-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground mb-4">
                                <value.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="py-12 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-primary font-semibold">
                      <Heart className="w-5 h-5"/>
                      <span>Nuestra Misión</span>
                  </div>
                  <h3 className="text-2xl font-bold">Crear Espacios que Inspiran</h3>
                  <p className="text-muted-foreground">
                      Valoramos la experiencia y el buen hacer, priorizamos la satisfacción del cliente, creemos en la transparencia y la confianza, buscamos siempre la máxima calidad y cuidamos nuestro compromiso con lo local, porque elegir materiales de km 0 reduce emisiones y residuos y apoya a la economía local.
                  </p>
              </div>
              <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-primary font-semibold">
                      <Rocket className="w-5 h-5"/>
                      <span>Nuestra Visión</span>
                  </div>
                  <h3 className="text-2xl font-bold">Liderar la Reforma Sostenible</h3>
                  <p className="text-muted-foreground">
                      Queremos ser la empresa de reformas que todos recomiendan. Innovamos en técnicas y materiales para construir un futuro donde las obras respeten el entorno y mejoren la vida de las personas. Nos vemos liderando el camino hacia un sector de reformas más responsable y creativo.
                  </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 text-center bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4">Inicia Tu Proyecto Con Nosotros</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Hagamos realidad la reforma de tus sueños. Contacta con nuestro equipo de expertos y recibe un presupuesto a medida sin compromiso.
            </p>
            <Button size="lg" onClick={() => setIsBudgetModalOpen(true)}>
              Pide Tu Presupuesto Ahora
            </Button>
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
              style={{ width: '115px', height: 'auto' }}
              className="object-contain"
            />}
            <p className="text-sm">
              Tu empresa de reformas integrales con base en Zaragoza. Transformamos espacios en toda España para crear el hogar de tus sueños.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:underline">Servicios de Reformas</a></li>
              <li><a href="/quienes-somos" className="hover:underline">Quiénes somos</a></li>
              <li><a href="/proyectos" className="hover:underline">Proyectos</a></li>
              <li><a href="/#reviews" className="hover:underline">Opiniones</a></li>
              <li><a href="/#faq" className="hover:underline">Preguntas Frecuentes</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setIsBudgetModalOpen(true); }} className="hover:underline">Contacto y Presupuesto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><span>Servicio en toda España</span></li>
              <li className="flex items-center gap-2"><span>+34 976 076 982</span></li>
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
        </div>
      </footer>
      
    </div>
  );
}
