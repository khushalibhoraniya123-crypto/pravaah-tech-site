"use client";

import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    // Disable on touch / coarse pointer devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.closest('label') ||
          target.closest('.cursor-pointer')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      // Spawn subtle expanding ripple on click
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Dual physics loop: Fast responsive cursor + Smooth soft trailing glow aura
    const render = () => {
      // Direct fast cursor response
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.45;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.45;

      // Soft trailing glow with gentle inertia
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.16;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.16;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible]);

  // Clean up finished ripples after animation
  useEffect(() => {
    if (ripples.length === 0) return;
    const timer = setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timer);
  }, [ripples]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      
      {/* 1. Minimal Elegant Soft Glow Trail Following Cursor */}
      <div
        ref={trailRef}
        className={`fixed top-0 left-0 rounded-full transition-opacity duration-300 pointer-events-none will-change-transform ${
          isHovered
            ? 'w-12 h-12 bg-gradient-to-tr from-[#1769E0]/20 via-[#6638E8]/18 to-[#00D2FF]/20 blur-md opacity-90'
            : 'w-10 h-10 bg-gradient-to-tr from-[#1769E0]/14 via-[#6638E8]/12 to-[#00D2FF]/14 blur-sm opacity-70'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />

      {/* 2. Soft Expanding Click Ripple Effect */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 bg-cyan-400/10 pointer-events-none animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
            animationDuration: '550ms',
          }}
        />
      ))}

      {/* 3. Main Pravaah Emblem Cursor with Dynamic Scale & Punch Feedback */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 transition-transform duration-150 ease-out will-change-transform flex items-center justify-center pointer-events-none ${
          isClicked
            ? 'scale-120 drop-shadow-[0_6px_18px_rgba(23,105,224,0.5)]'
            : isHovered
            ? 'scale-115 drop-shadow-[0_4px_14px_rgba(23,105,224,0.38)]'
            : 'scale-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)]'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      >
        {/* Soft Glass Disc Framing the Wave Emblem */}
        <div className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/92 backdrop-blur-md border border-cyan-400/40 flex items-center justify-center p-1 shadow-[0_3px_12px_rgba(23,105,224,0.25)] transition-all duration-200 ${
          isHovered ? 'ring-2 ring-cyan-400/60 shadow-[0_4px_16px_rgba(23,105,224,0.4)]' : ''
        }`}>
          {/* Crisp Pure Pravaah Wave Emblem Icon */}
          <div className="relative w-5 h-5 overflow-hidden flex items-center justify-start pointer-events-none select-none">
            <img
              src="/logo/Logo Horizontal Dark Transparent.png"
              alt="Pravaah Logo Cursor"
              className="h-full w-auto max-w-none object-contain object-left pointer-events-none select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>

    </div>
  );
};
