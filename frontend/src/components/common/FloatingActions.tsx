import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '../../config/contact';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappRaw}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`;

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* WhatsApp Quick Chat Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Pravaah Technology"
        className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-4 py-3 rounded-full shadow-elevated transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="text-xs font-semibold max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          Chat on WhatsApp
        </span>
      </a>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-11 h-11 rounded-full bg-[#0B1B3A] text-white flex items-center justify-center shadow-elevated hover:bg-[#1769E0] transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </aside>
  );
};
