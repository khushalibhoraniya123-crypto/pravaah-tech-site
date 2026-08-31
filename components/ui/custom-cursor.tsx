"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -100, y: -100 });
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

      // Direct instant crisp positioning for the Pravaah logo
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check if hovering over interactive element
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

    // Smooth physics lerp loop for the ambient aura
    const render = () => {
      const ease = 0.22;
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * ease;
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * ease;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraPos.current.x}px, ${auraPos.current.y}px, 0) translate(-50%, -50%)`;
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
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Subtle Dynamic Ambient Aura */}
      <div
        ref={auraRef}
        className={`fixed top-0 left-0 rounded-full transition-all duration-300 ease-out will-change-transform ${
          isHovered
            ? 'w-14 h-14 bg-gradient-to-tr from-[#1769E0]/25 via-[#6638E8]/20 to-[#00D2FF]/25 blur-md scale-110'
            : isClicked
            ? 'w-10 h-10 bg-[#6638E8]/30 blur-sm scale-95'
            : 'w-12 h-12 bg-gradient-to-tr from-[#1769E0]/15 to-[#6638E8]/15 blur-sm scale-100 opacity-75'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />

      {/* Original Pravaah Logo as Custom Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center ${
          isHovered
            ? 'scale-120 drop-shadow-[0_4px_12px_rgba(23,105,224,0.45)]'
            : isClicked
            ? 'scale-90 opacity-90'
            : 'scale-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      >
        {/* Medium-sized, clean, perfectly centered Pravaah Logo */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center pointer-events-none">
          <img
            src="/logo/Logo Horizontal Dark Transparent.png"
            alt="Pravaah Cursor"
            className="w-full h-full object-contain filter drop-shadow-sm select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
