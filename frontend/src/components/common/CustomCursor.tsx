import React, { useEffect, useRef } from 'react';

/**
 * Custom round cursor with smooth physics-based follower animation.
 * Features:
 * - Precision center dot + smooth trailing aura ring.
 * - Interactive hover effects on links, buttons, inputs, and clickable elements.
 * - Click squeeze/compression feedback.
 * - Automatically disabled on touch/mobile devices and devices without a fine pointer.
 * - Zero performance impact: uses requestAnimationFrame with direct transform manipulation (bypassing React re-renders).
 * - Non-blocking: pointer-events: none ensures all clicks, scrolls, and text selections work natively.
 * - High contrast visibility across both light and dark backgrounds.
 */
export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the device has a fine pointer (desktop mouse/trackpad) and supports hover
    const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isPointerFine) {
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Enable custom cursor class on html/body to hide native cursor
    document.documentElement.classList.add('custom-cursor-active');

    // Mouse coordinates (target)
    let mouseX = -100;
    let mouseY = -100;

    // Ring smoothed coordinates (lerp)
    let ringX = -100;
    let ringY = -100;

    // Dot coordinates
    let dotX = -100;
    let dotY = -100;

    let isVisible = false;
    let isHovered = false;
    let isPressed = false;
    let isTextInput = false;
    let isTouchActive = false;
    let animationFrameId: number;

    const interactiveSelector = [
      'a',
      'button',
      'input',
      'textarea',
      'select',
      'label',
      '[role="button"]',
      '[data-cursor-hover]',
      '.cursor-pointer',
      'summary',
      '[tabindex="0"]',
      '.glass-card',
      '.glass-card-dark',
    ].join(', ');

    // Linear interpolation for smooth trailing
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateCursorClasses = () => {
      if (!isVisible || isTouchActive) {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
      } else {
        dot.style.opacity = isTextInput ? '0.2' : '1';
        ring.style.opacity = '1';
      }

      if (isPressed) {
        ring.classList.add('cursor-ring--pressed');
        dot.classList.add('cursor-dot--pressed');
      } else {
        ring.classList.remove('cursor-ring--pressed');
        dot.classList.remove('cursor-dot--pressed');
      }

      if (isHovered) {
        ring.classList.add('cursor-ring--hover');
        dot.classList.add('cursor-dot--hover');
      } else {
        ring.classList.remove('cursor-ring--hover');
        dot.classList.remove('cursor-dot--hover');
      }

      if (isTextInput) {
        ring.classList.add('cursor-ring--text');
      } else {
        ring.classList.remove('cursor-ring--text');
      }
    };

    const render = () => {
      if (!isTouchActive) {
        // Dot follows with high responsiveness
        dotX = lerp(dotX, mouseX, 0.65);
        dotY = lerp(dotY, mouseY, 0.65);

        // Ring follows with smooth damped fluid physics
        ringX = lerp(ringX, mouseX, 0.18);
        ringY = lerp(ringY, mouseY, 0.18);

        dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const onMouseMove = (e: MouseEvent) => {
      if (isTouchActive) return;

      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        // Snap directly to position on first entry
        dotX = mouseX;
        dotY = mouseY;
        ringX = mouseX;
        ringY = mouseY;
        updateCursorClasses();
      }
    };

    const onMouseDown = () => {
      if (isTouchActive) return;
      isPressed = true;
      updateCursorClasses();
    };

    const onMouseUp = () => {
      if (isTouchActive) return;
      isPressed = false;
      updateCursorClasses();
    };

    const onMouseOver = (e: MouseEvent) => {
      if (isTouchActive) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(interactiveSelector);
      const isInput = target.closest('input, textarea, [contenteditable="true"]');

      isHovered = !!interactiveEl;
      isTextInput = !!isInput;
      updateCursorClasses();
    };

    const onMouseOut = (e: MouseEvent) => {
      if (isTouchActive) return;
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !related.closest(interactiveSelector)) {
        isHovered = false;
        isTextInput = false;
        updateCursorClasses();
      }
    };

    const onMouseLeaveDoc = () => {
      isVisible = false;
      updateCursorClasses();
    };

    const onMouseEnterDoc = () => {
      isVisible = true;
      updateCursorClasses();
    };

    // Touch device fallback detection
    const onTouchStart = () => {
      isTouchActive = true;
      document.documentElement.classList.remove('custom-cursor-active');
      if (dot && ring) {
        dot.style.display = 'none';
        ring.style.display = 'none';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeaveDoc, { passive: true });
    document.documentElement.addEventListener('mouseenter', onMouseEnterDoc, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.documentElement.removeEventListener('mouseleave', onMouseLeaveDoc);
      document.documentElement.removeEventListener('mouseenter', onMouseEnterDoc);
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      <div ref={cursorRingRef} className="custom-cursor-ring" />
    </div>
  );
};
