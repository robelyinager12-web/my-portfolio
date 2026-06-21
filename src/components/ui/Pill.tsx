import { cn } from '@/lib/utils';

const accentStyles = {
  indigo: 'bg-indigo/[0.06] text-indigo-deep border-indigo/[0.12]',
  cyan: 'bg-cyan/[0.07] text-cyan-deep border-cyan/[0.14]',
  violet: 'bg-violet/[0.07] text-violet border-violet/[0.14]',
  ink: 'bg-ink/[0.05] text-ink-2 border-line'
} as const;

interface PillProps {
  children: string;
  accent?: keyof typeof accentStyles;
}

export function Pill({ children, accent = 'indigo' }: PillProps) {
  return (
    <span
      className={cn(
        'rounded-md border px-[11px] py-[6px] font-mono text-xs',
        accentStyles[accent]
      )}
    >
      {children}
    </span>
  );
}