import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Vestalar | Reformas Integrales en Zaragoza y toda España',
  description: 'Especialistas en reformas integrales de cocinas, baños y viviendas completas. Presupuestos a medida en Zaragoza y resto de España. Calidad y confianza garantizadas.',
  keywords: 'reformas, reformas integrales, reformas zaragoza, reformas españa, presupuesto reforma, reformar cocina, reformar baño, empresa de reformas, vestalar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <WhatsAppButton />
      </body>
    </html>
  );
}
