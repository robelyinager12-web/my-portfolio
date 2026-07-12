'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollState, useActiveSection } from '@/hooks/useNav';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  const { scrolled } = useScrollState();
  const active = useActiveSection(navLinks.map(l => l.href.replace('#', '')));
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', zIndex: 300 }}>
        <div style={{ height: '100%', background: 'linear-gradient(90deg,#00E5FF,#8B5CF6,#EC4899)', width: progress + '%', transition: 'width 0.1s linear' }} />
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed', top: '2px', left: 0, right: 0,
          zIndex: 100,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? 'rgba(5,8,22,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', background: 'linear-gradient(135deg,#00E5FF,#8B5CF6,#EC4899)', padding: '2px' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src="/avatar.jpg" alt="Robel" width={40} height={40} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: '#ffffff', lineHeight: 1.2 }}>Robel</div>
              <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '10px', color: '#00E5FF', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.2 }}>Full Stack Developer</div>
            </div>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden md:flex">
            {navLinks.map(link => {
              const isActive = active === link.href.replace('#', '') || (link.href === '#home' && !active);
              return (
                <a key={link.href} href={link.href} style={{
                  position: 'relative',
                  padding: '8px 16px',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: isActive ? '#00E5FF' : '#94A3B8',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  {link.href === '#home' && <span style={{ fontSize: '13px' }}>⌂</span>}
                  {link.label}
                  {isActive && <span style={{ position: 'absolute', bottom: '3px', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '4px', borderRadius: '50%', background: '#00E5FF' }} />}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '12px' }}>
            <a href="#contact" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 22px',
              borderRadius: '50px',
              border: '2px solid rgba(139,92,246,0.5)',
              fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', color: '#ffffff',
              textDecoration: 'none',
              transition: 'all 0.25s',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = '#8B5CF6';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(139,92,246,0.35)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(139,92,246,0.5)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', animation: 'pulse2 2s infinite', flexShrink: 0 }} />
              Let&apos;s Talk →
            </a>
          </div>

          <button onClick={() => setOpen(v => !v)} className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', padding: '8px' }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 101, background: 'rgba(5,8,22,0.7)', backdropFilter: 'blur(4px)' }} />
            <motion.nav initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} style={{ position: 'fixed', right: 0, top: 0, bottom: 0, zIndex: 102, width: '280px', background: '#0B1120', padding: '80px 32px 32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: active === link.href.replace('#','') ? '#00E5FF' : '#94A3B8', padding: '12px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {link.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', borderRadius: '50px', border: '2px solid rgba(139,92,246,0.5)', fontFamily: 'Inter', fontSize: '14px', color: '#ffffff', textDecoration: 'none' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80' }} />
                Let&apos;s Talk →
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
