
'use client';

import { cn } from '@/lib/utils';
import { MessageCircle, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WhatsAppButton() {
  const phoneNumber = '976076982'; 
  const message = '¡Hola! Me gustaría obtener más información sobre vuestros servicios.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const [showHint, setShowHint] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let hintTimer: NodeJS.Timeout;
    let hideHintTimer: NodeJS.Timeout;

    const startAnimation = () => {
      setIsAnimating(true);
      hintTimer = setTimeout(() => {
        setShowHint(true);
      }, 2500);
  
      hideHintTimer = setTimeout(() => {
        setShowHint(false);
        setIsAnimating(false);
      }, 7500); // 2.5s delay + 5s show time
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        startAnimation();
      } else {
        clearTimeout(hintTimer);
        clearTimeout(hideHintTimer);
        setShowHint(false);
        setIsAnimating(false);
      }
    };
    
    startAnimation();

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(hintTimer);
      clearTimeout(hideHintTimer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end group">
      {showHint && (
        <div className="bg-white text-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg mr-4 transition-all duration-300 animate-in fade-in-0 slide-in-from-right-5">
          ¡Contacta con nosotros!
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_11px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0',
           isAnimating && 'animate-pulse-whatsapp'
        )}
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.5} />
          <Phone className="absolute h-4 w-4 md:h-5 md:w-5" />
        </div>
      </a>
    </div>
  );
}
