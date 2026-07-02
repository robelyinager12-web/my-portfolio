'use client';

import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleGradient?: boolean;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleGradient = true,
  description,
  align = 'left',
  className
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <Reveal direction="up" className={cn('mb-16', className)}>
      <div className={cn('flex flex-col gap-4', alignStyles[align])}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-neon-cyan tracking-widest uppercase">
            {eyebrow}
          </span>
          <div className="h-px w-12 bg-gradient-to-r from-neon-cyan to-transparent" />
        </div>

        <h2
          className={cn(
            'font-display font-bold leading-tight tracking-tight',
            'text-[clamp(2rem,4vw,3rem)]',
            titleGradient
              ? [
                  'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink',
                  'bg-[length:300%_auto]',
                  'bg-clip-text text-transparent',
                  'animate-gradflow'
                ].join(' ')
              : 'text-text-primary'
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              'text-text-secondary text-lg leading-relaxed',
              align === 'center' ? 'max-w-2xl' : 'max-w-xl'
            )}
          >
            {description}
          </p>
        )}

        <div
          className={cn(
            'h-px w-24 mt-2',
            'bg-gradient-to-r from-neon-violet via-neon-pink to-transparent',
            align === 'center' && 'mx-auto',
            align === 'right' && 'ml-auto'
          )}
        />
      </div>
    </Reveal>
  );
}