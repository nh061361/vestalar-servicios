
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Facebook, Instagram, Linkedin, Award } from 'lucide-react';
import allImagesData from '@/lib/placeholder-images.json';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { BudgetRequestDialog } from '@/components/BudgetRequestDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FseProgramPage() {
  const [isClient, setIsClient] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const { placeholderImages: PlaceHolderImages } = allImagesData;

  const logoImage = PlaceHolderImages.find(p => p.id === 'main-logo');
  const footerLogoImage = PlaceHolderImages.find(p => p.id === 'footer-logo');

  const grants = [
    {
      amount: "5.400€",
      concept: "Subvención al establecimiento como trabajador autónomo.",
      details: "Jose Arrondo Tomas ha sido beneficiara de la cantidad de 5.400€, en concepto al establecimiento como trabajador autónomo. La subvención otorgada se enmarca dentro del “Programa fomento de empleo autónomo” en el marco Programa FSE+ Aragón 2021-2027, siendo financiada la actuación en un 60% por fondos propios del Gobierno de Aragón y en un 40% por el Fondo Social Europeo Plus."
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
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold">Programa FSE+ Aragón 2021-2027</h1>
                  <p className="mt-4 text-lg text-muted-foreground">Vestalar Servicios, beneficiaria de las ayudas para el fomento del empleo autónomo.</p>
                </div>
                
                <div className="my-10 flex flex-wrap items-center justify-center gap-6 md:gap-12 border-y border-border py-8">
                    <Image src="https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fotros%2Ffotos%20Programa%20FSE%2B%20Arag%C3%B3n%2Fgob.png?alt=media&token=e3e68c00-5046-4c2d-a04d-9ce71daebd7d" alt="Logo Gobierno de Aragón" width={180} height={44} className="object-contain"/>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fotros%2Ffotos%20Programa%20FSE%2B%20Arag%C3%B3n%2Ffondos.png?alt=media&token=90bab8f9-1574-44c9-804f-db06b33fea88" alt="Logo Aragón en Europa" width={180} height={44} className="object-contain"/>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Fotros%2Ffotos%20Programa%20FSE%2B%20Arag%C3%B3n%2Fue.png?alt=media&token=f4847a2d-150f-4bbe-a036-fb9e423c5443" alt="Logo Fondo Social Europeo Plus" width={180} height={45} className="object-contain"/>
                </div>

                <div className="grid gap-8 mt-12">
                  {grants.map((grant, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-muted/50 p-6">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                                <Award className="h-5 w-5" />
                            </div>
                            <CardTitle className="m-0 text-lg">{grant.concept}</CardTitle>
                          </div>
                          <p className="font-semibold text-foreground text-lg md:text-xl shrink-0">{grant.amount}</p>
                      </CardHeader>
                      <CardContent className="p-6 text-muted-foreground text-sm">
                        <p>Dña Jose Arrondo Tomas ha sido beneficiara de la cantidad de 5.400€, en concepto al establecimiento como trabajador autónomo. La subvención otorgada se enmarca dentro del “Programa fomento de empleo autónomo” en el marco Programa FSE+ Aragón 2021-2027, siendo financiada la actuación en un 60% por fondos propios del Gobierno de Aragón y en un 40% por el Fondo Social Europeo Plus.</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 bg-background p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold text-center">Objetivo de las Ayudas</h2>
                    <p className="mt-4 text-center text-muted-foreground">
                        El objetivo principal de estas ayudas es apoyar el autoempleo y el emprendimiento en la Comunidad Autónoma de Aragón, fomentando el establecimiento de personas desempleadas como trabajadores autónomos, favoreciendo el mantenimiento y la consolidación de su actividad económica, promoviendo el relevo generacional y la inserción laboral de familiares colaboradores.
                    </p>
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
            Diseñado y desarrollado por <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">Adevintia</a>
          </p>
        </div>
      </footer>
      
    </div>
  );
}
