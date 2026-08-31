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

    // Ultra-smooth physics interpolation loop
    const render = () => {
      const ease = 0.35;
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
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Pravaah Logo Icon Custom Cursor (No text, only icon mark) */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 transition-transform duration-150 ease-out will-change-transform flex items-center justify-center ${
          isHovered
            ? 'scale-125'
            : isClicked
            ? 'scale-90 opacity-90'
            : 'scale-100'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      >
        {/* Crisp cropped container displaying strictly the Pravaah wave emblem icon */}
        <div 
          className="relative w-7 h-7 sm:w-8 sm:h-8 overflow-hidden flex items-center justify-start pointer-events-none select-none filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)]"
        >
          <img
            src="/logo/Logo Horizontal Dark Transparent.png"
            alt="Pravaah Logo Icon"
            className="h-full w-auto max-w-none object-contain object-left pointer-events-none select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
