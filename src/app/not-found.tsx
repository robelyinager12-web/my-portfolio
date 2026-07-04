'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center space-y-8 max-w-lg">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="font-mono text-xs text-neon-cyan tracking-widest uppercase mb-4">error 404</p>
          <h1 className={cn('font-display font-bold leading-tight', 'text-[clamp(6rem,15vw,10rem)]', 'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink', 'bg-[length:300%_auto] bg-clip-text text-transparent', 'animate-gradflow')}>
            404
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-text-primary">Page not found</h2>
          <p className="text-text-secondary leading-relaxed">
            The page you are looking for was moved renamed or never existed in the first place.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className={cn('p-4 rounded-xl mb-6', 'bg-glass-bg border border-glass-border', 'font-mono text-sm text-text-secondary')}>
            <span className="text-neon-cyan">$</span> cd <span className="text-neon-violet">~</span>
            <br />
            <span className="text-neon-cyan">$</span> <span className="text-text-primary">navigate --home</span>
            <br />
            <span className="text-text-muted">&gt; redirecting to home...</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className={cn('flex items-center justify-center gap-2 px-6 py-3 rounded-xl', 'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink', 'text-bg-primary font-mono font-semibold text-sm', 'hover:shadow-neon-violet transition-all duration-300')}>
            <Home size={16} />
            Back to Home
          </a>
          <button onClick={() => window.history.back()} className={cn('flex items-center justify-center gap-2 px-6 py-3 rounded-xl', 'border border-glass-border bg-glass-bg', 'text-text-secondary font-mono text-sm', 'hover:border-neon-violet/40 hover:text-neon-violet', 'transition-all duration-300')}>
            <ArrowLeft size={16} />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
