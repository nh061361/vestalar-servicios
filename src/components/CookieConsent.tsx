'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent');
      if (consent !== 'true') {
        setIsVisible(true);
      }
    } catch (error) {
        console.error("Could not access localStorage:", error);
    }
  }, []);

  const handleAccept = () => {
    try {
        localStorage.setItem('cookie_consent', 'true');
        setIsVisible(false);
    } catch (error) {
        console.error("Could not write to localStorage:", error);
        setIsVisible(false); // Hide banner even if localStorage fails
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5">
      <div className="container mx-auto">
        <div className="bg-background border shadow-2xl rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground text-center md:text-left">
            Utilizamos cookies para mejorar tu experiencia en nuestra web. Al continuar, aceptas nuestro uso de cookies. Puedes leer más en nuestra{' '}
            <Link href="/politica-de-cookies" className="underline hover:text-primary">
              Política de Cookies
            </Link>.
          </p>
          <Button onClick={handleAccept} className="w-full md:w-auto flex-shrink-0">
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
}
