
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Facebook, Instagram, Linkedin, User, Database, Shield, Share2, Clock, CheckSquare } from 'lucide-react';
import allImagesData from '@/lib/placeholder-images.json';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { BudgetRequestDialog } from '@/components/BudgetRequestDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export default function PrivacyPolicyPage() {
  const [isClient, setIsClient] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { placeholderImages: PlaceHolderImages } = allImagesData;

  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');
  const footerLogoImage = PlaceHolderImages.find(p => p.id === 'footer-logo');
  
  const privacySections = [
    {
      icon: User,
      title: "1. Responsable del Tratamiento",
      content: "El responsable del tratamiento de los datos personales recabados a través de este sitio web es **Vestalar Servicios**, con domicilio en Zaragoza, España. Puedes contactarnos a través del correo electrónico: <a href='mailto:vestalar@vestalar.com' class='text-primary hover:underline'>vestalar@vestalar.com</a>."
    },
    {
      icon: Database,
      title: "2. Datos Recabados y Finalidad",
      content: "Recogemos los datos que nos proporcionas en nuestros formularios (nombre, email, teléfono y descripción del proyecto) con la única finalidad de gestionar tu solicitud, atender tus consultas y enviarte la información o presupuesto que nos pidas."
    },
    {
      icon: Shield,
      title: "3. Legitimación para el Tratamiento",
      content: "La base legal para el tratamiento de tus datos es tu **consentimiento explícito**, que nos otorgas al marcar la casilla de aceptación de la política de privacidad antes de enviar cualquier formulario."
    },
    {
      icon: Share2,
      title: "4. Cesión de Datos a Terceros",
      content: "Tus datos personales no serán cedidos a terceros, salvo que exista una obligación legal. Utilizamos proveedores de servicios (como el de correo electrónico) que actúan como encargados del tratamiento, con quienes hemos firmado los correspondientes contratos para garantizar que cumplen con la normativa."
    },
    {
      icon: Clock,
      title: "5. Plazo de Conservación",
      content: "Tus datos se conservarán durante el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar."
    },
    {
      icon: CheckSquare,
      title: "6. Tus Derechos",
      content: "Tienes derecho a acceder, rectificar, suprimir tus datos, así como otros derechos como la limitación del tratamiento y la portabilidad. Puedes ejercerlos enviando un correo a <a href='mailto:vestalar@vestalar.com' class='text-primary hover:underline'>vestalar@vestalar.com</a>, indicando el derecho que deseas ejercer y adjuntando una copia de tu DNI."
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
              className="object-contain"
              priority
            />}
          </a>
          <nav className="hidden md:flex gap-6 items-center">
            <Button variant="ghost" asChild><a href="/proyectos">Proyectos</a></Button>
            <Button variant="ghost" asChild><a href="/#services">Servicios</a></Button>
            <Button variant="ghost" asChild><a href="/quienes-somos">Quiénes somos</a></Button>
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
        <section className="py-12 md:py-20 bg-secondary">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                 <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidad</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div className="space-y-6">
                    {privacySections.map((section, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardHeader className="flex flex-row items-center gap-4 bg-muted/50 p-6">
                                <section.icon className="h-6 w-6 text-primary" />
                                <CardTitle className="m-0 text-lg">{section.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 text-muted-foreground">
                                <p dangerouslySetInnerHTML={{ __html: section.content }} />
                            </CardContent>
                        </Card>
                    ))}
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
              width={100} 
              height={33}
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
              <li className="flex items-center gap-2"><span>976 07 69 82</span></li>
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
           <p className="mt-4 text-xs text-accent-foreground/60">
            Diseñado y desarrollado por Nicole Marie Hernández Andújar
          </p>
        </div>
      </footer>
      
    </div>
  );
}

    