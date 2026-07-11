'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const phases = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep-dive into your goals, audience, and technical requirements to shape the perfect scope. Every decision starts here.',
    color: 'from-neon-cyan/20 to-neon-cyan/5',
    border: 'hover:border-neon-cyan/60',
    numColor: 'text-neon-cyan',
    shadow: 'hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]',
    icon: '🔍'
  },
  {
    num: '02',
    title: 'Planning',
    desc: 'Architecture decisions, tech stack selection, milestone timelines, and a written spec signed off before any code is written.',
    color: 'from-green-400/20 to-green-400/5',
    border: 'hover:border-green-400/60',
    numColor: 'text-green-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]',
    icon: '📐'
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Wireframes, prototypes, and high-fidelity UI mockups crafted with pixel-precision and your brand voice in mind.',
    color: 'from-neon-violet/20 to-neon-violet/5',
    border: 'hover:border-neon-violet/60',
    numColor: 'text-neon-violet',
    shadow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    icon: '🎨'
  },
  {
    num: '04',
    title: 'Development',
    desc: 'Clean, modular code written with modern stacks — React, Node, MongoDB — reviewed, tested, and iterated at every step.',
    color: 'from-blue-400/20 to-blue-400/5',
    border: 'hover:border-blue-400/60',
    numColor: 'text-blue-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]',
    icon: '💻'
  },
  {
    num: '05',
    title: 'Testing',
    desc: 'End-to-end QA, cross-browser checks, performance audits, security scans, and UAT with your team before going live.',
    color: 'from-yellow-400/20 to-yellow-400/5',
    border: 'hover:border-yellow-400/60',
    numColor: 'text-yellow-400',
    shadow: 'hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]',
    icon: '🧪'
  },
  {
    num: '06',
    title: 'Launch',
    desc: 'Production deployment, performance tuning, SEO optimization, and a full handoff with documentation and ongoing support.',
    color: 'from-neon-pink/20 to-neon-pink/5',
    border: 'hover:border-neon-pink/60',
    numColor: 'text-neon-pink',
    shadow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
    icon: '🚀'
  }
];

export function Process() {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-violet/30 bg-neon-violet/5 font-mono text-xs text-neon-violet tracking-widest uppercase mb-6">
            ⚙️ HOW I WORK
          </span>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,3.8rem)] leading-tight mb-4">
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-pink">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven six-phase workflow that transforms your idea into a polished digital product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                'relative p-7 rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm',
                'transition-all duration-300 group overflow-hidden cursor-default',
                phase.border, phase.shadow
              )}
            >
              <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br', phase.color)} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className={cn('font-display font-bold text-5xl leading-none opacity-30 group-hover:opacity-60 transition-opacity duration-300', phase.numColor)}>
                    {phase.num}
                  </div>
                  <div className="text-3xl">{phase.icon}</div>
                </div>

                <h3 className={cn('font-display font-semibold text-xl text-white mb-3 group-hover:transition-colors duration-300', 'group-hover:' + phase.numColor.replace('text-', 'text-'))}>
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>

                <div className={cn('mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r', phase.numColor === 'text-neon-cyan' ? 'from-neon-cyan to-transparent' : phase.numColor === 'text-neon-violet' ? 'from-neon-violet to-transparent' : phase.numColor === 'text-neon-pink' ? 'from-neon-pink to-transparent' : phase.numColor === 'text-green-400' ? 'from-green-400 to-transparent' : phase.numColor === 'text-blue-400' ? 'from-blue-400 to-transparent' : 'from-yellow-400 to-transparent')} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          {phases.map((_, i) => (
            <div
              key={i}
              className={cn('h-1.5 rounded-full transition-all duration-300', i === 0 ? 'w-8 bg-neon-cyan' : 'w-1.5 bg-white/20')}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
