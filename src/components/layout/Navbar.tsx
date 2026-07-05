'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';
import { useScrollState, useActiveSection } from '@/hooks/useNav';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'Portfolio', href: '#portfolio', icon: FolderOpen },
  { label: 'Contact', href: '#contact', icon: Mail }
];

export function Navbar() {
  const { scrolled } = useScrollState();
  const active = useActiveSection(navLinks.map(l => l.href.replace('#', '')));
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[200] h-0.5">
        <div className="h-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink transition-all duration-150" style={{ width: scrollProgress + '%' }} />
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-0.5 z-[100] transition-all duration-300',
          scrolled
            ? 'bg-[#050816]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet opacity-60 blur-sm scale-110 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-10 h-10 rounded-full ring-2 ring-neon-violet/50 overflow-hidden group-hover:ring-neon-cyan/70 transition-all duration-300">
                <Image src={site.avatarUrl} alt={site.name} fill className="object-cover" />
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-sm text-white leading-tight group-hover:text-neon-cyan transition-colors duration-300">{site.name.split(' ')[0]}</p>
              <p className="font-mono text-[10px] text-neon-cyan tracking-widest uppercase leading-tight">Full Stack Developer</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#', '') || (link.href === '#home' && active === '');
              const Icon = link.icon;
              return (
                <a key={link.href} href={link.href} className={cn('relative flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 group', isActive ? 'text-neon-cyan' : 'text-gray-400 hover:text-white')}>
                  {isActive && (
                    <motion.span layoutId="nav-active" className="absolute inset-0 bg-white/5 rounded-lg border border-neon-cyan/20" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                  )}
                  {link.href === '#home' && <Icon size={13} className="flex-shrink-0" />}
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-cyan" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className={cn('relative flex items-center gap-2 px-5 py-2 rounded-full', 'border-2 border-neon-violet/60', 'font-mono font-semibold text-sm text-white', 'hover:border-neon-violet hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]', 'transition-all duration-300 group overflow-hidden')}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span>Let&apos;s Talk</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-violet/0 via-neon-violet/10 to-neon-violet/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 text-white hover:border-neon-violet/40 transition-all duration-200">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 z-[101] bg-black/70 backdrop-blur-sm md:hidden" />
            <motion.nav initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed right-0 top-0 bottom-0 z-[102] w-[75%] max-w-[300px] bg-[#0B1120] border-l border-white/10 px-6 pt-20 pb-8 flex flex-col gap-2 md:hidden">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="relative w-12 h-12 rounded-full ring-2 ring-neon-violet/50 overflow-hidden">
                  <Image src={site.avatarUrl} alt={site.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">{site.name}</p>
                  <p className="font-mono text-[10px] text-neon-cyan tracking-widest uppercase">Full Stack Developer</p>
                </div>
              </div>
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className={cn('flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm transition-all duration-200', active === link.href.replace('#', '') ? 'bg-neon-violet/15 text-neon-cyan border border-neon-violet/30' : 'text-gray-400 hover:text-white hover:bg-white/5')}>
                    <Icon size={16} />
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="mt-auto">
                <a href="#contact" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-neon-violet/60 font-mono font-semibold text-sm text-white hover:border-neon-violet hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Let&apos;s Talk →
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
