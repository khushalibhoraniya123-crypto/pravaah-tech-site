"use client";

import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};
