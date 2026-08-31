"use client";

import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
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

    // Smooth lerp loop for the follower ring
    const render = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
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

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Follower Ring - Clean Medium Balanced Circle */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full transition-[width,height,background-color,border-color,opacity] duration-200 ease-out will-change-transform ${
          isHovered
            ? 'w-11 h-11 border-2 border-[#1769E0] bg-[#1769E0]/15 backdrop-blur-[1px]'
            : isClicked
            ? 'w-7 h-7 border-2 border-[#6638E8] bg-[#6638E8]/20'
            : 'w-8 h-8 border-[1.5px] border-[#1769E0]/70 bg-[#1769E0]/5 shadow-xs'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />

      {/* Inner Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-transform duration-100 ease-out will-change-transform ${
          isHovered
            ? 'w-1.5 h-1.5 bg-[#1769E0] scale-125'
            : isClicked
            ? 'w-2 h-2 bg-[#6638E8] scale-90'
            : 'w-2 h-2 bg-gradient-to-tr from-[#1769E0] to-[#6638E8]'
        }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
