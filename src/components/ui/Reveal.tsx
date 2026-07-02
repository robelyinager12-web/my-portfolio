'use client';

import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

function getVariants(
  direction: Direction,
  distance: number,
  reducedMotion: boolean
): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
  }

  const directionMap: Record<Direction, Variants> = {
    up: {
      hidden: { opacity: 0, y: distance },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -distance },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -distance },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: distance },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };

  return directionMap[direction];
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  className,
  once = true,
  amount = 0.15
}: RevealProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const variants = getVariants(direction, distance, reducedMotion);

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration: reducedMotion ? 0.001 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  staggerDelay = 0.1,
  direction = 'up'
}: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: Direction;
}) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: reducedMotion ? 0 : staggerDelay
          }
        }
      }}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          variants={
            reducedMotion
              ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
              : direction === 'up'
              ? { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
              : direction === 'left'
              ? { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }
              : direction === 'scale'
              ? { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } }
              : { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }
          }
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}