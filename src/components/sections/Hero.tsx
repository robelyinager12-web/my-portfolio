'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Zap, Shield, Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';
import { useTypewriter } from '@/hooks/useTypewriter';

const techStack = [
  { name: 'React', emoji: '⚛️' },
  { name: 'Node.js', emoji: '🟢' },
  { name: 'TypeScript', emoji: '🔷' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'Express', emoji: '⚙️' },
  { name: 'Next.js', emoji: '▲' },
  { name: 'Tailwind', emoji: '🎨' },
  { name: 'MySQL', emoji: '🗄️' }
];

const floatingBadges = [
  { label: '<FullStack />', color: 'from-neon-violet/20 to-neon-cyan/20', border: 'border-neon-cyan/30', text: 'text-neon-cyan', position: 'top-4 right-[-20px]' },
  { label: '20+ projects', color: 'from-neon-pink/20 to-neon-violet/20', border: 'border-neon-pink/30', text: 'text-neon-pink', position: 'top-[45%] right-[-40px]' },
  { label: '3+ yrs exp', color: 'from-neon-cyan/20 to-neon-violet/20', border: 'border-neon-violet/30', text: 'text-neon-violet', position: 'bottom-8 right-[-20px]' }
];

export function Hero() {
  const { text: roleText } = useTypewriter(site.roles, { typingSpeed: 70, deletingSpeed: 35, pauseDuration: 2000 });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-violet/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-neon-cyan" />
                <span className="font-mono text-neon-cyan text-xs tracking-[0.2em] uppercase">Hello World</span>
              </div>
              <h1 className="font-display font-black text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.05] text-white mb-2">
                {site.name}
              </h1>
              <div className="flex items-center gap-2 min-h-[2.5rem]">
                <span className="text-[clamp(1.4rem,3vw,2rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink">
                  {roleText}
                </span>
                <span className="text-neon-cyan text-[clamp(1.4rem,3vw,2rem)] animate-blink font-light">|</span>
              </div>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-400 text-base leading-relaxed max-w-lg">
              I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> and Software Engineer dedicated to creating scalable, secure, and user-centered applications. My expertise spans frontend development, backend architecture, database design, and cloud deployment.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech.name} className={cn('flex items-center gap-1.5 px-3 py-1.5 rounded-full', 'bg-white/5 border border-white/10', 'font-mono text-xs text-gray-300', 'hover:border-neon-cyan/40 hover:text-neon-cyan hover:bg-neon-cyan/5', 'transition-all duration-200 cursor-default')}>
                  <span>{tech.emoji}</span>
                  {tech.name}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/3 border border-white/8 font-mono text-sm max-w-md">
              <span className="text-gray-500">const</span>
              <span className="text-neon-cyan">developer</span>
              <span className="text-gray-500">=</span>
              <span className="text-gray-300">&#123;</span>
              <span className="text-neon-pink">passion</span>
              <span className="text-gray-500">:</span>
              <span className="text-green-400">&quot;∞&quot;</span>
              <span className="text-gray-300">,</span>
              <span className="text-neon-pink">bugs</span>
              <span className="text-gray-500">:</span>
              <span className="text-neon-violet">0</span>
              <span className="text-gray-300">&#125;</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/3 border border-white/8 max-w-md">
              <span className="flex items-center gap-1.5 text-green-400 font-mono text-xs border-r border-white/10 pr-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for hire
              </span>
              <span className="flex items-center gap-1.5 text-yellow-400 font-mono text-xs border-r border-white/10 px-3">
                <Zap size={11} />
                Responds within 24h
              </span>
              <span className="flex items-center gap-1.5 text-neon-cyan font-mono text-xs pl-3">
                <Globe size={11} />
                Remote & On-site
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
              <a href="#contact" className={cn('flex items-center gap-2 px-7 py-3.5 rounded-full', 'bg-gradient-to-r from-neon-cyan to-neon-violet', 'text-black font-mono font-bold text-sm', 'hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]', 'hover:scale-105 transition-all duration-300')}>
                <MessageSquare size={16} />
                Contact Me
              </a>
              <a href={site.resumeUrl} download className={cn('flex items-center gap-2 px-7 py-3.5 rounded-full', 'border-2 border-neon-violet/60 bg-transparent', 'text-white font-mono font-bold text-sm', 'hover:border-neon-violet hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]', 'hover:scale-105 transition-all duration-300')}>
                <FileText size={16} />
                My Resume
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="relative flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-pink opacity-20 blur-3xl scale-110 animate-pulse" />
              <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/30 via-neon-violet/40 to-neon-pink/30 p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0B1120]">
                    <Image src={site.avatarUrl} alt={site.name} fill className="object-cover object-top" priority />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-neon-violet/20 animate-[spin_20s_linear_infinite]">
                  <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
                </div>
                <div className="absolute inset-4 rounded-full border border-neon-cyan/10 animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute -right-1 top-1/2 w-1.5 h-1.5 rounded-full bg-neon-pink shadow-[0_0_6px_rgba(236,72,153,0.8)]" />
                </div>
              </div>

              {floatingBadges.map((badge, i) => (
                <motion.div key={badge.label} className={cn('absolute', badge.position, 'px-3 py-1.5 rounded-lg', 'bg-gradient-to-r', badge.color, 'border', badge.border, 'backdrop-blur-sm', 'font-mono text-xs font-semibold', badge.text, 'whitespace-nowrap shadow-lg')} animate={{ y: [0, -6, 0] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}>
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-neon-cyan transition-colors duration-200" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}
