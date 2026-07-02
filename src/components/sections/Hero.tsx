'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site, socialLinks } from '@/data/site';
import { useTypewriter } from '@/hooks/useTypewriter';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';

const socialIcons: Record<string, React.ComponentType<{size?: number}>> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: Mail,
  telegram: Mail
};

function TerminalCard() {
  const { text } = useTypewriter([
    'available for new projects',
    'open to full-time roles',
    'building something awesome',
    'shipping great software'
  ], { typingSpeed: 60, deletingSpeed: 30, pauseDuration: 1800 });

  return (
    <div className={cn('rounded-xl overflow-hidden', 'border border-glass-border-strong', 'bg-bg-secondary/80 backdrop-blur-glass', 'shadow-glass-strong')}>
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-primary/60 border-b border-glass-border">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-xs text-text-muted">zsh — robel@portfolio</span>
      </div>
      <div className="p-5 font-mono text-sm space-y-2 min-h-[200px]">
        <p><span className="text-neon-cyan">$</span> <span className="text-text-primary">whoami</span></p>
        <p className="text-text-secondary">&gt; {site.terminalLines.whoami}</p>
        <p className="mt-2"><span className="text-neon-cyan">$</span> <span className="text-text-primary">cat location.txt</span></p>
        <p className="text-text-secondary">&gt; {site.terminalLines.location}</p>
        <p className="mt-2"><span className="text-neon-cyan">$</span> <span className="text-text-primary">stack --list</span></p>
        <p className="text-text-secondary">&gt; <span className="text-neon-violet">frontend</span>: <span className="text-neon-pink">{site.terminalLines.frontend}</span></p>
        <p className="text-text-secondary">&gt; <span className="text-neon-violet">backend</span>&nbsp;: <span className="text-neon-pink">{site.terminalLines.backend}</span></p>
        <p className="text-text-secondary">&gt; <span className="text-neon-violet">database</span>: <span className="text-neon-pink">{site.terminalLines.database}</span></p>
        <p className="mt-2"><span className="text-neon-cyan">$</span> <span className="text-text-primary">status --check</span></p>
        <p className="text-text-secondary">&gt; <span className="text-green-400">{text}</span><span className="animate-blink text-neon-cyan">|</span></p>
      </div>
    </div>
  );
}

export function Hero() {
  const { text: roleText } = useTypewriter(site.roles, {
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/5 rounded-full blur-[100px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-8 order-2 lg:order-1">
            <Reveal direction="left" delay={0.1}>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-neon-cyan" />
                <span className="font-mono text-sm text-neon-cyan tracking-widest uppercase">hello world</span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="space-y-2">
                <h1 className="font-display font-bold leading-tight tracking-tight text-[clamp(2.5rem,5vw,4rem)] text-text-primary">
                  {site.name}
                </h1>
                <div className="flex items-center gap-3 h-12">
                  <span className={cn('font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)]', 'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink', 'bg-[length:300%_auto] bg-clip-text text-transparent', 'animate-gradflow')}>
                    {roleText}
                  </span>
                  <span className="text-neon-cyan text-3xl animate-blink font-light">|</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <p className="text-text-secondary text-lg leading-relaxed max-w-lg">
                {site.bio.slice(0, 180)}...
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.4}>
              <div className="flex flex-wrap gap-3">
                <Pill color="cyan" dot glow>available for work</Pill>
                <Pill color="violet" glow>{site.yearsExperience} years experience</Pill>
                <Pill color="pink" glow>{site.location}</Pill>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton strength={0.3}>
                  <a href="#projects" className={cn('flex items-center gap-2 px-6 py-3 rounded-lg', 'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink', 'text-bg-primary font-mono font-semibold text-sm', 'hover:shadow-neon-violet hover:scale-105', 'transition-all duration-300')}>
                    View Projects
                    <ArrowDown size={16} />
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href="#contact" className={cn('flex items-center gap-2 px-6 py-3 rounded-lg', 'border border-neon-violet/40 bg-neon-violet/10', 'text-text-primary font-mono font-semibold text-sm', 'hover:border-neon-violet hover:bg-neon-violet/20', 'hover:shadow-neon-violet', 'transition-all duration-300')}>
                    Get In Touch
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href={site.resumeUrl} download className={cn('flex items-center gap-2 px-6 py-3 rounded-lg', 'border border-glass-border bg-glass-bg', 'text-text-secondary font-mono text-sm', 'hover:border-neon-cyan/40 hover:text-neon-cyan', 'transition-all duration-300')}>
                    <Download size={15} />
                    Resume
                  </a>
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.6}>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-text-muted">find me on</span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.icon];
                    return (
                      <MagneticButton key={link.label} strength={0.4}>
                        <a href={link.href} target={link.label !== 'email' ? '_blank' : undefined} rel="noopener noreferrer" className={cn('w-9 h-9 rounded-lg flex items-center justify-center', 'border border-glass-border bg-glass-bg', 'text-text-secondary', 'hover:border-neon-cyan/40 hover:text-neon-cyan', 'hover:shadow-neon-cyan', 'transition-all duration-300')} aria-label={link.label}>
                          <Icon size={15} />
                        </a>
                      </MagneticButton>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <Reveal direction="right" delay={0.2}>
              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-pink blur-2xl opacity-30 scale-110 animate-glow-pulse" />
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-neon-violet/40 shadow-neon-violet">
                    <Image src={site.avatarUrl} alt={site.name} fill className="object-cover" priority />
                  </div>
                  <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full border border-neon-cyan/20 animate-orbit" />
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full border border-neon-pink/20 animate-orbit" style={{ animationDelay: '-4s', animationDuration: '6s' }} />
                  <motion.div className={cn('absolute -top-4 -left-4 px-3 py-1.5 rounded-lg', 'bg-bg-secondary/90 border border-neon-cyan/30', 'font-mono text-xs text-neon-cyan')} animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                    &lt;FullStack /&gt;
                  </motion.div>
                  <motion.div className={cn('absolute -bottom-4 -right-4 px-3 py-1.5 rounded-lg', 'bg-bg-secondary/90 border border-neon-violet/30', 'font-mono text-xs text-neon-violet')} animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
                    {site.yearsExperience} yrs exp
                  </motion.div>
                  <motion.div className={cn('absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg', 'bg-bg-secondary/90 border border-neon-pink/30', 'font-mono text-xs text-neon-pink')} animate={{ x: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.75 }}>
                    {site.projectsCompleted} projects
                  </motion.div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.4}>
              <TerminalCard />
            </Reveal>
          </div>

        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-text-muted hover:text-neon-cyan transition-colors duration-200">
          <span className="font-mono text-xs tracking-widest uppercase">scroll down</span>
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  );
}
