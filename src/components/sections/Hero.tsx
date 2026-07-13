'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { MessageSquare, FileText, Zap, Globe, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
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
  const particles = Array.from({ length: 45 }, (_, i) => ({
    id: i, left: (i * 37 + 10) % 100, top: (i * 53 + 5) % 100,
    size: (i % 3) + 1.5, duration: (i % 3) + 3, delay: (i * 0.2) % 4,
    color: i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#8B5CF6' : '#EC4899'
  }));
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <motion.div key={p.id} style={{ position: 'absolute', borderRadius: '50%', left: p.left + '%', top: p.top + '%', width: p.size + 'px', height: p.size + 'px', background: p.color, boxShadow: '0 0 ' + p.size * 4 + 'px ' + p.color, opacity: 0.45 }} animate={{ y: [0, -22, 0], opacity: [0.2, 0.65, 0.2] }} transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }} />
      ))}
    </div>
  );
}

function ParallaxPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });
  const moveX = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 });
  const moveY = useSpring(useTransform(y, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 });
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1000px', cursor: 'none' }}>
      <div style={{ position: 'absolute', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(139,92,246,0.28) 0%,rgba(236,72,153,0.12) 50%,transparent 70%)' }} />
      <motion.div style={{ rotateX, rotateY, x: moveX, y: moveY, position: 'relative', width: '300px', height: '300px' }}>
        <motion.div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'conic-gradient(from 0deg,#00E5FF 0%,#8B5CF6 25%,#EC4899 50%,#8B5CF6 75%,#00E5FF 100%)', padding: '3px' }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#050816' }} />
        </motion.div>
        <div style={{ position: 'absolute', inset: '3px', borderRadius: '50%', overflow: 'hidden' }}>
          <Image src="/avatar.jpg" alt="Robel Yinager" fill style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: '50%' }} priority />
        </div>
        <motion.div style={{ position: 'absolute', inset: '-14px', borderRadius: '50%', border: '1px solid rgba(139,92,246,0.2)' }} animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}>
          <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 12px 2px rgba(0,229,255,0.8)' }} />
        </motion.div>
      </motion.div>
      <motion.div style={{ position: 'absolute', top: '-24px', right: '8px', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '10px', background: 'rgba(11,17,32,0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(0,229,255,0.2)' }} animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E5FF', animation: 'pulse2 2s infinite' }} />
        <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#00E5FF', fontWeight: 500 }}>Open to Work</span>
      </motion.div>
      <motion.div style={{ position: 'absolute', top: '40%', right: '-8px', transform: 'translateX(100%)', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '10px', background: 'rgba(11,17,32,0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(245,158,11,0.2)' }} animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
        <span style={{ fontSize: '14px' }}>⚡</span>
        <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#F59E0B', fontWeight: 500 }}>Clean Code</span>
      </motion.div>
      <motion.div style={{ position: 'absolute', bottom: '-24px', right: '24px', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '10px', background: 'rgba(11,17,32,0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(139,92,246,0.2)' }} animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
        <span style={{ fontSize: '14px' }}>🌐</span>
        <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#8B5CF6', fontWeight: 500 }}>MERN Stack</span>
      </motion.div>
      <motion.div style={{ position: 'absolute', top: '8px', left: '-8px', transform: 'translateX(-100%)', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '10px', background: 'rgba(11,17,32,0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(236,72,153,0.2)' }} animate={{ y: [0, 6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}>
        <span style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: '#EC4899', fontWeight: 600 }}>20+</span>
        <span style={{ fontFamily: 'Inter', fontSize: '12px', color: '#EC4899', fontWeight: 500 }}>Projects</span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { text: roleText } = useTypewriter(site.roles, { typingSpeed: 70, deletingSpeed: 35, pauseDuration: 2000 });

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 0 48px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%,rgba(139,92,246,0.1) 0%,transparent 55%),radial-gradient(ellipse at 80% 20%,rgba(0,229,255,0.07) 0%,transparent 55%),radial-gradient(ellipse at 60% 80%,rgba(236,72,153,0.05) 0%,transparent 55%),#050816' }} />
      <ParticleBackground />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg,#00E5FF,transparent)' }} />
                <span style={{ fontFamily: 'Inter', color: '#00E5FF', fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Welcome to my universe</span>
                <div style={{ height: '1px', width: '40px', background: 'linear-gradient(270deg,#00E5FF,transparent)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: 'clamp(1.1rem,2vw,1.4rem)', color: '#94A3B8', margin: 0 }}>Hi, I&apos;m</p>
                <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 'clamp(2.6rem,5vw,4.2rem)', color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>{site.name}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minHeight: '2.8rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'Space Grotesk', color: '#00E5FF', fontSize: 'clamp(1.2rem,2.4vw,1.9rem)', fontWeight: 500 }}>&lt;</span>
                  <span style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1rem,2vw,1.6rem)', fontWeight: 500, background: 'linear-gradient(90deg,#00E5FF,#8B5CF6,#EC4899)', backgroundSize: '300% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'gradflow 4s ease infinite' }}>{roleText}</span>
                  <span style={{ fontFamily: 'Space Grotesk', color: '#00E5FF', fontSize: 'clamp(1.2rem,2.4vw,1.9rem)', fontWeight: 400, animation: 'blink 1s step-end infinite' }}>|</span>
                  <span style={{ fontFamily: 'Space Grotesk', color: '#00E5FF', fontSize: 'clamp(1.2rem,2.4vw,1.9rem)', fontWeight: 500 }}>/&gt;</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '480px' }}>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>Passionate full stack developer who thrives on building <span style={{ color: '#00E5FF', fontWeight: 500 }}>seamless digital experiences</span> from front to back. Deep expertise in responsive design and scalable backend architecture.</p>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, margin: 0 }}>Specializing in <span style={{ color: '#8B5CF6', fontWeight: 500 }}>MERN stack solutions</span>, custom interactive mechanics, and solving complex architecture challenges with precision and creativity.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {techStack.map((tech, i) => (
                <motion.span key={tech.name} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.04 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '50px', background: 'rgba(255,255,255,0.04)', fontFamily: 'Inter', fontSize: '13px', color: '#94A3B8', cursor: 'default', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const s = e.currentTarget as HTMLSpanElement; s.style.background = 'rgba(0,229,255,0.06)'; s.style.color = '#00E5FF'; }}
                  onMouseLeave={e => { const s = e.currentTarget as HTMLSpanElement; s.style.background = 'rgba(255,255,255,0.04)'; s.style.color = '#94A3B8'; }}>
                  <span>{tech.emoji}</span> {tech.name}
                </motion.span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '12px 18px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', fontFamily: 'monospace', fontSize: '13px', flexWrap: 'wrap', lineHeight: 1.6 }}>
                <span style={{ color: '#64748B' }}>const</span>
                <span style={{ color: '#00E5FF' }}>developer</span>
                <span style={{ color: '#64748B' }}>=</span>
                <span style={{ color: '#CDD5E0' }}>&#123;</span>
                <span style={{ color: '#EC4899' }}>passion</span><span style={{ color: '#64748B' }}>:</span><span style={{ color: '#4ADE80' }}>&quot;&#8734;&quot;</span>
                <span style={{ color: '#CDD5E0' }}>,</span>
                <span style={{ color: '#EC4899' }}>coffee</span><span style={{ color: '#64748B' }}>:</span><span style={{ color: '#4ADE80' }}>&quot;daily&quot;</span>
                <span style={{ color: '#CDD5E0' }}>,</span>
                <span style={{ color: '#EC4899' }}>bugs</span><span style={{ color: '#64748B' }}>:</span><span style={{ color: '#8B5CF6' }}>0</span>
                <span style={{ color: '#CDD5E0' }}>&#125;</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div style={{ display: 'inline-flex', borderRadius: '12px', overflow: 'hidden', background: 'rgba(255,255,255,0.03)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontFamily: 'Inter', fontSize: '13px', color: '#4ADE80', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', animation: 'pulse2 2s infinite', flexShrink: 0 }} />
                  Available for hire
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontFamily: 'Inter', fontSize: '13px', color: '#F59E0B', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <Zap size={13} /> Responds within 24h
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontFamily: 'Inter', fontSize: '13px', color: '#00E5FF' }}>
                  <Globe size={13} /> Remote & On-site
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '50px', background: 'linear-gradient(90deg,#00E5FF,#8B5CF6)', color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 28px rgba(0,229,255,0.45)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'}>
                <MessageSquare size={16} /> Contact Me
              </a>
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '50px', border: '1.5px solid rgba(139,92,246,0.4)', color: '#ffffff', fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textDecoration: 'none', background: 'transparent', transition: 'all 0.3s' }}
                onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = '#8B5CF6'; a.style.boxShadow = '0 0 20px rgba(139,92,246,0.3)'; }}
                onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = 'rgba(139,92,246,0.4)'; a.style.boxShadow = 'none'; }}>
                <FileText size={16} /> My Resume
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ParallaxPhoto />
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#475569', textDecoration: 'none', zIndex: 10, transition: 'color 0.2s' }}
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF'}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#475569'}>
        <ChevronDown size={20} />
        <span style={{ fontFamily: 'Inter', fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
      </motion.a>
    </section>
  );
}
