import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number; // Optional override, otherwise computed from screen & container size
  maxRadius?: number;
  minRadius?: number;
  speedFactor?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

/**
 * Lightweight, high-performance Canvas particle background.
 * - Soft white particles with subtle floating motion and layered depth.
 * - Automatically throttles and pauses via IntersectionObserver when offscreen.
 * - Responsive particle density (lower count on mobile).
 * - Zero interaction interference (pointer-events: none).
 */
export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = '',
  particleCount,
  maxRadius = 2.2,
  minRadius = 0.75,
  speedFactor = 0.25,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    // Determine particle count based on screen width and container area
    const getTargetCount = (w: number, h: number) => {
      if (particleCount !== undefined) return particleCount;
      const isMobile = window.innerWidth < 768;
      const area = w * h;
      if (isMobile) {
        return Math.min(28, Math.max(14, Math.floor(area / 18000)));
      }
      return Math.min(65, Math.max(25, Math.floor(area / 14000)));
    };

    const initParticles = () => {
      const count = getTargetCount(width, height);
      particles = [];

      for (let i = 0; i < count; i++) {
        // Layered sizing: smaller particles are more numerous and softer (depth effect)
        const isDistant = Math.random() < 0.6;
        const isMid = !isDistant && Math.random() < 0.7;

        let radius: number;
        let baseAlpha: number;
        let speed: number;

        if (isDistant) {
          radius = minRadius + Math.random() * (minRadius * 0.5);
          baseAlpha = 0.12 + Math.random() * 0.14; // very soft: 0.12 - 0.26
          speed = (0.3 + Math.random() * 0.4) * speedFactor;
        } else if (isMid) {
          radius = minRadius * 1.5 + Math.random() * 0.6;
          baseAlpha = 0.20 + Math.random() * 0.16; // 0.20 - 0.36
          speed = (0.5 + Math.random() * 0.5) * speedFactor;
        } else {
          radius = maxRadius * 0.8 + Math.random() * (maxRadius * 0.2);
          baseAlpha = 0.28 + Math.random() * 0.18; // 0.28 - 0.46
          speed = (0.7 + Math.random() * 0.6) * speedFactor;
        }

        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed * 0.4,
          vy: Math.sin(angle) * speed * 0.4,
          radius,
          baseAlpha,
          twinkleSpeed: 0.008 + Math.random() * 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initParticles();
    };

    resizeCanvas();

    let lastTime = performance.now();

    const render = (now: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((now - lastTime) / 16.666, 2.5); // normalized delta time
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Smooth subtle drift
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Subtle gentle sine wave breathing/twinkle
        p.twinklePhase += p.twinkleSpeed * dt;
        const currentAlpha = p.baseAlpha + Math.sin(p.twinklePhase) * (p.baseAlpha * 0.35);

        // Boundary wrapping
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        // Draw soft white particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.04, Math.min(0.6, currentAlpha))})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Pause when off-screen to save GPU/CPU cycles
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    // Window / visibility change handlers
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [particleCount, maxRadius, minRadius, speedFactor]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
};
