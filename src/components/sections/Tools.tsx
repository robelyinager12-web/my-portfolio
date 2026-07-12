'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const tools = [
  { name: 'React', emoji: '⚛️', color: 'hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]' },
  { name: 'Node.js', emoji: '🟢', color: 'hover:border-green-400/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]' },
  { name: 'MongoDB', emoji: '🍃', color: 'hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]' },
  { name: 'MySQL', emoji: '🗄️', color: 'hover:border-orange-400/50 hover:shadow-[0_0_15px_rgba(251,146,60,0.2)]' },
  { name: 'Express', emoji: '⚙️', color: 'hover:border-gray-400/50 hover:shadow-[0_0_15px_rgba(156,163,175,0.2)]' },
  { name: 'JavaScript', emoji: '⚡', color: 'hover:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]' },
  { name: 'CSS3', emoji: '🎨', color: 'hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]' },
  { name: 'Git', emoji: '📦', color: 'hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]' },
  { name: 'Figma', emoji: '🖌️', color: 'hover:border-pink-400/50 hover:shadow-[0_0_15px_rgba(244,114,182,0.2)]' },
  { name: 'REST API', emoji: '🔗', color: 'hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]' },
  { name: 'JWT', emoji: '🔐', color: 'hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]' },
  { name: 'Bootstrap', emoji: '🅱️', color: 'hover:border-neon-violet/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]' },
  { name: 'Next.js', emoji: '▲', color: 'hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]' },
  { name: 'TypeScript', emoji: '🔷', color: 'hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
  { name: 'PostgreSQL', emoji: '🐘', color: 'hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(129,140,248,0.2)]' },
  { name: 'Three.js', emoji: '🎮', color: 'hover:border-neon-violet/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]' },
  { name: 'Tailwind', emoji: '🌊', color: 'hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]' },
  { name: 'Docker', emoji: '🐳', color: 'hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]' },
  { name: 'AWS', emoji: '☁️', color: 'hover:border-orange-400/50 hover:shadow-[0_0_15px_rgba(251,146,60,0.2)]' },
  { name: 'GraphQL', emoji: '◈', color: 'hover:border-neon-pink/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]' }
];

const scrollTools = [...tools, ...tools];

export function Tools() {
  return (
    <section id="tools" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-violet/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-pink/30 bg-neon-pink/5 font-mono text-xs text-neon-pink tracking-widest uppercase mb-6">
            🔧 TECH ARSENAL
          </span>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-4">
            <span className="text-white">Tools & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The battle-tested stack I rely on to build fast, secure, and scalable applications.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-3 justify-center mb-12">
          {tools.map((tool, i) => (
            <motion.div key={tool.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} whileHover={{ y: -4, scale: 1.05 }} className={cn('flex items-center gap-2.5 px-5 py-3 rounded-full', 'bg-white/3 ', 'font-mono text-sm text-gray-300', 'cursor-default transition-all duration-300', tool.color)}>
              <span className="text-xl">{tool.emoji}</span>
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {scrollTools.map((tool, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/3  font-mono text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                <span>{tool.emoji}</span>
                <span className="text-neon-cyan">+</span>
                <span className="uppercase tracking-widest">{tool.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Frontend', count: '8+', icon: '🎨', color: 'text-neon-cyan' },
            { label: 'Backend', count: '5+', icon: '⚙️', color: 'text-neon-violet' },
            { label: 'Database', count: '4+', icon: '🗄️', color: 'text-neon-pink' },
            { label: 'DevOps', count: '3+', icon: '☁️', color: 'text-yellow-400' }
          ].map((cat, i) => (
            <motion.div key={cat.label} className="p-5 rounded-2xl text-center bg-white/3  hover:border-neon-violet/30 hover:bg-white/5 transition-all duration-300" whileHover={{ y: -4 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className={cn('font-display font-black text-2xl mb-1', cat.color)}>{cat.count}</div>
              <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">{cat.label} tools</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
