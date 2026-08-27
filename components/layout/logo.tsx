import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '',
  onClick
}) => {
  const isLight = variant === 'light';

  // On light navbar: Logo Horizontal Dark Transparent (dark letters on clean background)
  // On dark footer: Logo Horizontal Light (bright white text for deep navy background)
  const logoSrc = isLight 
    ? '/logo/Logo Horizontal Light.png' 
    : '/logo/Logo Horizontal Dark Transparent.png';

  return (
    <Link 
      href="/#home" 
      onClick={onClick}
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.02] ${className}`} 
      aria-label="Pravaah Technology Home"
    >
      <img
        src={logoSrc}
        alt="Pravaah Technology"
        className={`w-[180px] xs:w-[200px] sm:w-[230px] md:w-[260px] h-auto max-h-[52px] object-contain drop-shadow-xs ${
          isLight ? 'brightness-110 contrast-125' : ''
        }`}
        loading="eager"
      />
    </Link>
  );
};
