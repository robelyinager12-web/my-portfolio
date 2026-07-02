'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { site, navLinks, socialLinks } from '@/data/site';
import { MagneticButton } from '@/components/ui/MagneticButton';

const socialIcons: Record<string, React.ComponentType<{size?: number}>> = {
  github: Github, linkedin: Linkedin, email: Mail, twitter: Mail, telegram: Mail
};

const socialColors: Record<string, string> = {
  github: 'hover:text-neon-cyan',
  linkedin: 'hover:text-neon-violet',
  email: 'hover:text-neon-pink',
  twitter: 'hover:text-neon-cyan',
  telegram: 'hover:text-neon-violet'
};

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="relative mt-20 border-t border-glass-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-violet to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50 blur-sm" />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="space-y-4">
            <a href="#home" className={cn('inline-block font-display text-2xl font-bold', 'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink', 'bg-[length:300%_auto] bg-clip-text text-transparent', 'animate-gradflow')}>
              {site.name}
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {site.bio.slice(0, 120)}...
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-green-400">available for work</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs text-neon-cyan tracking-widest uppercase">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={cn('font-mono text-sm text-text-secondary', 'hover:text-neon-violet', 'transition-colors duration-200', 'flex items-center gap-2 group')}>
                    <span className={cn('w-0 h-px bg-neon-violet', 'group-hover:w-4', 'transition-all duration-300')} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs text-neon-cyan tracking-widest uppercase">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <li key={link.label}>
                    <MagneticButton strength={0.2}>
                      <a href={link.href} target={link.label !== 'email' ? '_blank' : undefined} rel="noopener noreferrer" className={cn('flex items-center gap-3 group', 'font-mono text-sm text-text-secondary', 'transition-all duration-200', socialColors[link.icon])}>
                        <span className={cn('w-8 h-8 rounded-lg flex items-center justify-center', 'border border-glass-border bg-glass-bg', 'group-hover:border-current', 'transition-all duration-200')}>
                          <Icon size={14} />
                        </span>
                        {link.handle}
                      </a>
                    </MagneticButton>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-neon-violet">{site.name}</span>
            {' '}built with Next.js, Three.js and TypeScript
          </p>
          <div className="flex items-center gap-6">
            <p className="font-mono text-xs text-text-muted">
              <span className="text-neon-cyan">{site.location}</span>{' '}{site.locationFlag}
            </p>
            <MagneticButton strength={0.3}>
              <motion.button onClick={scrollToTop} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} className={cn('w-9 h-9 rounded-lg flex items-center justify-center', 'border border-glass-border bg-glass-bg', 'text-text-secondary', 'hover:border-neon-violet/40', 'hover:text-neon-violet', 'transition-all duration-200')} aria-label="Back to top">
                <ArrowUp size={15} />
              </motion.button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
