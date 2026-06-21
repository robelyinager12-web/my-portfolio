'use client';

import { Button } from '@/components/ui/Button';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Reveal } from '@/components/ui/Reveal';
import { TerminalCard } from '@/components/ui/TerminalCard';
import { useTypewriter } from '@/hooks/useTypewriter';
import { site } from '@/data/site';

export function Hero() {
  const role = useTypewriter(site.roles, { typingSpeed: 55, deletingSpeed: 30, pauseDuration: 1600 });

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-[60px] pt-[90px]">
      <div
        className="pointer-events-none absolute -right-[10%] top-[10%] -z-10 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--color-indigo) / 0.10), rgb(var(--color-cyan) / 0.06) 55%, transparent 75%)'
        }}
      />
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-[14px] flex items-center gap-2.5 font-mono text-sm text-cyan-deep">
            $ whoami
            <span className="inline-block h-3.5 w-[7px] animate-blink bg-cyan-deep" />
          </p>

          <h1 className="font-display text-[clamp(2.6rem,5vw,4.2rem)] font-semibold leading-[1.04] tracking-tight text-ink">
            {site.name}
            <span
              className="block animate-gradflow bg-[length:300%_auto] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(100deg, #4339CA, #7C3AED 35%, #0EA5B7 65%, #4339CA)'
              }}
            >
              {site.role}
            </span>
          </h1>

          <p className="mt-3 font-mono text-base text-indigo-deep md:text-lg">
            {role}
            <span className="animate-blink text-cyan-deep">|</span>
          </p>

          <p className="my-[22px] max-w-[520px] text-lg leading-[1.7] text-ink-2">
            I design and ship production-grade web applications — from interactive{' '}
            <code className="rounded bg-indigo/[0.07] px-1.5 py-0.5 font-mono text-[15px] text-indigo-deep">
              three.js
            </code>{' '}
            interfaces to resilient APIs and databases. Currently focused on{' '}
            <code className="rounded bg-indigo/[0.07] px-1.5 py-0.5 font-mono text-[15px] text-indigo-deep">
              React
            </code>
            ,{' '}
            <code className="rounded bg-indigo/[0.07] px-1.5 py-0.5 font-mono text-[15px] text-indigo-deep">
              Next.js
            </code>{' '}
            and{' '}
            <code className="rounded bg-indigo/[0.07] px-1.5 py-0.5 font-mono text-[15px] text-indigo-deep">
              TypeScript
            </code>
            .
          </p>

          <div className="mb-[46px] flex flex-wrap gap-3.5">
            <MagneticButton>
              <Button href="#projects" variant="primary">
                View projects →
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="#contact" variant="ghost">
                Get in touch
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href={site.resumeUrl} variant="ghost">
                ↓ résumé
              </Button>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap gap-7 font-mono text-[12.5px] text-ink-3">
            <span className="flex items-center gap-[7px]">
              <i className="h-[7px] w-[7px] animate-pulse-ring rounded-full bg-[#3FAE63]" />
              available for work
            </span>
            <span>{site.location}</span>
            <span>{site.yearsExperience}</span>
          </div>
        </div>

        <Reveal>
          <TerminalCard />
        </Reveal>
      </div>
    </section>
  );
}