'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail, ArrowRight } from 'lucide-react';
import { useScrollState, useActiveSection, useScrollProgress } from '@/hooks/useNav';

/**
 * Responsive navigation bar
 *  - Mobile  (< 768px)   : logo + hamburger → slide-in drawer
 *  - Tablet  (768–1023)  : compact inline links, icons + role subtitle hidden
 *  - Desktop (≥ 1024px)  : full inline links, active icon, CTA button
 *
 * All breakpoint logic lives in CSS (`.nav-*` rules in globals.css) so the
 * correct layout is rendered on first paint — no JS width checks, no flash.
 */

const NAV_LINKS = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'Portfolio', href: '#portfolio', icon: FolderOpen },
  { label: 'Contact', href: '#contact', icon: Mail }
] as const;

// Stable reference so useActiveSection doesn't rebuild its observer every render
const SECTION_IDS: string[] = NAV_LINKS.map((l) => l.href.slice(1));

// Must match the `min-width` used by .nav-desktop / .nav-burger in globals.css
const DESKTOP_MQ = '(min-width: 768px)';

export function Navbar() {
  const { scrolled } = useScrollState();
  const progress = useScrollProgress();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    active === href.slice(1) || (href === '#home' && !active);

  /* Close the drawer automatically if the viewport grows to tablet/desktop
     (e.g. phone rotated to landscape, browser window resized). */
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /* While the drawer is open: lock page scroll, move focus inside, close on
     Escape, keep Tab focus trapped, and hand focus back to the burger on close. */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const burger = burgerRef.current;
    const drawer = drawerRef.current;
    const focusable = () =>
      Array.from(
        drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      );
    focusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      burger?.focus({ preventScroll: true });
    };
  }, [open]);

  /* Drawer links: unlock scroll first, then scroll to the section.
     (A plain #hash jump can be ignored by mobile Safari while the body is locked.) */
  const goTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.getElementById(href.slice(1));
    setOpen(false);
    if (!target) return; // fall back to the native anchor behaviour
    e.preventDefault();
    document.body.style.overflow = '';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', href);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {/* Scroll progress */}
      <div className="nav-progress" aria-hidden="true">
        <div className="nav-progress-bar" style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      <motion.header
        className="nav-header"
        data-scrolled={scrolled}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-inner">
          {/* Brand */}
          <a href="#home" className="nav-brand" aria-label="Robel — back to top">
            <span className="nav-avatar-ring">
              <span className="nav-avatar">
                <Image src="/avatar.jpg" alt="" width={48} height={48} priority />
              </span>
            </span>
            <span className="nav-brand-text">
              <span className="nav-brand-name">Robel</span>
              <span className="nav-brand-role">Full Stack Developer</span>
            </span>
          </a>

          {/* Tablet + desktop links */}
          <nav className="nav-desktop" aria-label="Primary">
            {NAV_LINKS.map(({ label, href, icon: Icon }) => {
              const current = isActive(href);
              return (
                <a
                  key={href}
                  href={href}
                  className={`nav-link${current ? ' is-active' : ''}`}
                  aria-current={current ? 'location' : undefined}
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Tablet + desktop CTA */}
          <a href="#contact" className="nav-cta nav-cta--bar">
            <span className="nav-cta-dot" aria-hidden="true" />
            Let&apos;s Talk
            <ArrowRight size={14} aria-hidden="true" />
          </a>

          {/* Mobile hamburger */}
          <button
            ref={burgerRef}
            type="button"
            className="nav-burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              ref={drawerRef}
              className="nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%', transition: { duration: 0.22, ease: 'easeIn' } }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            >
              <div className="nav-drawer-top">
                <span className="nav-drawer-title">Menu</span>
                <button
                  type="button"
                  className="nav-drawer-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="nav-drawer-links">
                {NAV_LINKS.map(({ label, href, icon: Icon }, i) => {
                  const current = isActive(href);
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={(e) => goTo(e, href)}
                      className={`nav-drawer-link${current ? ' is-active' : ''}`}
                      aria-current={current ? 'location' : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                    >
                      <Icon size={18} aria-hidden="true" />
                      {label}
                    </motion.a>
                  );
                })}
              </nav>

              <a href="#contact" onClick={(e) => goTo(e, '#contact')} className="nav-cta nav-cta--drawer">
                <span className="nav-cta-dot" aria-hidden="true" />
                Let&apos;s Talk
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}