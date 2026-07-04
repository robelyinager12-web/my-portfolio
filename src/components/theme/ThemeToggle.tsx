'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (stored) setTheme(stored);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'}
      className={cn(
        'w-9 h-9 rounded-full',
        'flex items-center justify-center',
        'border border-glass-border',
        'bg-glass-bg backdrop-blur-glass',
        'text-text-secondary hover:text-neon-cyan',
        'hover:border-neon-cyan/40',
        'transition-all duration-200'
      )}
    >
      {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
