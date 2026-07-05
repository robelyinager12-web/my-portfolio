'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, FolderOpen, Rocket, Smile, Zap, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';

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
            ✦ PORTFOLIO 2025
          </span>
          <h2 className="font-display font-black text-[clamp(3rem,8vw,6rem)] leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink">About</span>
            <span className="text-white"> Me</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">Crafting the web with passion, precision, and a relentless pursuit of excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-violet/20 to-neon-pink/20 rounded-2xl blur-xl scale-105" />
              <div className="relative rounded-2xl overflow-hidden border border-neon-violet/20 aspect-[4/5]">
                <Image src={site.avatarUrl} alt={site.name} fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-center gap-2 bg-[#050816]/80 backdrop-blur-sm border border-neon-cyan/20 rounded-xl py-2.5 px-4">
                  <span className="text-neon-cyan text-sm">✦</span>
                  <span className="font-mono font-bold text-white text-sm">Full Stack Developer</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-1">{site.name}</h3>
              <p className="text-neon-cyan font-mono text-sm mb-4">Full Stack Developer & Software Engineer</p>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> with a flair for building clean, responsive web experiences that blend design and functionality. With a solid foundation in modern front-end engineering and back-end architecture, I thrive on turning complex ideas into user-friendly digital solutions.</p>
                <p>I believe great code tells a story — one that is readable, maintainable, and built to last. I am constantly exploring new tools, frameworks, and <span className="text-neon-violet font-semibold">web security architectures</span> to deliver solutions that are not just functional, but elegant.</p>
                <p>On the backend, I engineer robust server-side logic using <span className="text-neon-pink font-semibold">Node.js & Express</span>, design RESTful APIs, and manage complex data with MongoDB and SQL — ensuring every platform is blazing fast and built for global scalability.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href={site.resumeUrl} download className={cn('flex items-center gap-2 px-6 py-3 rounded-full', 'bg-gradient-to-r from-neon-cyan to-neon-violet', 'text-black font-mono font-bold text-sm', 'hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:scale-105', 'transition-all duration-300')}>
                <Download size={15} />
                Download CV
              </a>
              <a href="#portfolio" className={cn('flex items-center gap-2 px-6 py-3 rounded-full', 'border-2 border-white/20 bg-transparent', 'text-white font-mono font-bold text-sm', 'hover:border-neon-violet/60 hover:text-neon-violet', 'transition-all duration-300')}>
                <FolderOpen size={15} />
                View Projects →
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} className={cn('relative p-6 rounded-2xl text-center', 'bg-white/3 border border-white/8', 'hover:border-neon-violet/30 hover:bg-white/5', 'transition-all duration-300 group overflow-hidden')} whileHover={{ y: -4, scale: 1.02 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/0 to-neon-cyan/0 group-hover:from-neon-violet/5 group-hover:to-neon-cyan/5 transition-all duration-300 rounded-2xl" />
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={cn('font-display font-black text-3xl mb-1', stat.color)}>{stat.value}</div>
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
