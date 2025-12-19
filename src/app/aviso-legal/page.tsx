
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Facebook, Instagram, Linkedin } from 'lucide-react';
import allImagesData from '@/lib/placeholder-images.json';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { BudgetRequestDialog } from '@/components/BudgetRequestDialog';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

export default function LegalNoticePage() {
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
                <h1>Aviso Legal</h1>
                <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                <h2>1. Ley de los Servicios de la Sociedad de la Información (LSSI)</h2>
                <p>
                    Vestalar Servicios (en adelante, “EL RESPONSABLE”), pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.
                </p>
                <p>
                    Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación. EL RESPONSABLE se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web.
                </p>

                <h2>2. Datos Identificativos</h2>
                <p>
                    Este sitio web es propiedad de **Vestalar Servicios**, con NIF **[Rellenar con el NIF]**, domicilio fiscal en **[Rellenar con la dirección fiscal completa, incluyendo código postal y ciudad]**, y correo electrónico de contacto <a href="mailto:vestalar@vestalar.com">vestalar@vestalar.com</a>.
                </p>
                
                <h2>3. Objeto</h2>
                <p>
                    A través de este sitio web, ofrecemos a los usuarios la posibilidad de acceder a la información sobre nuestros servicios de reformas, solicitar presupuestos y contactar con nosotros.
                </p>

                <h2>4. Privacidad y Tratamiento de Datos</h2>
                <p>
                    Cuando para el acceso a determinados contenidos o servicios sea necesario facilitar datos de carácter personal, los usuarios garantizarán su veracidad, exactitud, autenticidad y vigencia. EL RESPONSABLE dará a dichos datos el tratamiento automatizado que corresponda en función de su naturaleza o finalidad, en los términos indicados en la sección de <a href="/politica-de-privacidad">Política de Privacidad</a>.
                </p>

                <h2>5. Propiedad Industrial e Intelectual</h2>
                <p>
                    El usuario reconoce y acepta que todos los contenidos que se muestran en este sitio web (diseños, textos, imágenes, logos, iconos, software, nombres comerciales, marcas) están sujetos a derechos de Propiedad Intelectual. Todas las marcas, nombres comerciales o signos distintivos, y todos los derechos de propiedad industrial e intelectual sobre los contenidos son propiedad exclusiva del RESPONSABLE y/o de terceros.
                </p>
                <p>
                    El usuario se compromete a no reproducir, copiar, distribuir, poner a disposición o de cualquier otra forma comunicar públicamente, transformar o modificar tales contenidos. El acceso al sitio web no implica renuncia, transmisión, licencia o cesión total ni parcial de dichos derechos, salvo que se establezca expresamente lo contrario.
                </p>
                
                <h2>6. Obligaciones y Responsabilidades del Usuario</h2>
                <p>El usuario se compromete a:</p>
                <ul>
                    <li>Hacer un uso adecuado y lícito del sitio web, de conformidad con la legislación aplicable, la moral y el orden público.</li>
                    <li>Proveerse de todos los medios y requerimientos técnicos que se precisen para acceder al sitio web.</li>
                    <li>Facilitar información veraz al cumplimentar sus datos en los formularios y mantenerlos actualizados. El usuario será el único responsable de las manifestaciones falsas o inexactas que realice.</li>
                </ul>
                
                <h2>7. Exclusión de Responsabilidades</h2>
                <p>
                    EL RESPONSABLE no garantiza el acceso continuado ni la correcta visualización de los elementos e informaciones contenidas en la web, que puedan verse impedidos o interrumpidos por factores fuera de su control. No se hace responsable de las decisiones que pudieran adoptarse como consecuencia del acceso a los contenidos o informaciones ofrecidas.
                </p>
                <p>
                    EL RESPONSABLE no será responsable de los perjuicios que se pudieran derivar, entre otros, de: interferencias, interrupciones, virus informáticos, o desconexiones; abuso indebido del sitio web; o errores de seguridad producidos por un mal funcionamiento del navegador.
                </p>
                
                <h2>8. Ley Aplicable y Jurisdicción</h2>
                <p>
                    Las presentes Condiciones Generales de Uso, así como el uso del sitio web, se regirán por la legislación española. Para la resolución de cualquier controversia, las partes se someterán a los Juzgados y Tribunales del domicilio social del RESPONSABLE del sitio web.
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
