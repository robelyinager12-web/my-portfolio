'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, FolderOpen, Globe, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { icon: '🚀', value: '20+', label: 'PROJECTS DONE', color: 'text-neon-cyan' },
  { icon: '😊', value: '15+', label: 'HAPPY CLIENTS', color: 'text-neon-violet' },
  { icon: '⚡', value: '3+', label: 'YEARS EXP', color: 'text-neon-pink' },
  { icon: '🔧', value: '15+', label: 'TECH SKILLS', color: 'text-yellow-400' }
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">
            ✦ PORTFOLIO 2026
          </span>
          <h2 className="font-display font-black text-[clamp(3rem,8vw,6rem)] leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-violet to-neon-cyan animate-gradflow bg-[length:300%_auto]">About</span>
            <span className="text-white"> Me</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
            Crafting the web with passion, precision, and a relentless pursuit of excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative">
            <div className="relative w-full max-w-[380px] mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 via-neon-violet/20 to-neon-pink/30 rounded-2xl blur-2xl scale-105" />
              <div className="relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #1a0a2e 50%, #0d2b3e 100%)' }}>
                <div className="aspect-[3/4] relative">
                  <Image src="/avatar.jpg" alt="Robel Yinager" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-center gap-2 bg-[#050816]/80 backdrop-blur-md border border-neon-cyan/20 rounded-xl py-2.5 px-4">
                    <span className="text-neon-cyan text-sm">✦</span>
                    <span className="font-mono font-bold text-white text-sm">Full Stack Developer</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-neon-violet/20 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full border border-neon-pink/20 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute -right-1 top-1/2 w-1.5 h-1.5 rounded-full bg-neon-pink shadow-[0_0_6px_rgba(236,72,153,0.8)]" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>

            <div>
              <h3 className="font-display font-black text-2xl text-white mb-1">Robel Yinager</h3>
              <p className="text-neon-cyan font-mono text-sm font-semibold mb-5">Full Stack Developer & Software Engineer</p>
              <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed">
                <p>
                  I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> and Software Engineer dedicated to creating scalable, secure, and user-centered applications. I enjoy building clean web experiences that blend design and functionality.
                </p>
                <p>
                  I believe great code tells a story — one that is readable, maintainable, and built to last. I constantly explore new tools, frameworks, and <span className="text-neon-violet font-semibold">modern software architectures</span> to deliver solutions that are not just functional, but elegant.
                </p>
                <p>
                  On the backend, I build robust APIs and server-side logic using <span className="text-neon-pink font-semibold">Node.js & Express</span>, design RESTful services, and manage complex data with MongoDB, PostgreSQL and MySQL — delivering fast, scalable platforms.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/8">
                <span className="font-mono text-xs text-gray-500">Location:</span>
                <span className="font-mono text-xs text-neon-cyan">Injibara, Ethiopia 🇪🇹</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="font-mono text-xs text-green-400">Available for work</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/8">
                <Zap size={11} className="text-yellow-400 flex-shrink-0" />
                <span className="font-mono text-xs text-gray-300">Responds within 24h</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/3 border border-white/8">
                <Globe size={11} className="text-neon-violet flex-shrink-0" />
                <span className="font-mono text-xs text-gray-300">Remote & On-site</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="/resume.pdf" download className={cn('flex items-center gap-2 px-7 py-3.5 rounded-full', 'bg-gradient-to-r from-neon-cyan to-neon-violet', 'text-black font-mono font-bold text-sm', 'hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:scale-105', 'transition-all duration-300')}>
                <Download size={15} />
                Download CV
              </a>
              <a href="#portfolio" className={cn('flex items-center gap-2 px-7 py-3.5 rounded-full', 'border-2 border-white/20 bg-transparent', 'text-white font-mono font-bold text-sm', 'hover:border-neon-violet/60 hover:text-neon-violet', 'transition-all duration-300')}>
                <FolderOpen size={15} />
                View Projects →
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} className={cn('relative p-8 rounded-2xl text-center', 'bg-white/3 border border-white/8', 'hover:border-neon-violet/30 hover:bg-white/5', 'transition-all duration-300 group overflow-hidden cursor-default')} whileHover={{ y: -6, scale: 1.02 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/0 to-neon-cyan/0 group-hover:from-neon-violet/8 group-hover:to-neon-cyan/8 transition-all duration-500 rounded-2xl" />
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className={cn('font-display font-black text-4xl mb-2', stat.color)}>{stat.value}</div>
              <div className="font-mono text-[11px] text-gray-500 tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
