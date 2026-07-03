'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { skillCategories } from '@/data/skills';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const colorMap = {
  cyan: {
    border: 'hover:border-neon-cyan/40',
    shadow: 'hover:shadow-neon-cyan',
    title: 'text-neon-cyan',
    pill: 'bg-neon-cyan/[0.08] border-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/20 hover:border-neon-cyan/50',
    glow: 'bg-neon-cyan/5',
    dot: 'bg-neon-cyan'
  },
  violet: {
    border: 'hover:border-neon-violet/40',
    shadow: 'hover:shadow-neon-violet',
    title: 'text-neon-violet',
    pill: 'bg-neon-violet/[0.08] border-neon-violet/20 text-neon-violet hover:bg-neon-violet/20 hover:border-neon-violet/50',
    glow: 'bg-neon-violet/5',
    dot: 'bg-neon-violet'
  },
  pink: {
    border: 'hover:border-neon-pink/40',
    shadow: 'hover:shadow-neon-pink',
    title: 'text-neon-pink',
    pill: 'bg-neon-pink/[0.08] border-neon-pink/20 text-neon-pink hover:bg-neon-pink/20 hover:border-neon-pink/50',
    glow: 'bg-neon-pink/5',
    dot: 'bg-neon-pink'
  }
};

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-violet/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/skills" title="Tools of the Trade" description="Technologies I use to build scalable and performant applications" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const colors = colorMap[category.color];
            return (
              <Reveal key={category.title} direction="up" delay={i * 0.08}>
                <motion.div className={cn('relative h-full p-6 rounded-2xl', 'bg-glass-bg border border-glass-border', 'backdrop-blur-glass', colors.border, colors.shadow, 'transition-all duration-300 group overflow-hidden')} whileHover={{ y: -6, scale: 1.01 }}>
                  <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500', colors.glow, 'rounded-2xl')} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={cn('w-2 h-2 rounded-full', colors.dot, 'shadow-[0_0_8px_currentColor]')} />
                      <h3 className={cn('font-display font-bold text-lg', colors.title)}>{category.title}</h3>
                      <span className="ml-auto font-mono text-xs text-text-muted">{category.items.length} skills</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, j) => (
                        <motion.span key={item} className={cn('px-3 py-1.5 rounded-lg text-xs font-mono font-medium border', 'transition-all duration-200 cursor-default', colors.pill)} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 + j * 0.03 }} whileHover={{ scale: 1.08, y: -2 }}>
                          {item}
                        </motion.span>
                      ))}
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
