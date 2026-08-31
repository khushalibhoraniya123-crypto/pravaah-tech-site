"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';

interface NavLinkItem {
  label: string;
  targetId: string;
}

const NAV_ITEMS: NavLinkItem[] = [
  { label: 'Home', targetId: 'home' },
  { label: 'Services', targetId: 'services' },
  { label: 'Solutions', targetId: 'solutions' },
  { label: 'About', targetId: 'about' },
  { label: 'Process', targetId: 'process' },
  { label: 'Why Us', targetId: 'why-us' },
  { label: 'Portfolio', targetId: 'portfolio' },
  { label: 'Reviews', targetId: 'testimonials' },
  { label: 'Contact', targetId: 'contact' },
];

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + 160;
      const sectionIds = [
        'contact',
        'testimonials',
        'portfolio',
        'why-us',
        'process',
        'technologies',
        'about',
        'solutions',
        'services',
        'home',
      ];
      
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    setIsMobileMenuOpen(false);

    if (pathname !== '/') {
      router.push(`/#${targetId}`);
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
    } else {
      router.push(`/#${targetId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F8FE]/95 backdrop-blur-md shadow-soft border-b border-[#D4E2F5] py-2 sm:py-2.5'
          : 'bg-[#F8FAFD]/90 backdrop-blur-sm border-b border-[#DDE7F6]/80 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* 1. Official Pravaah Logo */}
          <div className="flex items-center">
            <Logo onClick={() => setIsMobileMenuOpen(false)} />
          </div>

          {/* 2. Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.targetId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'text-[#1769E0] bg-blue-50/90 shadow-xs border border-blue-100'
                      : 'text-[#334155] hover:text-[#0B1B3A] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* 3. CTA Action: Start a Project */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              withArrow
              onClick={() => scrollToSection('contact')}
              className="shadow-soft text-xs font-bold py-2 px-4 rounded-xl shadow-glow-blue hover:scale-105"
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[#D6E3F4] bg-white text-[#0B1B3A] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-[#D6E3F4] bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.targetId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-50 text-[#1769E0] border border-blue-100'
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
                className="w-full justify-center shadow-glow-blue"
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

