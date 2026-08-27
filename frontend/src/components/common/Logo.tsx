import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoHorizontalDarkTransparent from '../../assets/logo/Logo Horizontal Dark Transparent.png';
import logoHorizontalLightTransparent from '../../assets/logo/Logo Horizontal Light Transparent.png';
import logoHorizontalDark from '../../assets/logo/Logo Horizontal Dark.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
  className?: string;
  height?: number;
  width?: number | string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '',
  height,
  width,
  onClick
}) => {
  const navigate = useNavigate();
  const isLight = variant === 'light';

  // Footer Logo (variant='light'): Logo Horizontal Dark Transparent.png
  // Navbar Logo (variant='dark'): Logo Horizontal Light Transparent.png / Dark
  const selectedLogo = isLight 
    ? logoHorizontalDarkTransparent 
    : (logoHorizontalLightTransparent || logoHorizontalDark);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    
    // Always navigate cleanly to Home ('/') and scroll smoothly to top
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link 
      to="/" 
      onClick={handleClick}
      className={`inline-flex items-center group transition-transform duration-200 hover:opacity-95 cursor-pointer select-none ${className}`} 
      aria-label="Pravaah Technology - Back to Home"
      title="Pravaah Technology - Back to Home"
    >
      <img
        src={selectedLogo}
        alt="Pravaah Technology"
        style={{
          height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
          width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        }}
        className={`w-[160px] sm:w-[185px] md:w-[210px] h-auto object-contain drop-shadow-xs transition-all duration-200 ${
          isLight ? 'brightness-110 contrast-110' : ''
        }`}
        loading="eager"
        onError={(e) => {
          const target = e.currentTarget;
          if (isLight) {
            target.src = logoHorizontalDarkTransparent;
          } else {
            target.src = logoHorizontalLightTransparent;
          }
        }}
      />
    </Link>
  );
};
