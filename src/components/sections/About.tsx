'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site, stats } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const highlights = [
  { icon: Code2, label: 'Full Stack Dev', color: 'text-neon-cyan' },
  { icon: Database, label: 'Database Expert', color: 'text-neon-violet' },
  { icon: Cloud, label: 'Cloud Deploy', color: 'text-neon-pink' },
  { icon: Cpu, label: 'System Design', color: 'text-neon-cyan' },
  { icon: Award, label: 'Certified Dev', color: 'text-neon-violet' }
];

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/about" title="About Me" description="Passionate engineer building scalable software from East Africa" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left" delay={0.1}>
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-pink blur-2xl opacity-20 scale-105" />
                <div className={cn('relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden', 'border border-neon-violet/30', 'shadow-neon-violet')}>
                  <Image src={site.avatarUrl} alt={site.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
                </div>
                <div className={cn('absolute -bottom-6 -right-6 p-4 rounded-xl', 'bg-bg-secondary/90 backdrop-blur-glass', 'border border-neon-cyan/30', 'shadow-neon-cyan')}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-xs text-green-400">available for work</span>
                  </div>
                  <p className="font-mono text-xs text-text-muted mt-1">{site.location} {site.locationFlag}</p>
                </div>
                <div className={cn('absolute -top-6 -left-6 p-4 rounded-xl', 'bg-bg-secondary/90 backdrop-blur-glass', 'border border-neon-violet/30', 'shadow-neon-violet')}>
                  <p className="font-mono text-2xl font-bold text-neon-violet">{site.yearsExperience}</p>
                  <p className="font-mono text-xs text-text-muted">years exp</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal direction="right" delay={0.2}>
              <div className="space-y-4">
                <p className="text-text-secondary text-lg leading-relaxed">{site.bio}</p>
                <p className="text-text-secondary text-lg leading-relaxed">{site.bio2}</p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div key={stat.label} className={cn('p-4 rounded-xl text-center', 'bg-glass-bg border border-glass-border', 'hover:border-neon-violet/40 hover:bg-glass-bg-strong', 'transition-all duration-300')} whileHover={{ scale: 1.05, y: -4 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <p className={cn('font-display text-2xl font-bold', 'bg-gradient-to-r from-neon-cyan to-neon-violet', 'bg-clip-text text-transparent')}>{stat.value}</p>
                    <p className="font-mono text-xs text-text-muted mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.4}>
              <div className="space-y-3">
                <p className="font-mono text-xs text-neon-cyan tracking-widest uppercase">what I do</p>
                <div className="flex flex-wrap gap-3">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className={cn('flex items-center gap-2 px-4 py-2 rounded-lg', 'bg-glass-bg border border-glass-border', 'hover:border-neon-violet/40', 'transition-all duration-200')}>
                        <Icon size={15} className={item.color} />
                        <span className="font-mono text-sm text-text-secondary">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className={cn('flex items-center gap-2 px-5 py-2.5 rounded-lg', 'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink', 'text-bg-primary font-mono font-semibold text-sm', 'hover:shadow-neon-violet transition-all duration-300')}>
                  View My Work
                </a>
                <a href={site.resumeUrl} download className={cn('flex items-center gap-2 px-5 py-2.5 rounded-lg', 'border border-glass-border bg-glass-bg', 'text-text-secondary font-mono text-sm', 'hover:border-neon-cyan/40 hover:text-neon-cyan', 'transition-all duration-300')}>
                  Download Resume
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
