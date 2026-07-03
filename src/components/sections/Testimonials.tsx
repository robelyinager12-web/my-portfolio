'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { testimonials } from '@/data/testimonials';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const cardAccents = [
  { border: 'hover:border-neon-cyan/40', shadow: 'hover:shadow-neon-cyan', quote: 'text-neon-cyan', glow: 'from-neon-cyan/5' },
  { border: 'hover:border-neon-violet/40', shadow: 'hover:shadow-neon-violet', quote: 'text-neon-violet', glow: 'from-neon-violet/5' },
  { border: 'hover:border-neon-pink/40', shadow: 'hover:shadow-neon-pink', quote: 'text-neon-pink', glow: 'from-neon-pink/5' }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/testimonials" title="What People Say" description="Feedback from people I have built things with" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <motion.div className={cn('relative flex flex-col h-full p-6 rounded-2xl overflow-hidden', 'bg-glass-bg border border-glass-border backdrop-blur-glass', accent.border, accent.shadow, 'transition-all duration-300 group')} whileHover={{ y: -8, scale: 1.02 }}>
                  <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl', 'bg-gradient-to-br to-transparent', accent.glow)} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4">
                      <Quote size={32} className={cn('opacity-60', accent.quote)} />
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                      {t.quote}
                    </p>
                    <div className="pt-4 border-t border-glass-border">
                      <div className="flex items-center gap-3">
                        <div className={cn('w-10 h-10 rounded-full flex items-center justify-center', 'bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-pink', 'font-display font-bold text-sm text-bg-primary')}>
                          {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-display font-bold text-sm text-text-primary">{t.name}</p>
                          <p className={cn('font-mono text-xs', accent.quote)}>{t.role}</p>
                          <p className="font-mono text-xs text-text-muted">{t.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
