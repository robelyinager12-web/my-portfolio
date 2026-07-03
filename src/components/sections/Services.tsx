'use client';

import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, React.ComponentType<{size?: number; className?: string}>> = {
  fullstack: Code2,
  frontend: Monitor,
  backend: Server,
  database: Database,
  cloud: Cloud
};

const colorMap = {
  cyan: {
    icon: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20',
    border: 'hover:border-neon-cyan/40',
    shadow: 'hover:shadow-neon-cyan',
    glow: 'from-neon-cyan/10',
    number: 'text-neon-cyan/20'
  },
  violet: {
    icon: 'text-neon-violet bg-neon-violet/10 border-neon-violet/20',
    border: 'hover:border-neon-violet/40',
    shadow: 'hover:shadow-neon-violet',
    glow: 'from-neon-violet/10',
    number: 'text-neon-violet/20'
  },
  pink: {
    icon: 'text-neon-pink bg-neon-pink/10 border-neon-pink/20',
    border: 'hover:border-neon-pink/40',
    shadow: 'hover:shadow-neon-pink',
    glow: 'from-neon-pink/10',
    number: 'text-neon-pink/20'
  }
};

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/services" title="What I Can Do" description="End-to-end capability across the full product lifecycle" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const colors = colorMap[service.color];
            return (
              <Reveal key={service.title} direction="up" delay={i * 0.08}>
                <motion.div className={cn('relative h-full p-6 rounded-2xl group overflow-hidden', 'bg-glass-bg border border-glass-border backdrop-blur-glass', colors.border, colors.shadow, 'transition-all duration-300')} whileHover={{ y: -8, scale: 1.02 }}>
                  <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl', 'bg-gradient-to-br to-transparent', colors.glow)} />
                  <span className={cn('absolute top-4 right-4 font-display font-bold text-6xl leading-none select-none', colors.number)}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative z-10 space-y-4">
                    <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center border', colors.icon)}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-neon-violet transition-colors duration-300">{service.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
                    <div className="pt-2">
                      <span className="font-mono text-xs text-neon-violet group-hover:text-neon-cyan transition-colors duration-300">learn more →</span>
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
