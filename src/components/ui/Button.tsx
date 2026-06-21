import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost';

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: undefined;
};

type ButtonProps = AnchorButtonProps | NativeButtonProps;

const baseStyles =
  'inline-flex items-center gap-2 rounded-[7px] px-6 py-3 font-mono text-sm transition-all duration-200 cursor-pointer';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-indigo-deep hover:-translate-y-0.5',
  ghost:
    'border border-line-strong text-ink bg-transparent hover:bg-paper-2 hover:-translate-y-0.5'
};

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props as AnchorButtonProps;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as NativeButtonProps)}>
      {children}
    </button>
  );
}