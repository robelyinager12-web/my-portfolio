'use client';

import {
  useRef,
  useState,
  type ReactNode,
  type MouseEvent
} from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
  as?: 'div' | 'span';
}

export function MagneticButton({
  children,
  strength = 0.35,
  radius = 120,
  className,
  as: Tag = 'div'
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.5 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.5 });

  const rotateX = useTransform(y, [-30, 30], [5, -5]);
  const rotateY = useTransform(x, [-30, 30], [-5, 5]);

  const [isActive, setIsActive] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < radius) {
      const factor = 1 - distance / radius;
      x.set(distX * strength * factor);
      y.set(distY * strength * factor);
      setIsActive(true);
    } else {
      x.set(0);
      y.set(0);
      setIsActive(false);
    }
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsActive(false);
  }

  if (reducedMotion) {
    return (
      <Tag className={cn('inline-block', className)}>
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY }}
      className={cn('inline-block', className)}
      animate={{
        scale: isActive ? 1.05 : 1
      }}
      transition={{
        scale: { duration: 0.2, ease: 'easeOut' }
      }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticIcon({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <MagneticButton strength={0.5} radius={80} className={className}>
      {children}
    </MagneticButton>
  );
}