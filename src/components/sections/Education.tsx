'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { education } from '@/data/education';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Pill } from '@/components/ui/Pill';

const degreeColors = {
  degree: {
    border: 'hover:border-neon-cyan/40',
    shadow: 'hover:shadow-neon-cyan',
    icon: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20',
    period: 'text-neon-cyan',
    badge: 'cyan' as const
  },
  certification: {
    border: 'hover:border-neon-violet/40',
    shadow: 'hover:shadow-neon-violet',
    icon: 'text-neon-violet bg-neon-violet/10 border-neon-violet/20',
    period: 'text-neon-violet',
    badge: 'violet' as const
  }
};

export function Education() {
  const degrees = education.filter(e => e.type === 'degree');
  const certifications = education.filter(e => e.type === 'certification');

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/education" title="Education and Certifications" description="Formal study and industry credentials that underpin the engineering practice" />

        <div className="space-y-12">
          <div>
            <Reveal direction="up" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={20} className="text-neon-cyan" />
                <h3 className="font-display font-bold text-xl text-neon-cyan">Formal Education</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/30 to-transparent" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-4">
              {degrees.map((item, i) => {
                const colors = degreeColors[item.type];
                return (
                  <Reveal key={item.title} direction="left" delay={i * 0.1}>
                    <motion.div className={cn('p-6 rounded-2xl', 'bg-glass-bg border border-glass-border backdrop-blur-glass', colors.border, colors.shadow, 'transition-all duration-300 group')} whileHover={{ x: 6 }}>
                      <div className="flex items-start gap-4">
                        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0', colors.icon)}>
                          <GraduationCap size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <h4 className="font-display font-bold text-lg text-text-primary group-hover:text-neon-cyan transition-colors duration-300">{item.title}</h4>
                            <Pill color={colors.badge} size="sm">{item.type}</Pill>
                          </div>
                          <p className="font-mono text-sm text-neon-cyan mb-1">{item.institution}</p>
                          <div className="flex items-center gap-1.5 mb-3">
                            <Calendar size={12} className={colors.period} />
                            <span className={cn('font-mono text-xs', colors.period)}>{item.period}</span>
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">{item.note}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div>
            <Reveal direction="up" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <Award size={20} className="text-neon-violet" />
                <h3 className="font-display font-bold text-xl text-neon-violet">Certifications</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-neon-violet/30 to-transparent" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((item, i) => {
                const colors = degreeColors[item.type];
                return (
                  <Reveal key={item.title} direction="up" delay={i * 0.08}>
                    <motion.div className={cn('p-5 rounded-2xl h-full', 'bg-glass-bg border border-glass-border backdrop-blur-glass', colors.border, colors.shadow, 'transition-all duration-300 group')} whileHover={{ y: -6, scale: 1.01 }}>
                      <div className="flex items-start gap-3">
                        <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0', colors.icon)}>
                          <Award size={18} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display font-bold text-base text-text-primary group-hover:text-neon-violet transition-colors duration-300 mb-1">{item.title}</h4>
                          <p className="font-mono text-xs text-neon-violet mb-1">{item.institution}</p>
                          <div className="flex items-center gap-1.5 mb-2">
                            <Calendar size={11} className="text-neon-violet" />
                            <span className="font-mono text-xs text-neon-violet">{item.period}</span>
                          </div>
                          <p className="text-text-secondary text-xs leading-relaxed">{item.note}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
