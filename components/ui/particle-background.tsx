"use client";

import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 28,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize subtle floating micro particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.8, // Small, sharp, delicate dots
      speedX: (Math.random() - 0.5) * 0.25, // Gentle slow horizontal float
      speedY: (Math.random() - 0.5) * 0.25 - 0.1, // Slight upward drift
      alpha: Math.random() * 0.35 + 0.12, // Low opacity (subtle, non-distracting)
      pulseSpeed: Math.random() * 0.015 + 0.005,
      pulseFactor: Math.random() * Math.PI,
      isCyan: Math.random() > 0.7, // 30% soft cyan glow, 70% soft white
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle gently
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries seamlessly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle breathing glow opacity
        p.pulseFactor += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseFactor) * 0.1;

        // Slight parallax displacement toward mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let offsetX = 0;
        let offsetY = 0;
        if (dist < 220) {
          const force = (220 - dist) / 220;
          offsetX = (dx / dist) * force * -6;
          offsetY = (dy / dist) * force * -6;
        }

        // Draw soft glowing micro particle
        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isCyan
          ? `rgba(56, 189, 248, ${Math.max(0.08, currentAlpha)})`
          : `rgba(255, 255, 255, ${Math.max(0.08, currentAlpha)})`;
        ctx.shadowColor = p.isCyan ? 'rgba(56, 189, 248, 0.6)' : 'rgba(255, 255, 255, 0.4)';
        ctx.shadowBlur = p.radius * 3;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
};
