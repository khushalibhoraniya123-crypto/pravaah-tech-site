import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'white';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none select-none';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 rounded-lg font-medium',
    md: 'px-4.5 py-2 text-xs sm:text-[13.5px] gap-2 rounded-xl font-semibold',
    lg: 'px-6 py-2.5 sm:py-3 text-sm sm:text-base gap-2.5 rounded-xl shadow-soft font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#1769E0] via-[#4D55E8] to-[#6C3FE8] text-white hover:shadow-glow-blue hover:brightness-105 focus:ring-[#1769E0]',
    secondary:
      'bg-[#0B1B3A] text-white hover:bg-[#1769E0] hover:shadow-medium focus:ring-[#0B1B3A]',
    outline:
      'border-2 border-[#1769E0]/35 bg-white text-[#1769E0] hover:bg-[#1769E0] hover:text-white hover:border-[#1769E0] hover:shadow-glow-blue shadow-xs focus:ring-[#1769E0]',
    glass:
      'bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25 hover:border-[#00D2FF]/70 hover:shadow-glow-blue focus:ring-[#1769E0]',
    white:
      'bg-white text-[#1769E0] hover:bg-gradient-to-r hover:from-white hover:to-[#EBF2FA] hover:shadow-medium focus:ring-white border border-[#D2DEEE]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-3.5 w-3.5 text-current" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Processing...
        </span>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-3.5 h-3.5 shrink-0" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-3.5 h-3.5 shrink-0" />}
          {withArrow && <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />}
        </>
      )}
    </button>
  );
};
