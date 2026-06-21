import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-16 max-w-xl">
      <p className="flex items-center gap-2.5 font-mono text-sm text-cyan-deep">
        {eyebrow}
      </p>
      <h2 className="mt-3.5 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && <p className="mt-4 text-[16.5px] text-ink-2">{description}</p>}
    </Reveal>
  );
}