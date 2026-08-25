import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'neutral' | 'gradient';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  dot = true,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-1 text-[11px] font-medium tracking-wide',
    md: 'px-3.5 py-1.5 text-xs font-semibold tracking-wider',
  };

  const variantStyles = {
    blue: 'bg-blue-50/80 text-[#1769E0] border border-blue-200/60',
    purple: 'bg-purple-50/80 text-[#6C3FE8] border border-purple-200/60',
    neutral: 'bg-slate-100/90 text-[#334155] border border-slate-200/60',
    gradient: 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-[#0B1B3A] border border-purple-200/50',
  };

  const dotColors = {
    blue: 'bg-[#1769E0]',
    purple: 'bg-[#6C3FE8]',
    neutral: 'bg-slate-500',
    gradient: 'bg-gradient-to-r from-[#1769E0] to-[#6C3FE8]',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full uppercase ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`} />
      )}
      <span>{children}</span>
    </span>
  );
};
