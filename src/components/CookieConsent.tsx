'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consentStatus = localStorage.getItem('cookie_consent_status');
      if (!consentStatus) {
        setIsVisible(true);
      }
    } catch (error) {
        console.error("Could not access localStorage:", error);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    try {
        const status = accepted ? 'accepted' : 'rejected';
        localStorage.setItem('cookie_consent_status', status);
        setIsVisible(false);
        // If you were loading analytics scripts based on consent,
        // you might reload the page or trigger an event here.
        // For example: window.location.reload(); 
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
          <div className="flex-1 text-sm text-foreground text-center md:text-left">
             <h3 className="font-semibold mb-1">Tu privacidad es importante</h3>
             <p>
                Utilizamos cookies para mejorar tu experiencia y analizar el tráfico. Al hacer clic en "Aceptar", consientes el uso de cookies de análisis. Puedes leer más en nuestra{' '}
                <Link href="/politica-de-cookies" className="underline hover:text-primary">
                Política de Cookies
                </Link>.
             </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button onClick={() => handleConsent(true)} className="w-full sm:w-auto">
                Aceptar
            </Button>
            <Button onClick={() => handleConsent(false)} variant="outline" className="w-full sm:w-auto">
                Rechazar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
