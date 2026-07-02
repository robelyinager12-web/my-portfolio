'use client';

import { cn } from '@/lib/utils';

type PillColor = 'cyan' | 'violet' | 'pink' | 'gray';
type PillSize = 'sm' | 'md' | 'lg';

interface PillProps {
  children: string;
  color?: PillColor;
  size?: PillSize;
  dot?: boolean;
  glow?: boolean;
  className?: string;
  onClick?: () => void;
}

const colorStyles: Record<PillColor, string> = {
  cyan: [
    'bg-neon-cyan/[0.08]',
    'border-neon-cyan/20',
    'text-neon-cyan',
    'hover:border-neon-cyan/50',
    'hover:bg-neon-cyan/15',
    'hover:shadow-[0_0_12px_rgba(0,255,255,0.25)]'
  ].join(' '),
  violet: [
    'bg-neon-violet/[0.08]',
    'border-neon-violet/20',
    'text-neon-violet',
    'hover:border-neon-violet/50',
    'hover:bg-neon-violet/15',
    'hover:shadow-[0_0_12px_rgba(139,92,246,0.25)]'
  ].join(' '),
  pink: [
    'bg-neon-pink/[0.08]',
    'border-neon-pink/20',
    'text-neon-pink',
    'hover:border-neon-pink/50',
    'hover:bg-neon-pink/15',
    'hover:shadow-[0_0_12px_rgba(236,72,153,0.25)]'
  ].join(' '),
  gray: [
    'bg-white/[0.04]',
    'border-white/10',
    'text-text-secondary',
    'hover:border-white/25',
    'hover:bg-white/[0.08]'
  ].join(' ')
};

const sizeStyles: Record<PillSize, string> = {
  sm: 'px-2 py-0.5 text-[10px] rounded-md gap-1',
  md: 'px-3 py-1 text-xs rounded-lg gap-1.5',
  lg: 'px-4 py-1.5 text-sm rounded-xl gap-2'
};

const dotColorStyles: Record<PillColor, string> = {
  cyan: 'bg-neon-cyan shadow-[0_0_6px_rgba(0,255,255,0.8)]',
  violet: 'bg-neon-violet shadow-[0_0_6px_rgba(139,92,246,0.8)]',
  pink: 'bg-neon-pink shadow-[0_0_6px_rgba(236,72,153,0.8)]',
  gray: 'bg-text-secondary'
};

export function Pill({
  children,
  color = 'violet',
  size = 'md',
  dot = false,
  glow = false,
  className,
  onClick
}: PillProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center border font-mono font-medium',
        'transition-all duration-200',
        onClick && 'cursor-pointer',
        colorStyles[color],
        sizeStyles[size],
        glow && color === 'cyan' && 'shadow-[0_0_12px_rgba(0,255,255,0.2)]',
        glow && color === 'violet' && 'shadow-[0_0_12px_rgba(139,92,246,0.2)]',
        glow && color === 'pink' && 'shadow-[0_0_12px_rgba(236,72,153,0.2)]',
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'inline-block w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0',
            dotColorStyles[color]
          )}
        />
      )}
      {children}
    </span>
  );
}

export function PillGroup({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {children}
    </div>
  );
}