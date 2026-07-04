'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, site } from '@/data/site';
import { useScrollState, useActiveSection } from '@/hooks/useNav';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Navbar() {
  const { scrolled } = useScrollState();
  const active = useActiveSection(navLinks.map((link) => link.href.replace('#', '')));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed inset-x-0 top-0 z-[100]',
          'transition-all duration-500',
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-glass border-b border-neon-violet/20 shadow-[0_4px_30px_rgba(139,92,246,0.08)] py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <MagneticButton strength={0.2}>
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-pink opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 scale-110" />
                <Image src={site.avatarUrl} alt={site.name} width={36} height={36} className="relative rounded-full object-cover ring-2 ring-neon-violet/40 group-hover:ring-neon-cyan/60 transition-all duration-300" />
              </div>
              <span className="font-mono text-base font-semibold bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent group-hover:from-neon-violet group-hover:to-neon-pink transition-all duration-300">
                {site.handle}
              </span>
            </a>
          </MagneticButton>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#', '');
              return (
                <MagneticButton key={link.href} strength={0.15}>
                  <a href={link.href} className={cn('relative font-mono text-sm transition-colors duration-200 group py-1', isActive ? 'text-neon-cyan' : 'text-text-secondary hover:text-text-primary')}>
                    {link.label}
                    <span className={cn('absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-neon-cyan to-neon-violet transition-all duration-300', isActive ? 'w-full' : 'w-0 group-hover:w-full')} />
                  </a>
                </MagneticButton>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <MagneticButton strength={0.3}>
              <a href={site.resumeUrl} download className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-neon-violet transition-colors duration-200">
                <Download size={13} />
                resume
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a href="#contact" className="relative font-mono text-sm px-5 py-2 rounded-lg text-text-primary gradient-border bg-neon-violet/10 hover:bg-neon-violet/20 hover:shadow-neon-violet transition-all duration-300">
                say hello
              </a>
            </MagneticButton>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="w-9 h-9 rounded-lg flex items-center justify-center border border-glass-border bg-glass-bg text-text-primary hover:border-neon-violet/40 transition-all duration-200">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={() => setOpen(false)} className="fixed inset-0 z-[101] bg-bg-primary/60 backdrop-blur-sm md:hidden" />
            <motion.nav initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed right-0 top-0 bottom-0 z-[102] w-[75%] max-w-[320px] bg-bg-secondary/95 backdrop-blur-strong border-l border-glass-border-strong px-8 pt-24 pb-8 flex flex-col gap-6 md:hidden">
              <div className="flex items-center gap-3 mb-4 pb-6 border-b border-glass-border">
                <Image src={site.avatarUrl} alt={site.name} width={44} height={44} className="rounded-full ring-2 ring-neon-violet/40" />
                <div>
                  <p className="font-display font-semibold text-text-primary text-sm">{site.name}</p>
                  <p className="font-mono text-xs text-neon-cyan">{site.yearsExperience} years experience</p>
                </div>
              </div>
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className={cn('font-mono text-base transition-colors duration-200', active === link.href.replace('#', '') ? 'text-neon-cyan' : 'text-text-secondary hover:text-text-primary')}>
                  <span className="text-neon-violet/50 mr-2 text-xs">0{i + 1}.</span>
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-auto flex flex-col gap-3">
                <a href={site.resumeUrl} download onClick={() => setOpen(false)} className="flex items-center gap-2 justify-center font-mono text-sm py-2.5 rounded-lg border border-glass-border text-text-secondary hover:text-neon-violet hover:border-neon-violet/40 transition-all duration-200">
                  <Download size={14} />
                  download resume
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="flex items-center justify-center font-mono text-sm py-2.5 rounded-lg bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink text-bg-primary font-semibold hover:shadow-neon-violet transition-all duration-300">
                  say hello
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
