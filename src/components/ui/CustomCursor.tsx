'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type CursorState = 'default' | 'hover' | 'click' | 'text';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const reducedMotion = usePrefersReducedMotion();

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const frameId = useRef<number>(0);

  useEffect(() => {
    const hasFinePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;
    setEnabled(hasFinePointer && !reducedMotion);
  }, [reducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    document.body.style.cursor = 'none';

    function onMouseMove(e: MouseEvent) {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    }

    function onMouseDown() {
      setCursorState('click');
    }

    function onMouseUp() {
      setCursorState('default');
    }

    function getInteractiveType(
      target: EventTarget | null
    ): CursorState | null {
      if (!(target instanceof HTMLElement)) return null;
      const el = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );
      if (!el) return null;
      if (
        target.closest('input[type="text"], input[type="email"], textarea')
      ) {
        return 'text';
      }
      return 'hover';
    }

    function onMouseOver(e: MouseEvent) {
      const type = getInteractiveType(e.target);
      if (type) setCursorState(type);
    }

    function onMouseOut(e: MouseEvent) {
      const type = getInteractiveType(e.target);
      if (type) setCursorState('default');
    }

    function animateRing() {
      const ease = 0.12;
      ringX.current += (mouseX.current - ringX.current) * ease;
      ringY.current += (mouseY.current - ringY.current) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX.current}px, ${ringY.current}px) translate(-50%, -50%)`;
      }

      frameId.current = requestAnimationFrame(animateRing);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    frameId.current = requestAnimationFrame(animateRing);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(frameId.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          width: cursorState === 'click' ? '6px' : '8px',
          height: cursorState === 'click' ? '6px' : '8px',
          borderRadius: '50%',
          background:
            cursorState === 'hover' || cursorState === 'text'
              ? '#00FFFF'
              : '#8B5CF6',
          boxShadow:
            cursorState === 'hover'
              ? '0 0 10px rgba(0,255,255,0.8)'
              : '0 0 10px rgba(139,92,246,0.8)',
          transition: 'width 0.15s, height 0.15s, background 0.2s, box-shadow 0.2s'
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{
          width:
            cursorState === 'hover'
              ? '48px'
              : cursorState === 'click'
              ? '28px'
              : '36px',
          height:
            cursorState === 'hover'
              ? '48px'
              : cursorState === 'click'
              ? '28px'
              : '36px',
          borderRadius: '50%',
          border:
            cursorState === 'hover'
              ? '1.5px solid rgba(0,255,255,0.7)'
              : cursorState === 'text'
              ? '1.5px solid rgba(0,255,255,0.5)'
              : '1.5px solid rgba(139,92,246,0.5)',
          background:
            cursorState === 'hover'
              ? 'rgba(0,255,255,0.06)'
              : 'transparent',
          boxShadow:
            cursorState === 'hover'
              ? '0 0 20px rgba(0,255,255,0.2), inset 0 0 10px rgba(0,255,255,0.05)'
              : cursorState === 'click'
              ? '0 0 20px rgba(139,92,246,0.5)'
              : '0 0 12px rgba(139,92,246,0.15)',
          transition:
            'width 0.25s cubic-bezier(0.25,0.46,0.45,0.94), height 0.25s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.2s, background 0.2s, box-shadow 0.2s'
        }}
      />
    </>
  );
}