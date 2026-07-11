'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Zap, Globe, ChevronDown } from 'lucide-react';
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

function ParticleBackground() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 4,
    color: i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#8B5CF6' : '#EC4899'
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: p.left + '%',
            top: p.top + '%',
            width: p.size + 'px',
            height: p.size + 'px',
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const { text: roleText } = useTypewriter(site.roles, {
    typingSpeed: 70,
    deletingSpeed: 35,
    pauseDuration: 2000
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,229,255,0.1) 0%, transparent 60%), radial-gradient(ellipse at 60% 80%, rgba(236,72,153,0.08) 0%, transparent 60%), linear-gradient(135deg, #050816 0%, #0B1120 50%, #050816 100%)' }} />
      <ParticleBackground />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-neon-violet/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-cyan/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="space-y-6 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-gradient-to-r from-neon-cyan to-transparent" />
                <span className="font-mono text-neon-cyan text-xs tracking-[0.25em] uppercase font-semibold">Welcome to my universe</span>
                <div className="h-px w-10 bg-gradient-to-l from-neon-cyan to-transparent" />
              </div>
              <h1 className="font-display font-black leading-tight">
                <span className="block text-gray-400 text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold mb-1">Hi, I&apos;m</span>
                <span className="block text-white text-[clamp(2.8rem,5.5vw,4.5rem)] leading-none mb-3">{site.name}</span>
                <div className="flex items-center gap-2 min-h-[3rem]">
                  <span className="text-neon-cyan text-[clamp(1.4rem,2.8vw,2.2rem)] font-bold">&lt;</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink text-[clamp(1rem,2.2vw,1.8rem)] font-bold">{roleText}</span>
                  <span className="text-neon-cyan text-[clamp(1.4rem,2.8vw,2.2rem)] font-bold animate-blink">|</span>
                  <span className="text-neon-cyan text-[clamp(1.4rem,2.8vw,2.2rem)] font-bold"> /&gt;</span>
                </div>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-3 text-gray-400 text-[15px] leading-relaxed max-w-lg">
              <p>Passionate full stack developer who thrives on building <span className="text-neon-cyan font-semibold">seamless digital experiences</span> from front to back. Deep expertise in responsive design and scalable backend architecture.</p>
              <p>Specializing in <span className="text-neon-violet font-semibold">MERN stack solutions</span>, custom interactive mechanics, and solving complex architecture challenges with precision and creativity.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span key={tech.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.05 }} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-sm text-gray-300 hover:border-neon-cyan/40 hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all duration-200 cursor-default">
                  <span>{tech.emoji}</span> {tech.name}
                </motion.span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/3 border border-white/8 font-mono text-sm overflow-x-auto max-w-full">
                <span className="text-gray-500 flex-shrink-0">const</span>
                <span className="text-neon-cyan flex-shrink-0">developer</span>
                <span className="text-gray-500 flex-shrink-0">=</span>
                <span className="text-gray-300 flex-shrink-0">&#123;</span>
                <span className="text-neon-pink flex-shrink-0">passion</span>
                <span className="text-gray-500 flex-shrink-0">:</span>
                <span className="text-green-400 flex-shrink-0">&quot;&#8734;&quot;</span>
                <span className="text-gray-300 flex-shrink-0">,</span>
                <span className="text-neon-pink flex-shrink-0">coffee</span>
                <span className="text-gray-500 flex-shrink-0">:</span>
                <span className="text-green-400 flex-shrink-0">&quot;daily&quot;</span>
                <span className="text-gray-300 flex-shrink-0">,</span>
                <span className="text-neon-pink flex-shrink-0">bugs</span>
                <span className="text-gray-500 flex-shrink-0">:</span>
                <span className="text-neon-violet flex-shrink-0">0</span>
                <span className="text-gray-300 flex-shrink-0">&#125;</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="flex flex-wrap items-center rounded-xl overflow-hidden border border-white/8 bg-white/3 divide-x divide-white/8 max-w-fit">
                <span className="flex items-center gap-2 px-4 py-2.5 font-mono text-xs text-green-400"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />Available for hire</span>
                <span className="flex items-center gap-2 px-4 py-2.5 font-mono text-xs text-yellow-400"><Zap size={12} className="flex-shrink-0" /> Responds within 24h</span>
                <span className="flex items-center gap-2 px-4 py-2.5 font-mono text-xs text-neon-cyan"><Globe size={12} className="flex-shrink-0" /> Remote & On-site</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
              <a href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet text-black font-mono font-bold text-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-300">
                <MessageSquare size={16} /> Contact Me
              </a>
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-neon-violet/50 text-white font-mono font-bold text-sm hover:border-neon-violet hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 transition-all duration-300">
                <FileText size={16} /> My Resume
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="relative flex justify-center order-1 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)' }} />

              <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">
                <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ background: 'conic-gradient(from 0deg, #00E5FF 0%, #8B5CF6 25%, #EC4899 50%, #8B5CF6 75%, #00E5FF 100%)', padding: '3px', borderRadius: '50%' }}>
                  <div className="w-full h-full rounded-full bg-[#050816]" />
                </div>

                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <Image
                    src="/avatar.jpg"
                    alt="Robel Yinager"
                    fill
                    className="object-cover object-top rounded-full"
                    priority
                    style={{ borderRadius: '50%' }}
                  />
                </div>

                <div className="absolute inset-[-12px] rounded-full border border-neon-violet/20 animate-spin-slow" style={{ animationDuration: '25s' }}>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(0,229,255,1),0_0_24px_rgba(0,229,255,0.6)]" />
                </div>
                <div className="absolute inset-[-24px] rounded-full border border-neon-pink/10" style={{ animation: 'spin-slow 18s linear infinite reverse' }}>
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-pink shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                </div>
              </div>

              <motion.div className="absolute -top-6 right-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1120]/95 border border-neon-cyan/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="font-mono text-xs text-neon-cyan font-semibold">Open to Work</span>
              </motion.div>

              <motion.div className="absolute top-1/2 -right-2 translate-x-full flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1120]/95 border border-yellow-400/30 backdrop-blur-md shadow-[0_0_12px_rgba(250,204,21,0.15)]" animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                <span className="text-yellow-400 text-sm">⚡</span>
                <span className="font-mono text-xs text-yellow-400 font-semibold">Clean Code</span>
              </motion.div>

              <motion.div className="absolute -bottom-6 right-4 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1120]/95 border border-neon-violet/30 backdrop-blur-md shadow-[0_0_12px_rgba(139,92,246,0.15)]" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                <span className="text-base">🌐</span>
                <span className="font-mono text-xs text-neon-violet font-semibold">MERN Stack</span>
              </motion.div>

              <motion.div className="absolute top-0 left-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1120]/95 border border-neon-pink/30 backdrop-blur-md shadow-[0_0_12px_rgba(236,72,153,0.15)]" animate={{ y: [0, 6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
                <span className="text-neon-pink text-sm">20+</span>
                <span className="font-mono text-xs text-neon-pink font-semibold">Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 hover:text-neon-cyan transition-colors duration-200 z-10" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ChevronDown size={20} />
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">Scroll</span>
      </motion.a>
    </section>
  );
}
