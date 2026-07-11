'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Download, FolderOpen, Globe, Zap, MapPin } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const stats = [
  { icon: '🚀', value: '20+', label: 'PROJECTS DONE', color: 'text-neon-cyan' },
  { icon: '😊', value: '15+', label: 'HAPPY CLIENTS', color: 'text-neon-violet' },
  { icon: '⚡', value: '2+', label: 'YEARS EXP', color: 'text-neon-pink' },
  { icon: '🔧', value: '20+', label: 'TECH SKILLS', color: 'text-yellow-400' }
];

function ParallaxAboutPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 });
  const moveX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });
  const moveY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() { x.set(0); y.set(0); }

  return (
    <div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave} className="relative flex justify-center lg:justify-start cursor-none" style={{ perspective: '1000px' }}>
      <motion.div style={{ rotateX, rotateY, x: moveX, y: moveY }} className="relative">
        <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(circle at center, rgba(139,92,246,0.35) 0%, rgba(236,72,153,0.15) 50%, transparent 70%)', transform: 'scale(1.15)', filter: 'blur(18px)' }} />

        <div className="relative w-[300px] md:w-[340px] rounded-2xl overflow-hidden border border-neon-violet/30 shadow-[0_0_40px_rgba(139,92,246,0.2)]">
          <div className="aspect-[3/4] relative">
            <Image src="/avatar.jpg" alt="Robel Yinager" fill className="object-cover object-top" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,8,22,0.75) 0%, rgba(5,8,22,0.15) 40%, transparent 70%)' }} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center justify-center gap-2 bg-[#050816]/90 backdrop-blur-md border border-neon-cyan/20 rounded-xl py-2.5 px-4">
              <span className="text-neon-cyan text-sm">✦</span>
              <span className="font-mono font-medium text-white text-sm">Full Stack Developer</span>
            </div>
          </div>
        </div>

        <motion.div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-neon-violet/30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
        </motion.div>
        <motion.div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full border border-neon-pink/20" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-neon-pink shadow-[0_0_6px_rgba(236,72,153,0.8)]" />
        </motion.div>

        <motion.div className="absolute -left-6 top-1/4 px-3 py-2 rounded-xl bg-[#0B1120]/95 border border-neon-cyan/30 backdrop-blur-sm shadow-[0_0_12px_rgba(0,229,255,0.1)]" animate={{ x: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <p className="font-mono text-xs text-neon-cyan font-medium">2+ yrs</p>
          <p className="font-mono text-[10px] text-gray-500">experience</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.1) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,229,255,0.07) 0%, transparent 60%), linear-gradient(180deg, #050816 0%, #0a0f1e 50%, #050816 100%)' }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div key={i} className="absolute rounded-full" style={{ left: (i * 37 + 10) % 100 + '%', top: (i * 53 + 5) % 100 + '%', width: (i % 3 + 1) * 2 + 'px', height: (i % 3 + 1) * 2 + 'px', background: i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#8B5CF6' : '#EC4899', opacity: 0.3 }} animate={{ y: [0, -18, 0], opacity: [0.15, 0.5, 0.15] }} transition={{ duration: 3 + i % 3, delay: i * 0.18, repeat: Infinity, ease: 'easeInOut' }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">✦ PORTFOLIO 2026</span>
          <h2 className="font-display font-bold text-[clamp(3rem,8vw,6rem)] leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-violet to-neon-cyan" style={{ backgroundSize: '300% auto', animation: 'gradflow 4s ease infinite' }}>About</span>
            <span className="text-white"> Me</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">Crafting the web with passion, precision, and a relentless pursuit of excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <ParallaxAboutPhoto />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <div>
              <h3 className="font-display font-bold text-3xl text-white mb-1">Robel Yinager</h3>
              <p className="text-neon-cyan font-mono text-sm mb-5">Full-Stack Developer & Software Engineer</p>
              <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed">
                <p>Creative Full-Stack Web Developer who turns ideas into seamless digital experiences — crafting intuitive frontends with <span className="text-white font-medium">React/Next.js</span> and robust backends with Node.js and PostgreSQL. Curious, self-driven, and always learning.</p>
                <p>Currently pursuing <span className="text-neon-violet font-medium">B.Sc. Software Engineering</span> at University of Injibara, Ethiopia. Building real-world full-stack applications using modern tech stacks.</p>
                <p>Specializing in <span className="text-neon-pink font-medium">MERN stack solutions</span>, RESTful APIs, database design, and scalable cloud deployments.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/3 border border-white/8"><MapPin size={13} className="text-neon-pink flex-shrink-0" /><span className="font-mono text-xs text-gray-300">Injibara, Ethiopia 🇪🇹</span></div>
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/3 border border-white/8"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" /><span className="font-mono text-xs text-green-400">Available for work</span></div>
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/3 border border-white/8"><Zap size={13} className="text-yellow-400 flex-shrink-0" /><span className="font-mono text-xs text-gray-300">Responds within 24h</span></div>
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/3 border border-white/8"><Globe size={13} className="text-neon-violet flex-shrink-0" /><span className="font-mono text-xs text-gray-300">Remote & On-site</span></div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet text-black font-mono font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 transition-all duration-300"><Download size={15} /> Download CV</a>
              <a href="#portfolio" className="flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-white/20 text-white font-mono font-semibold text-sm hover:border-neon-violet/60 hover:text-neon-violet transition-all duration-300"><FolderOpen size={15} /> View Projects →</a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} className="relative p-8 rounded-2xl text-center bg-white/3 border border-white/8 hover:border-neon-violet/30 hover:bg-white/5 transition-all duration-300 group overflow-hidden cursor-default" whileHover={{ y: -6, scale: 1.02 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/0 to-neon-cyan/0 group-hover:from-neon-violet/8 group-hover:to-neon-cyan/8 transition-all duration-500 rounded-2xl" />
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className={cn('font-display font-bold text-4xl mb-2', stat.color)}>{stat.value}</div>
              <div className="font-mono text-[11px] text-gray-500 tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
