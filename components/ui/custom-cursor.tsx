"use client";

import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
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

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Direct, ultra-responsive GPU interpolation loop
    const render = () => {
      const ease = 0.4;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
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

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Exact Pravaah Logo Circular Emblem Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 transition-transform duration-150 ease-out will-change-transform flex items-center justify-center pointer-events-none ${
          isHovered
            ? 'scale-125'
            : isClicked
            ? 'scale-90'
            : 'scale-100'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      >
        {/* Soft Glowing Circular Background Disc */}
        <div className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-md border border-cyan-400/40 flex items-center justify-center p-1 shadow-[0_4px_14px_rgba(23,105,224,0.28)] transition-all duration-200 ${
          isHovered ? 'ring-2 ring-cyan-400/60 shadow-[0_6px_20px_rgba(23,105,224,0.45)]' : ''
        }`}>
          {/* Exact Pravaah Flowing Wave Emblem */}
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
