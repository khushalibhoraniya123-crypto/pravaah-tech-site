import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

interface NavItem {
  label: string;
  path: string;
}

const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll state for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleNavClick = (link: NavItem) => {
    setIsMobileMenuOpen(false);

    if (link.path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    navigate(link.path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#EBF2FA]/95 backdrop-blur-md shadow-xs border-b border-[#D2DEEE] py-2 sm:py-2.5'
          : 'bg-[#EBF2FA]/85 backdrop-blur-md border-b border-[#D2DEEE]/60 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          
          {/* 1. Official Pravaah Logo */}
          <div className="flex items-center">
            <Logo onClick={() => setIsMobileMenuOpen(false)} />
          </div>

          {/* 2. Navigation: Home | Services | Solutions | About | Contact */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = isLinkActive(link.path);
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
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

          {/* 3. Right Action: Start a Project */}
          <div className="hidden md:flex items-center">
            <Link to="/start-a-project">
              <Button
                variant="primary"
                size="sm"
                withArrow
                className="shadow-xs text-xs font-semibold py-2 px-3.5 rounded-lg"
              >
                Start a Project
              </Button>
            </Link>
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
              const isActive = isLinkActive(link.path);
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
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
              <Link to="/start-a-project" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="primary"
                  size="md"
                  withArrow
                  className="w-full justify-center"
                >
                  Start a Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
