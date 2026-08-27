import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Smartphone, Palette, Cpu, Sparkles, Server, ArrowRight, Zap, Users, Layers, ShoppingBag, Boxes } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

interface NavLinkItem {
  label: string;
  targetId: string;
  hasDropdown?: boolean;
  type?: 'services' | 'solutions';
}

const NAV_ITEMS: NavLinkItem[] = [
  { label: 'Home', targetId: 'home' },
  { label: 'Services', targetId: 'services', hasDropdown: true, type: 'services' },
  { label: 'Solutions', targetId: 'solutions', hasDropdown: true, type: 'solutions' },
  { label: 'About Us', targetId: 'about' },
  { label: 'Process', targetId: 'process' },
  { label: 'Portfolio', targetId: 'portfolio' },
  { label: 'Contact Us', targetId: 'contact' },
];

const SERVICES_DROPDOWN = [
  { title: 'Web Development', desc: 'Custom platforms & Next.js web apps', icon: Globe, badge: 'Scalable' },
  { title: 'App Development', desc: 'iOS, Android & Flutter mobile apps', icon: Smartphone, badge: 'Native/Hybrid' },
  { title: 'UI/UX Design', desc: 'Figma design systems & interactive prototypes', icon: Palette, badge: 'Human-Centered' },
  { title: 'Software Solutions', desc: 'Custom enterprise software, ERP & CRM', icon: Cpu, badge: 'Enterprise' },
  { title: 'AI Solutions', desc: 'Intelligent AI agents & custom LLMs', icon: Sparkles, badge: 'Cognitive' },
  { title: 'Digital Transformation', desc: 'Cloud infrastructure & microservices', icon: Server, badge: 'Cloud Native' },
];

const SOLUTIONS_DROPDOWN = [
  { title: 'Business Automation', desc: 'Automated workflows & task execution', icon: Zap },
  { title: 'CRM Solutions', desc: 'Lead management & sales pipeline tracking', icon: Users },
  { title: 'ERP Systems', desc: 'Unified resource & accounting platforms', icon: Layers },
  { title: 'E-commerce Platforms', desc: 'Headless high-converting stores', icon: ShoppingBag },
  { title: 'Inventory Management', desc: 'Warehouse tracking & reorder alerts', icon: Boxes },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'solutions' | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<'services' | 'solutions' | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Scrollspy & Scrolled state
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
    setActiveDropdown(null);

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

  const handleMouseEnter = (type: 'services' | 'solutions') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
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
          
          {/* 1. Brand Logo */}
          <div className="flex items-center">
            <Logo onClick={() => setIsMobileMenuOpen(false)} />
          </div>

          {/* 2. Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.targetId;
              const hasDrop = item.hasDropdown;

              if (hasDrop) {
                const isDropOpen = activeDropdown === item.type;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.type!)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => scrollToSection(item.targetId)}
                      className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                        isCurrent || isDropOpen
                          ? 'text-[#1769E0] bg-blue-50/80 shadow-xs'
                          : 'text-[#334155] hover:text-[#0B1B3A] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropOpen ? 'rotate-180 text-[#1769E0]' : 'text-slate-400'}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 sm:w-96 rounded-2xl bg-white border border-[#E4E7EC] shadow-elevated p-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="space-y-1">
                          {item.type === 'services' ? (
                            SERVICES_DROPDOWN.map((s, idx) => {
                              const Icon = s.icon;
                              return (
                                <button
                                  key={idx}
                                  onClick={() => scrollToSection('services')}
                                  className="w-full p-2.5 rounded-xl text-left hover:bg-blue-50/70 transition-colors flex items-start gap-3 group cursor-pointer"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1769E0] group-hover:bg-[#1769E0] group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon className="w-4.5 h-4.5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-[#0B1B3A] group-hover:text-[#1769E0]">{s.title}</span>
                                      <span className="text-[10px] font-semibold text-[#6C3FE8] bg-purple-50 px-2 py-0.5 rounded-full">{s.badge}</span>
                                    </div>
                                    <p className="text-[11px] text-[#667085] truncate">{s.desc}</p>
                                  </div>
                                </button>
                              );
                            })
                          ) : (
                            SOLUTIONS_DROPDOWN.map((s, idx) => {
                              const Icon = s.icon;
                              return (
                                <button
                                  key={idx}
                                  onClick={() => scrollToSection('solutions')}
                                  className="w-full p-2.5 rounded-xl text-left hover:bg-purple-50/70 transition-colors flex items-start gap-3 group cursor-pointer"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-purple-50 text-[#6C3FE8] group-hover:bg-[#6C3FE8] group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                                    <Icon className="w-4.5 h-4.5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-bold text-[#0B1B3A] group-hover:text-[#6C3FE8]">{s.title}</div>
                                    <p className="text-[11px] text-[#667085] truncate">{s.desc}</p>
                                  </div>
                                </button>
                              );
                            })
                          )}
                        </div>

                        <div className="mt-2 pt-2 border-t border-slate-100 px-2 flex items-center justify-between text-[11px] font-bold text-[#1769E0]">
                          <span>View all {item.label.toLowerCase()}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
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

              if (item.hasDropdown) {
                const isExpanded = mobileExpanded === item.type;
                return (
                  <div key={item.label} className="border-b border-slate-100 last:border-none">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => scrollToSection(item.targetId)}
                        className={`flex-1 py-3 text-left text-sm font-bold ${
                          isCurrent ? 'text-[#1769E0]' : 'text-[#0B1B3A]'
                        }`}
                      >
                        {item.label}
                      </button>
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.type!)}
                        className="p-2 text-slate-400 hover:text-[#1769E0]"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#1769E0]' : ''}`} />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="pl-3 pb-3 space-y-1.5 animate-in fade-in duration-150">
                        {item.type === 'services'
                          ? SERVICES_DROPDOWN.map((s, idx) => (
                              <button
                                key={idx}
                                onClick={() => scrollToSection('services')}
                                className="w-full text-left py-1.5 text-xs text-[#475467] hover:text-[#1769E0] font-medium flex items-center justify-between"
                              >
                                <span>{s.title}</span>
                                <span className="text-[10px] text-purple-600 font-semibold">{s.badge}</span>
                              </button>
                            ))
                          : SOLUTIONS_DROPDOWN.map((s, idx) => (
                              <button
                                key={idx}
                                onClick={() => scrollToSection('solutions')}
                                className="w-full text-left py-1.5 text-xs text-[#475467] hover:text-[#6C3FE8] font-medium"
                              >
                                {s.title}
                              </button>
                            ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl text-left text-sm font-bold transition-all cursor-pointer ${
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
