
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Inter } from 'next/font/google'
import { CookieConsent } from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Vestalar | Reformas Integrales en Zaragoza',
  description: 'Especialistas en reformas integrales de cocinas, baños y viviendas completas en Zaragoza. Presupuestos a medida. Calidad y confianza garantizadas.',
  keywords: 'reformas, reformas integrales, reformas zaragoza, presupuesto reforma, reformar cocina, reformar baño, empresa de reformas, vestalar',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: 'https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Flogo%2FVestalar_Imagotipo_original_cmyk.png?alt=media&token=4d56df93-01bf-44d9-926c-dfc261a9a62e', type: 'image/png', sizes: '512x512' },
    ],
    apple: 'https://firebasestorage.googleapis.com/v0/b/vestalarservicios.firebasestorage.app/o/Herramientas%2Flogo%2FVestalar_Imagotipo_original_cmyk.png?alt=media&token=4d56df93-01bf-44d9-926c-dfc261a9a62e',
  },
  metadataBase: new URL('https://www.vestalar.es'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
