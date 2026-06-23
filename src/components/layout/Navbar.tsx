cat > src/components/layout/Navbar.tsx << 'ENDOFFILE'
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, site } from '@/data/site';
import { useActiveSection, useScrollState } from '@/hooks/useNav';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Navbar() {
  const scrolled = useScrollState();
  const active = useActiveSection(navLinks.map((link) => link.href.replace('#', '')));
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] border-b border-transparent py-5 transition-all duration-300',
        scrolled && 'border-line bg-paper/[0.82] py-3.5 backdrop-blur-md'
      )}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8">
        <a href="#home" className="flex items-center gap-2 font-display text-[19px] font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-indigo to-cyan" />
          {site.handle}
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            
              key={link.href}
              href={link.href}
              className={cn(
                'relative py-1 font-mono text-[13px] text-ink-2 transition-colors hover:text-ink',
                'after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-indigo after:transition-all after:duration-200 hover:after:w-full',
                active === link.href.replace('#', '') && 'text-ink after:w-full'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          
            href="#contact"
            className="inline-flex rounded-md border border-line-strong px-[18px] py-[9px] font-mono text-[13px] transition-all hover:bg-ink hover:text-paper"
          >
            say hello
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="z-[110] p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fixed inset-y-0 right-0 z-[105] flex w-[74%] max-w-[320px] flex-col gap-6 bg-paper-3 px-8 pb-8 pt-24 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-base text-ink-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit rounded-md border border-line-strong px-5 py-2.5 font-mono text-sm"
          >
            say hello
          </a>
        </nav>
      )}
    </header>
  );
}
ENDOFFILE