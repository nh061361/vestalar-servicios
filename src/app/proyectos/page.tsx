
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Facebook, Instagram, Linkedin, Award, Users, Handshake, Leaf, Rocket, Heart } from 'lucide-react';
import allImagesData from '@/lib/placeholder-images.json';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { BudgetRequestDialog } from '@/components/BudgetRequestDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export default function ProjectsPage() {
  const [isClient, setIsClient] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { placeholderImages: PlaceHolderImages } = allImagesData;

  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');
  const footerLogoImage = PlaceHolderImages.find(p => p.id === 'footer-logo');
  const projectImages = PlaceHolderImages.filter(p => p.id.startsWith('project-'));

  const companyInfo = [
    {
      icon: Heart,
      title: "Nuestra Misión",
      description: "Crear espacios que inspiran. Valoramos la experiencia, la satisfacción del cliente, la transparencia y la calidad, con un fuerte compromiso local (km 0) para apoyar nuestra comunidad."
    },
    {
      icon: Rocket,
      title: "Nuestra Visión",
      description: "Ser la empresa de reformas que todos recomiendan, liderando el camino hacia un sector más responsable y creativo con técnicas y materiales sostenibles."
    },
    {
      icon: Award,
      title: "Nuestros Valores",
      description: "Innovación, trabajo en equipo y responsabilidad social. Devolvemos a la comunidad lo que recibimos, apoyando el empleo local y protegiendo la cultura y biodiversidad de nuestro entorno."
    },
  ]

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
                      <Button variant="default" className="w-full justify-start" onClick={() => setIsBudgetModalOpen(true)}>Inicia Tu Proyecto</Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Columna Izquierda - Mision, Vision, Valores */}
                    <div className="lg:col-span-1 space-y-8">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Nuestra Filosofía y Proyectos</h1>
                        {companyInfo.map((item, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <item.icon className="w-6 h-6 text-primary"/>
                                        <CardTitle>{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Columna Derecha - Galería de Proyectos */}
                    <div className="lg:col-span-2">
                        <div className="columns-2 md:columns-3 gap-4">
                            {projectImages.map((image, index) => (
                                <div key={index} className="mb-4 break-inside-avoid">
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        width={600}
                                        height={800}
                                        className="w-full h-auto object-cover rounded-lg shadow-md"
                                        data-ai-hint={image.imageHint}
                                    />
                                </div>
                            ))}
                        </div>
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
