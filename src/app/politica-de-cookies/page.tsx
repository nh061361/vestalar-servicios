
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Facebook, Instagram, Linkedin } from 'lucide-react';
import allImagesData from '@/lib/placeholder-images.json';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { BudgetRequestDialog } from '@/components/BudgetRequestDialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export default function CookiePolicyPage() {
  const [isClient, setIsClient] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { placeholderImages: PlaceHolderImages } = allImagesData;

  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');
  const footerLogoImage = PlaceHolderImages.find(p => p.id === 'footer-logo');

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
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl prose lg:prose-xl">
                <h1>Política de Cookies</h1>
                <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <h2>1. ¿Qué son las cookies?</h2>
                <p>
                    Una cookie es un pequeño fichero de texto que un sitio web almacena en el navegador del usuario. Las cookies facilitan el uso y la navegación por una página web y son esenciales para el funcionamiento de internet, aportando innumerables ventajas en la prestación de servicios interactivos.
                </p>

                <h2>2. ¿Qué tipos de cookies utilizamos?</h2>
                <p>Este sitio web utiliza cookies propias y de terceros con diferentes finalidades:</p>
                
                <h3>Cookies Técnicas (Esenciales)</h3>
                <p>
                    Son aquellas imprescindibles para el correcto funcionamiento de la web. Permiten la navegación y la utilización de sus diferentes opciones o servicios. Sin ellas, ciertas partes de la web podrían no funcionar correctamente.
                </p>
                <ul>
                    <li>
                        <strong>cookie_consent:</strong>
                        <ul>
                            <li><strong>Propósito:</strong> Almacena la preferencia del usuario sobre el consentimiento de cookies.</li>
                            <li><strong>Duración:</strong> 1 año.</li>
                            <li><strong>Tipo:</strong> Propia.</li>
                        </ul>
                    </li>
                </ul>

                <h3>Cookies de Análisis o Medición</h3>
                <p>
                    Nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos. Estas cookies solo se instalarán si usted las acepta explícitamente.
                </p>
                 <ul>
                    <li>
                        <strong>_ga (Google Analytics):</strong>
                        <ul>
                            <li><strong>Propósito:</strong> Se usa para distinguir a los usuarios.</li>
                            <li><strong>Duración:</strong> 2 años.</li>
                            <li><strong>Tipo:</strong> Tercero (Google).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>_gid (Google Analytics):</strong>
                         <ul>
                            <li><strong>Propósito:</strong> Se usa para distinguir a los usuarios.</li>
                            <li><strong>Duración:</strong> 24 horas.</li>
                            <li><strong>Tipo:</strong> Tercero (Google).</li>
                        </ul>
                    </li>
                     <li>
                        <strong>_gat (Google Analytics):</strong>
                         <ul>
                            <li><strong>Propósito:</strong> Se usa para limitar el porcentaje de solicitudes.</li>
                            <li><strong>Duración:</strong> 1 minuto.</li>
                            <li><strong>Tipo:</strong> Tercero (Google).</li>
                        </ul>
                    </li>
                </ul>

                <h2>3. Consentimiento y Gestión de Cookies</h2>
                <p>
                   Al visitar nuestro sitio web por primera vez, se le mostrará un banner donde podrá aceptar o rechazar el uso de cookies no esenciales. Las cookies técnicas se instalarán siempre, ya que son necesarias para el funcionamiento de la web.
                </p>
                <p>
                   Puede cambiar sus preferencias o retirar su consentimiento en cualquier momento.
                </p>

                <h2>4. Cómo deshabilitar las cookies en su navegador</h2>
                <p>
                    Además de gestionar su consentimiento en nuestro banner, puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. A continuación, le proporcionamos los enlaces de ayuda de los principales navegadores:
                </p>
                <ul>
                    <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">support.google.com</a></li>
                    <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">support.mozilla.org</a></li>
                    <li><strong>Internet Explorer:</strong> <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">windows.microsoft.com</a></li>
                    <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">support.apple.com</a></li>
                </ul>
                <p>
                    Tenga en cuenta que si deshabilita todas las cookies, es posible que algunas funcionalidades o apartados de nuestro sitio web no funcionen correctamente.
                </p>
                
                <h2>5. Contacto</h2>
                <p>
                    Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos a través del correo electrónico: <a href="mailto:vestalar@vestalar.com">vestalar@vestalar.com</a>.
                </p>
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
          <p className="mt-2 text-xs text-accent-foreground/80">
            <a href="/politica-de-privacidad" className="hover:underline">Política de Privacidad</a>
            <span className="mx-2">|</span>
            <a href="/politica-de-cookies" className="hover:underline">Política de Cookies</a>
          </p>
        </div>
      </footer>
      
    </div>
  );
}

    