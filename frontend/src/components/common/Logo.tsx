import React from 'react';
import { Link } from 'react-router-dom';
import logoHorizontalDark from '../../assets/logo/Logo Horizontal Dark.png';
import logoHorizontalLight from '../../assets/logo/Logo Horizontal Light.png';
import logoHorizontalLightTransparent from '../../assets/logo/Logo Horizontal Light Transparent.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
  className?: string;
  height?: number;
  width?: number | string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '',
  height,
  width
}) => {
  const isLight = variant === 'light';

  // On light navbar (variant='dark'): Logo Horizontal Light Transparent / Dark
  // On dark footer (variant='light'): Logo Horizontal Light (White text)
  const selectedLogo = isLight 
    ? logoHorizontalLight 
    : (logoHorizontalLightTransparent || logoHorizontalDark);

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.03] ${className}`} 
      aria-label="Pravaah Technology Home"
    >
      <img
        src={selectedLogo}
        alt="Pravaah Technology"
        style={{
          height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
          width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
        }}
        className={`w-[210px] sm:w-[240px] md:w-[270px] h-auto object-contain drop-shadow-xs transition-all duration-200 ${
          isLight ? 'brightness-110 contrast-125' : ''
        }`}
        loading="eager"
        onError={(e) => {
          const target = e.currentTarget;
          if (isLight) {
            target.src = logoHorizontalLightTransparent;
          } else {
            target.src = logoHorizontalDark;
          }
        }}
      />
    </Link>
  );
};
