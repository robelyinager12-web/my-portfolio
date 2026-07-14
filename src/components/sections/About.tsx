'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Download, FolderOpen, Globe, Zap, MapPin } from 'lucide-react';
import { useRef } from 'react';

const stats = [
  { emoji: '🚀', value: '20+', label: 'PROJECTS DONE', color: '#00E5FF' },
  { emoji: '😊', value: '15+', label: 'HAPPY CLIENTS', color: '#8B5CF6' },
  { emoji: '⚡', value: '2+', label: 'YEARS EXP', color: '#EC4899' },
  { emoji: '🔧', value: '20+', label: 'TECH SKILLS', color: '#F59E0B' }
];

function ParallaxPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 });
  const moveX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });
  const moveY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ position: 'relative', display: 'flex', justifyContent: 'center', perspective: '1000px', cursor: 'none' }}>
      <motion.div style={{ rotateX, rotateY, x: moveX, y: moveY, position: 'relative', width: '300px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle,rgba(139,92,246,0.35) 0%,rgba(236,72,153,0.15) 50%,transparent 70%)', transform: 'scale(1.2)', filter: 'blur(20px)', borderRadius: '16px' }} />
        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', background: 'linear-gradient(135deg,rgba(0,229,255,0.05),rgba(139,92,246,0.1))' }}>
          <Image src="/avatar.jpg" alt="Robel Yinager" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(5,8,22,0.75) 0%,transparent 60%)' }} />
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'rgba(5,8,22,0.92)', backdropFilter: 'blur(12px)', borderRadius: '12px', padding: '10px 16px', border: '1px solid rgba(0,229,255,0.15)' }}>
            <span style={{ color: '#00E5FF', fontSize: '14px' }}>✦</span>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, color: '#ffffff', fontSize: '14px' }}>Full Stack Developer</span>
          </div>
        </div>
        <motion.div style={{ position: 'absolute', top: '-18px', left: '-18px', padding: '8px 14px', borderRadius: '10px', background: 'rgba(11,17,32,0.95)', backdropFilter: 'blur(8px)', border: '1px solid rgba(0,229,255,0.15)' }} animate={{ x: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <p style={{ fontFamily: 'Space Grotesk', fontSize: '13px', color: '#00E5FF', fontWeight: 600, margin: 0 }}>2+ yrs</p>
          <p style={{ fontFamily: 'Inter', fontSize: '10px', color: '#64748B', margin: 0 }}>experience</p>
        </motion.div>
        <motion.div style={{ position: 'absolute', top: '-14px', right: '-14px', width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg,#00E5FF,#8B5CF6)' }} animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%,rgba(139,92,246,0.07) 0%,transparent 60%),radial-gradient(ellipse at 20% 80%,rgba(0,229,255,0.05) 0%,transparent 60%)', pointerEvents: 'none' }} />
      {Array.from({ length: 18 }, (_, i) => (
        <div key={i} className="particle" style={{ left: (i * 41 + 8) % 100 + '%', top: (i * 59 + 6) % 100 + '%', width: (i % 2 + 1) * 2 + 'px', height: (i % 2 + 1) * 2 + 'px', background: i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#8B5CF6' : '#EC4899', opacity: 0.22, animationDelay: i * 0.25 + 's' }} />
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(0,229,255,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#00E5FF', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>✦ PORTFOLIO 2026</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(3rem,8vw,5.5rem)', fontWeight: 600, lineHeight: 1.05, marginBottom: '16px' }}>
            <span style={{ background: 'linear-gradient(90deg,#EC4899,#8B5CF6,#00E5FF)', backgroundSize: '300% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'gradflow 4s ease infinite' }}>About</span>
            <span style={{ color: '#ffffff' }}> Me</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>Crafting the web with passion, precision, and a relentless pursuit of excellence.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '64px', alignItems: 'start', marginBottom: '80px' }}>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <ParallaxPhoto />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '22px', paddingTop: '12px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#00E5FF', '#8B5CF6', '#EC4899'].map(c => <span key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, animation: 'pulse2 2s infinite' }} />)}
            </div>
            <div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '28px', color: '#ffffff', marginBottom: '4px' }}>Robel Yinager</h3>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#00E5FF', marginBottom: '22px', fontWeight: 500 }}>Full-Stack Developer & Software Engineer</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: '#94A3B8', fontSize: '15px', lineHeight: '1.72' }}>
                <p style={{ margin: 0 }}>Creative Full-Stack Web Developer who turns ideas into seamless digital experiences — crafting intuitive frontends with <strong style={{ color: '#ffffff', fontWeight: 500 }}>React/Next.js</strong> and robust backends with Node.js and PostgreSQL. Curious, self-driven, and always learning.</p>
                <p style={{ margin: 0 }}>Currently pursuing <strong style={{ color: '#8B5CF6', fontWeight: 500 }}>B.Sc. Software Engineering</strong> at University of Injibara, Ethiopia, while building real-world full-stack applications using modern tech stacks.</p>
                <p style={{ margin: 0 }}>Specializing in <strong style={{ color: '#EC4899', fontWeight: 500 }}>MERN stack solutions</strong>, RESTful APIs, database design, and scalable cloud deployments.</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { icon: '📍', text: 'Injibara, Ethiopia 🇪🇹', c: '#EC4899' },
                { icon: '🟢', text: 'Available for work', c: '#4ADE80' },
                { icon: '⚡', text: 'Responds within 24h', c: '#F59E0B' },
                { icon: '🌐', text: 'Remote & On-site', c: '#8B5CF6' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)' }}>
                  <span style={{ fontSize: '13px' }}>{item.icon}</span>
                  <span style={{ fontFamily: 'Inter', fontSize: '12px', color: item.c }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '4px' }}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '50px', background: 'linear-gradient(90deg,#00E5FF,#8B5CF6)', color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 25px rgba(0,229,255,0.4)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'}>
                <Download size={15} /> Download CV
              </a>
              <a href="#portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '50px', border: '1.5px solid rgba(255,255,255,0.15)', color: '#ffffff', fontFamily: 'Inter', fontWeight: 500, fontSize: '14px', textDecoration: 'none', transition: 'all 0.3s', background: 'transparent' }}
                onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = 'rgba(139,92,246,0.5)'; a.style.color = '#8B5CF6'; }}
                onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.borderColor = 'rgba(255,255,255,0.15)'; a.style.color = '#ffffff'; }}>
                <FolderOpen size={15} /> View Projects →
              </a>
            </div>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6, scale: 1.03 }} style={{ padding: '36px 20px', borderRadius: '16px', textAlign: 'center', background: 'rgba(255,255,255,0.03)', cursor: 'default', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = 'rgba(255,255,255,0.06)'; d.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = 'rgba(255,255,255,0.03)'; d.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: '44px', marginBottom: '16px', lineHeight: 1 }}>{s.emoji}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '40px', color: s.color, marginBottom: '8px', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'Inter', fontSize: '11px', color: '#475569', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
