
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function CookieConsent() {
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
  });

  useEffect(() => {
    try {
      const consentStatus = localStorage.getItem('cookie_consent_status');
      if (!consentStatus) {
        setShowModal(true);
      } else {
        const storedPrefs = JSON.parse(localStorage.getItem('cookie_preferences') || '{}');
        if (storedPrefs.analytics) {
          // Here you would initialize analytics if consent was previously given
          // e.g., load Google Analytics script
        }
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  const handleSavePreferences = (acceptedPrefs: { analytics: boolean }) => {
    try {
      const status = acceptedPrefs.analytics ? 'accepted' : 'rejected';
      localStorage.setItem('cookie_consent_status', status);
      localStorage.setItem('cookie_preferences', JSON.stringify(acceptedPrefs));
      
      if (acceptedPrefs.analytics) {
        // Here is where you would trigger the analytics script loading
        console.log('Analytics accepted. Loading scripts...');
        // In a real scenario, you'd call a function here to inject the GA script
      }
      
      setShowModal(false);
       // window.location.reload(); // Optional: reload to apply changes
    } catch (error) {
      console.error("Could not write to localStorage:", error);
      setShowModal(false);
    }
  };

  const acceptAll = () => {
    const allPrefs = { analytics: true };
    setPreferences(allPrefs);
    handleSavePreferences(allPrefs);
  };

  const rejectAll = () => {
    const noPrefs = { analytics: false };
    setPreferences(noPrefs);
    handleSavePreferences(noPrefs);
  };
  
  const saveSelection = () => {
    handleSavePreferences(preferences);
  }

  if (!showModal) {
    return null;
  }

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="max-w-lg" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl">Gestionar consentimiento</DialogTitle>
          <DialogDescription className="text-base py-2">
            Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para
            almacenar y/o acceder a la información del dispositivo. El consentimiento de estas
            tecnologías nos permitirá procesar datos como el comportamiento de navegación. No
            consentir o retirar el consentimiento, puede afectar negativamente a ciertas
            características y funciones.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-semibold">Funcional</h4>
              <p className="text-sm text-muted-foreground">Necesarias para el funcionamiento de la web.</p>
            </div>
            <p className="text-sm font-medium text-green-600">Siempre activo</p>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-semibold">Estadísticas</h4>
              <p className="text-sm text-muted-foreground">Nos ayudan a entender cómo interactúan los visitantes.</p>
            </div>
            <Switch
              id="analytics-cookie"
              checked={preferences.analytics}
              onCheckedChange={(checked) => setPreferences(prev => ({...prev, analytics: checked}))}
            />
          </div>
        </div>

        <DialogFooter className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Button onClick={acceptAll}>Aceptar</Button>
          <Button variant="outline" onClick={rejectAll}>Denegar</Button>
          <Button variant="outline" onClick={saveSelection}>Guardar Preferencias</Button>
        </DialogFooter>
        <div className="text-center text-sm mt-4">
            <Link href="/politica-de-privacidad" className="underline hover:text-primary">
                Política de Privacidad
            </Link>
            <span className="mx-2 text-muted-foreground">|</span>
            <Link href="/politica-de-cookies" className="underline hover:text-primary">
                Política de Cookies
            </Link>
            <span className="mx-2 text-muted-foreground">|</span>
            <Link href="/aviso-legal" className="underline hover:text-primary">
                Aviso Legal
            </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
