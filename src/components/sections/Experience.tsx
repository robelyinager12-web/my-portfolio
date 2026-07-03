'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { experience } from '@/data/experience';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Pill } from '@/components/ui/Pill';

const typeColors = {
  'full-time': 'cyan' as const,
  'freelance': 'pink' as const,
  'part-time': 'violet' as const
};

const dotColors = {
  'full-time': 'bg-neon-cyan shadow-neon-cyan',
  'freelance': 'bg-neon-pink shadow-neon-pink',
  'part-time': 'bg-neon-violet shadow-neon-violet'
};

const lineColors = {
  'full-time': 'from-neon-cyan',
  'freelance': 'from-neon-pink',
  'part-time': 'from-neon-violet'
};

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/experience" title="Where I Have Worked" description="My professional journey building production software" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-pink opacity-30" />
          <div className="space-y-12">
            {experience.map((item, i) => (
              <Reveal key={item.role + item.period} direction="left" delay={i * 0.1}>
                <div className="relative pl-16">
                  <div className="absolute left-0 top-1 flex flex-col items-center">
                    <motion.div className={cn('w-12 h-12 rounded-full flex items-center justify-center', 'bg-bg-secondary border-2', item.type === 'full-time' ? 'border-neon-cyan' : item.type === 'freelance' ? 'border-neon-pink' : 'border-neon-violet')} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}>
                      <Briefcase size={18} className={item.type === 'full-time' ? 'text-neon-cyan' : item.type === 'freelance' ? 'text-neon-pink' : 'text-neon-violet'} />
                    </motion.div>
                  </div>

                  <motion.div className={cn('p-6 rounded-2xl', 'bg-glass-bg border border-glass-border backdrop-blur-glass', item.type === 'full-time' ? 'hover:border-neon-cyan/40 hover:shadow-neon-cyan' : item.type === 'freelance' ? 'hover:border-neon-pink/40 hover:shadow-neon-pink' : 'hover:border-neon-violet/40 hover:shadow-neon-violet', 'transition-all duration-300 group')} whileHover={{ x: 8 }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-neon-violet transition-colors duration-300">{item.role}</h3>
                        <p className={cn('font-mono text-sm mt-1', item.type === 'full-time' ? 'text-neon-cyan' : item.type === 'freelance' ? 'text-neon-pink' : 'text-neon-violet')}>{item.company}</p>
                      </div>
                      <Pill color={typeColors[item.type]} size="sm" glow>{item.type}</Pill>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                        <Calendar size={12} className="text-neon-violet" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                        <MapPin size={12} className="text-neon-cyan" />
                        {item.location}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {item.highlights.map((highlight, j) => (
                        <motion.li key={j} className="flex items-start gap-3" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + j * 0.05 }}>
                          <ArrowRight size={14} className={cn('mt-0.5 flex-shrink-0', item.type === 'full-time' ? 'text-neon-cyan' : item.type === 'freelance' ? 'text-neon-pink' : 'text-neon-violet')} />
                          <span className="text-text-secondary text-sm leading-relaxed">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
