'use client';

import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  href: string;
  loading?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: undefined;
  loading?: boolean;
};

type Props = AnchorProps | ButtonProps;

const variantStyles: Record<Variant, string> = {
  primary: [
    'relative overflow-hidden',
    'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink',
    'text-bg-primary font-semibold',
    'before:absolute before:inset-0',
    'before:bg-gradient-to-r before:from-neon-cyan before:via-neon-violet before:to-neon-pink',
    'before:opacity-0 before:transition-opacity before:duration-300',
    'hover:before:opacity-100',
    'hover:shadow-neon-violet',
    'transition-all duration-300'
  ].join(' '),
  ghost: [
    'relative overflow-hidden',
    'bg-transparent',
    'border border-neon-violet/40',
    'text-text-primary',
    'hover:border-neon-violet',
    'hover:bg-neon-violet/10',
    'hover:shadow-neon-violet',
    'hover:text-neon-violet',
    'transition-all duration-300'
  ].join(' '),
  outline: [
    'relative overflow-hidden',
    'bg-transparent',
    'border border-glass-border',
    'text-text-secondary',
    'hover:border-neon-cyan/50',
    'hover:bg-neon-cyan/5',
    'hover:text-neon-cyan',
    'transition-all duration-300'
  ].join(' ')
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs rounded-md gap-1.5',
  md: 'px-6 py-3 text-sm rounded-lg gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2.5'
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    'inline-flex items-center justify-center font-mono font-medium',
    'cursor-pointer select-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-[0.97] transition-transform',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {loading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      <span className="relative z-10 flex items-center gap-inherit">
        {children}
      </span>
    </>
  );

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={loading}
      {...(props as ButtonProps)}
    >
      {content}
    </button>
  );
}