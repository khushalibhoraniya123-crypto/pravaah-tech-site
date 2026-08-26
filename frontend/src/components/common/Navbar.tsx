import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

const NAV_LINKS = [
  { label: 'Home', targetId: 'home' },
  { label: 'Services', targetId: 'services' },
  { label: 'Solutions', targetId: 'solutions' },
  { label: 'About', targetId: 'about' },
  { label: 'Contact', targetId: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll state and scrollspy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrollspy active section detection
      const scrollPosition = window.scrollY + 90;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const link = NAV_LINKS[i];
        const element = document.getElementById(link.targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(link.targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 64;
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
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E4E7EC]/80 py-2 sm:py-2.5'
          : 'bg-white/85 backdrop-blur-md border-b border-[#E4E7EC]/40 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 1. Official Pravaah Logo */}
          <div className="flex items-center">
            <Logo onClick={() => setIsMobileMenuOpen(false)} />
          </div>

          {/* 2. Navigation: Home | Services | Solutions | About | Contact */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <button
                  key={link.targetId}
                  onClick={() => scrollToSection(link.targetId)}
                  className={`px-3 py-1.5 rounded-lg text-[13.5px] lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#1769E0] font-semibold bg-blue-50/90 shadow-xs'
                      : 'text-[#475467] hover:text-[#081A3A] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* 3. Right Action: Start a Project → Button Only */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="sm"
              withArrow
              onClick={() => scrollToSection('contact')}
              className="shadow-xs text-xs font-semibold py-2 px-3.5 rounded-lg"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-[#E4E7EC] bg-white text-[#081A3A] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E7EC] bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <button
                  key={link.targetId}
                  onClick={() => scrollToSection(link.targetId)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-[#1769E0] font-bold'
                      : 'text-[#081A3A] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#98A2B3]" />
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
