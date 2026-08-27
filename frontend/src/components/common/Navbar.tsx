import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

interface NavLinkItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavLinkItem[] = [
  { label: 'Home', targetId: 'home' },
  { label: 'Services', targetId: 'services' },
  { label: 'Solutions', targetId: 'solutions' },
  { label: 'About Us', targetId: 'about' },
  { label: 'Process', targetId: 'process' },
  { label: 'Portfolio', targetId: 'portfolio' },
  { label: 'Contact Us', targetId: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Scrollspy & Scrolled state detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 140;
        const sectionIds = ['contact', 'portfolio', 'process', 'technologies', 'values', 'about', 'solutions', 'services', 'home'];
        
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const offsetTop = el.offsetTop;
            if (scrollPosition >= offsetTop) {
              setActiveSection(id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (targetId: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 70;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E4E7EC] py-2 sm:py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#E4E7EC]/60 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* 1. Official Pravaah Logo */}
          <div className="flex items-center">
            <Logo onClick={() => setIsMobileMenuOpen(false)} />
          </div>

          {/* 2. Desktop Direct Nav Links (No dropdowns) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.targetId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'text-[#1769E0] bg-blue-50/80 shadow-xs'
                      : 'text-[#334155] hover:text-[#0B1B3A] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* 3. CTA Action: Start a Project */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="sm"
              withArrow
              onClick={() => scrollToSection('contact')}
              className="shadow-soft text-xs font-bold py-2 px-4 rounded-xl"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[#E4E7EC] bg-white text-[#0B1B3A] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E7EC] bg-white px-4 pt-3 pb-6 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.targetId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-50 text-[#1769E0]'
                      : 'text-[#0B1B3A] hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#E4E7EC]">
              <Button
                variant="primary"
                size="md"
                withArrow
                onClick={() => scrollToSection('contact')}
                className="w-full justify-center"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
