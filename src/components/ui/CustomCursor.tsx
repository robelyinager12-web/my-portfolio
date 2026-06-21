'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  // Only enable on devices with a real, precise pointer (desktop mice),
  // and never if the visitor has reduced motion turned on.
  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(supportsFinePointer && !reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add('has-custom-cursor');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frameId: number;

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    }

    function isInteractive(target: EventTarget | null) {
      return target instanceof HTMLElement && target.closest('a, button, input, textarea, [role="button"]');
    }

    function handleOver(e: MouseEvent) {
      if (isInteractive(e.target)) setHovering(true);
    }

    function handleOut(e: MouseEvent) {
      if (isInteractive(e.target)) setHovering(false);
    }

    // The ring eases toward the dot's position each frame rather than
    // snapping instantly, which is what creates the "trailing" feel.
    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(animateRing);
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    frameId = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(frameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 rounded-full bg-indigo"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[200] rounded-full border transition-[width,height,opacity] duration-200 ease-out ${
          hovering ? 'h-12 w-12 border-indigo bg-indigo/10' : 'h-8 w-8 border-indigo/50'
        }`}
        style={{ boxShadow: '0 0 20px rgb(var(--color-indigo) / 0.25)' }}
      />
    </>
  );
}