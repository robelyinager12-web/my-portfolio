'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';

const projects = [
  { title: 'Hospital Management System', category: 'FULL STACK', desc: 'A comprehensive healthcare platform streamlining patient records, appointments, billing, and hospital operations.', tags: ['Next.js','Node.js','PostgreSQL','Prisma'], stars: 24, forks: 8, views: '3.4K', github: '#', live: '#', accent: '#00E5FF' },
  { title: 'E-Commerce Platform', category: 'FRONTEND', desc: 'A scalable online marketplace with secure authentication, Stripe payment integration, and real-time inventory.', tags: ['React','Express','MongoDB','Stripe'], stars: 18, forks: 5, views: '2.7K', github: '#', live: '#', accent: '#8B5CF6' },
  { title: 'Learning Management System', category: 'UI/UX', desc: 'An educational platform supporting course creation, assessments, progress tracking and instructor dashboards.', tags: ['Next.js','TypeScript','MongoDB','AWS S3'], stars: 11, forks: 3, views: '1.9K', github: '#', live: '#', accent: '#EC4899' },
  { title: 'Instagram Clone', category: 'FULL STACK', desc: 'A fully featured social media platform with real-time messaging, photo sharing and story features.', tags: ['React','Node.js','MongoDB','Socket.io'], stars: 31, forks: 12, views: '4.1K', github: '#', live: '#', accent: '#F59E0B' },
  { title: 'Real-Time Chat App', category: 'WEBRTC', desc: 'A WebRTC-powered video and text chat application with rooms, screen sharing and end-to-end encryption.', tags: ['React','WebRTC','Socket.io','Node.js'], stars: 15, forks: 6, views: '2.2K', github: '#', live: '#', accent: '#10B981' },
  { title: '3D Data Visualizer', category: 'API INTEGRATION', desc: 'An interactive WebGL dashboard mapping live metrics onto a navigable 3D scene using Three.js.', tags: ['Three.js','React','Node.js','MySQL'], stars: 9, forks: 2, views: '1.5K', github: '#', live: '#', accent: '#F97316' }
];

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 0%,rgba(139,92,246,0.06) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(0,229,255,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#00E5FF', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>• PORTFOLIO SHOWCASE</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '12px' }}>
            <span style={{ background: 'linear-gradient(90deg,#EC4899,#8B5CF6,#F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>My Latest </span>
            <span style={{ color: '#ffffff' }}>Work</span>
          </h2>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg,#00E5FF,#EC4899)', borderRadius: '2px', margin: '0 auto 16px' }} />
          <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.6 }}>A curated collection of full-stack applications, UI experiments, and real-time systems built with passion and precision.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', padding: '14px 32px', borderRadius: '50px', background: 'rgba(255,255,255,0.03)', maxWidth: 'fit-content', margin: '0 auto 56px', flexWrap: 'wrap' }}>
          {[['20+','PROJECTS','#00E5FF'],['15+','TECHNOLOGIES','#8B5CF6'],['2+yrs','EXPERIENCE','#EC4899'],['100%','PASSION','#F59E0B']].map(([v,l,c])=>(
            <div key={l as string} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '20px', color: c as string }}>{v}</div>
              <div style={{ fontFamily: 'Inter', fontSize: '10px', color: '#475569', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
          {projects.map((project, i) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} whileHover={{ y: -8 }} onHoverStart={() => setHovered(i)} onHoverEnd={() => setHovered(null)} style={{ position: 'relative', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 0 30px ' + project.accent + '20'; d.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; d.style.background = 'rgba(255,255,255,0.03)'; }}>

              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '0', background: 'linear-gradient(to top,' + project.accent + '12,transparent)', transition: 'height 0.5s ease', zIndex: 0 }}
                ref={el => { if (el) { const parent = el.parentElement; if (parent) { parent.addEventListener('mouseenter', () => { el.style.height = '100%'; }); parent.addEventListener('mouseleave', () => { el.style.height = '0'; }); } } }} />

              <div style={{ position: 'relative', height: '180px', background: 'linear-gradient(135deg,rgba(11,17,32,0.9),rgba(20,10,40,0.9))', overflow: 'hidden', zIndex: 1 }}>
                <svg viewBox="0 0 300 180" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }}>
                  <polygon points="40,20 120,40 90,110 20,90" fill="none" stroke={project.accent} strokeWidth="1" />
                  <polygon points="160,15 260,40 230,130 140,110" fill="none" stroke={project.accent} strokeWidth="0.8" opacity="0.6" />
                  <circle cx="240" cy="140" r="30" fill="none" stroke={project.accent} strokeWidth="0.6" opacity="0.4" />
                </svg>
                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                  <span style={{ padding: '4px 10px', borderRadius: '50px', background: project.accent + '22', fontFamily: 'Inter', fontSize: '10px', fontWeight: 600, color: project.accent, letterSpacing: '0.08em' }}>{project.category}</span>
                </div>
                <div style={{ position: 'absolute', bottom: '10px', left: '14px' }}>
                  <span style={{ fontFamily: 'Inter', fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>// {project.category}</span>
                </div>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'absolute', inset: 0, background: 'rgba(5,8,22,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(0,229,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#00E5FF', transition: 'all 0.2s' }}><Github size={18} /></a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(236,72,153,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#EC4899', transition: 'all 0.2s' }}><ExternalLink size={18} /></a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ padding: '20px', position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'Inter', fontSize: '10px', color: '#475569', letterSpacing: '0.1em', marginBottom: '4px' }}>// {project.category}</div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '17px', color: '#ffffff', marginBottom: '10px', lineHeight: 1.3 }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '10px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Inter', fontSize: '12px', color: '#475569' }}><Star size={11} style={{ color: '#F59E0B' }} />{project.stars}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Inter', fontSize: '12px', color: '#475569' }}><GitFork size={11} style={{ color: '#00E5FF' }} />{project.forks}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Inter', fontSize: '12px', color: '#475569' }}><Eye size={11} style={{ color: '#8B5CF6' }} />{project.views}</span>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', lineHeight: 1.6, marginBottom: '14px' }}>{project.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                  {project.tags.map(tag => <span key={tag} style={{ padding: '3px 10px', borderRadius: '50px', background: 'rgba(255,255,255,0.04)', fontFamily: 'Inter', fontSize: '11px', color: '#64748B' }}>{tag}</span>)}
                </div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(0,229,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#00E5FF', transition: 'all 0.2s' }}><Github size={16} /></a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(236,72,153,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#EC4899', transition: 'all 0.2s' }}><ExternalLink size={16} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
