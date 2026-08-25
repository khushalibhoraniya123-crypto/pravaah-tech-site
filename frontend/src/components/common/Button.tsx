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
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 rounded-2xl shadow-soft font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#1769E0] to-[#6C3FE8] text-white hover:shadow-glow-blue hover:brightness-105 focus:ring-[#1769E0]',
    secondary:
      'bg-[#0B1B3A] text-white hover:bg-[#07152F] hover:shadow-medium focus:ring-[#0B1B3A]',
    outline:
      'border border-[#E4E7EC] bg-white text-[#0B1B3A] hover:bg-[#F7F9FC] hover:border-[#CBD5E1] focus:ring-[#1769E0]',
    glass:
      'bg-white/80 backdrop-blur-md border border-[#E4E7EC] text-[#0B1B3A] hover:bg-white hover:shadow-soft focus:ring-[#1769E0]',
    white:
      'bg-white text-[#0B1B3A] hover:bg-[#F7F9FC] hover:shadow-medium focus:ring-white',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Processing...
        </span>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
          {withArrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
        </>
      )}
    </button>
  );
};
