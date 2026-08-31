import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface LogoProps {
  /**
   * 'dark' / 'header' / 'on-light': Dark lettering on transparent background for light backgrounds (Header).
   * 'light' / 'footer' / 'on-dark': Crisp white lettering on transparent background for dark backgrounds (Footer).
   */
  variant?: 'light' | 'dark' | 'header' | 'footer' | 'on-light' | 'on-dark';
  className?: string;
  onClick?: () => void;
  priority?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '',
  onClick,
  priority = true,
}) => {
  // Check if logo is rendered on a dark background (needs white text) or light background (needs dark text)
  const isForDarkBackground = variant === 'light' || variant === 'footer' || variant === 'on-dark';

  // On light navbar (white bg): Logo Horizontal Light Transparent (dark text on transparent background)
  // On dark footer (navy bg): Logo Horizontal Dark Transparent (crisp white text on transparent background)
  const logoSrc = isForDarkBackground
    ? '/logo/Logo Horizontal Dark Transparent.png'
    : '/logo/Logo Horizontal Light Transparent.png';

  return (
    <Link 
      href="/#home" 
      onClick={onClick}
      className={`inline-flex items-center group transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg shrink-0 ${className}`} 
      aria-label="Pravaah Technology Home"
    >
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="Pravaah Technology"
          width={1200}
          height={400}
          priority={priority}
          className="w-[155px] sm:w-[190px] md:w-[220px] lg:w-[245px] h-auto object-contain select-none pointer-events-none drop-shadow-xs"
          sizes="(max-width: 640px) 155px, (max-width: 768px) 190px, (max-width: 1024px) 220px, 245px"
        />
      </div>
    </Link>
  );
};

