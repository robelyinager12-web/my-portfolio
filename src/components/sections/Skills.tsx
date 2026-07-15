'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  { name: 'React.js', percent: 95, color: '#61DAFB', bg: 'linear-gradient(90deg,#61DAFB,#0ea5e9)' },
  { name: 'Next.js', percent: 90, color: '#ffffff', bg: 'linear-gradient(90deg,#ffffff,#94A3B8)' },
  { name: 'TypeScript', percent: 88, color: '#3178C6', bg: 'linear-gradient(90deg,#3178C6,#60a5fa)' },
  { name: 'Node.js', percent: 93, color: '#68A063', bg: 'linear-gradient(90deg,#68A063,#4ADE80)' },
  { name: 'MongoDB', percent: 91, color: '#4DB33D', bg: 'linear-gradient(90deg,#4DB33D,#22c55e)' },
  { name: 'PostgreSQL', percent: 85, color: '#336791', bg: 'linear-gradient(90deg,#336791,#6366f1)' },
  { name: 'MySQL', percent: 87, color: '#F29111', bg: 'linear-gradient(90deg,#F29111,#f97316)' },
  { name: 'Express.js', percent: 92, color: '#94A3B8', bg: 'linear-gradient(90deg,#94A3B8,#64748B)' },
  { name: 'Three.js', percent: 80, color: '#8B5CF6', bg: 'linear-gradient(90deg,#8B5CF6,#EC4899)' }
];

const careerTimeline = [
  {
    year: '2025',
    gradient: 'linear-gradient(135deg,#00E5FF,#0ea5e9)',
    role: 'Independent Full-Stack Developer',
    company: 'Self-Directed / Real-World Projects',
    period: 'Feb 2024 — Present',
    type: 'Freelance'
  },
  {
    year: '2024',
    gradient: 'linear-gradient(135deg,#8B5CF6,#6366f1)',
    role: 'Full-Stack Developer (Learning)',
    company: 'University of Injibara',
    period: '2022 — Present',
    type: 'Academic'
  },
  {
    year: '2022',
    gradient: 'linear-gradient(135deg,#EC4899,#f43f5e)',
    role: 'Frontend Developer',
    company: 'Self-taught Projects',
    period: '2022',
    type: 'Self-taught'
  }
];

const MonitorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const ServerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>
);

const GearIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const PaletteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

const CloudIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const CubeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const servicesTabData = [
  { Icon: MonitorIcon, title: 'Full Stack Development', desc: 'End-to-end web application development using React, Next.js, Node.js and scalable database architectures.', color: '#00E5FF', lineColor: '#00E5FF' },
  { Icon: ServerIcon, title: 'Frontend Engineering', desc: 'Pixel-perfect, blazing fast UIs built with React, animations, and modern CSS architectures.', color: '#8B5CF6', lineColor: '#8B5CF6' },
  { Icon: GearIcon, title: 'Backend Architecture', desc: 'Scalable Node.js APIs, RESTful services, and complex server-side business logic that performs.', color: '#EC4899', lineColor: '#EC4899' },
  { Icon: DatabaseIcon, title: 'Database Design', desc: 'Efficient MongoDB collections and MySQL schemas optimized for speed and global scale.', color: '#F59E0B', lineColor: '#F59E0B' },
  { Icon: PaletteIcon, title: 'UI/UX Design', desc: 'From wireframe to polished interface — I craft experiences that users love to interact with.', color: '#10B981', lineColor: '#10B981' },
  { Icon: CloudIcon, title: 'Cloud Deployment', desc: 'Production deployments on Vercel, AWS and Google Cloud with CI/CD and Docker containerization.', color: '#3B82F6', lineColor: '#3B82F6' },
  { Icon: CubeIcon, title: '3D Web Experiences', desc: 'Interactive WebGL scenes using Three.js and React Three Fiber for immersive digital experiences.', color: '#F97316', lineColor: '#F97316' }
];

const tabs = [
  { key: 'skills', label: '⚡ SKILLS' },
  { key: 'experience', label: '📋 EXPERIENCE' },
  { key: 'services', label: '🔧 SERVICES' }
];

export function Skills() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="skills" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%,rgba(139,92,246,0.05) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(139,92,246,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#8B5CF6', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>✦ MY PROFILE</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 600, lineHeight: 1.15 }}>
            <span style={{ color: '#ffffff' }}>My Professional </span>
            <span style={{ background: 'linear-gradient(90deg,#00E5FF,#8B5CF6,#EC4899)', backgroundSize: '300% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'gradflow 4s ease infinite' }}>Profile</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{ padding: '10px 24px', borderRadius: '50px', border: activeTab === tab.key ? 'none' : '1px solid rgba(255,255,255,0.1)', fontFamily: 'Inter', fontSize: '13px', fontWeight: activeTab === tab.key ? 600 : 400, cursor: 'pointer', transition: 'all 0.25s', background: activeTab === tab.key ? 'linear-gradient(90deg,#00E5FF,#8B5CF6)' : 'rgba(255,255,255,0.04)', color: activeTab === tab.key ? '#000000' : '#94A3B8', letterSpacing: '0.05em' }}>
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'skills' && (
            <motion.div key="skills" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '12px' }}>
              {skillsData.map((skill, i) => (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} style={{ padding: '20px 24px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', transition: 'all 0.25s' }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = 'rgba(255,255,255,0.06)'; d.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = 'rgba(255,255,255,0.03)'; d.style.transform = 'translateY(0)'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', color: '#ffffff' }}>{skill.name}</span>
                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', color: skill.color }}>{skill.percent}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: skill.percent + '%' }} viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.04, ease: 'easeOut' }} style={{ height: '100%', background: skill.bg, borderRadius: '3px' }} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div key="experience" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <div style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.03)', maxWidth: '760px', margin: '0 auto' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '24px', color: '#ffffff', marginBottom: '6px' }}>Career Timeline</h3>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B', marginBottom: '32px' }}>My journey through the world of software development</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {careerTimeline.map((item, i) => (
                    <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0', borderBottom: i < careerTimeline.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '14px', background: item.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#ffffff' }}>{item.year}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '17px', color: '#ffffff', marginBottom: '2px' }}>{item.role}</h4>
                        <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', margin: 0 }}>{item.company}</p>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <p style={{ fontFamily: 'Inter', fontSize: '12px', color: '#475569', marginBottom: '4px' }}>{item.period}</p>
                        <span style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '50px', background: 'rgba(139,92,246,0.15)', color: '#8B5CF6' }}>{item.type}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div key="services" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
              {servicesTabData.map((s, i) => {
                const Icon = s.Icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -6 }}
                    style={{ padding: '28px 24px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', cursor: 'default', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', overflow: 'hidden' }}
                    onMouseEnter={e => {
                      const d = e.currentTarget as HTMLDivElement;
                      d.style.background = 'rgba(255,255,255,0.06)';
                      d.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
                      const line = d.querySelector('.service-line') as HTMLElement | null;
                      if (line) line.style.width = '60px';
                    }}
                    onMouseLeave={e => {
                      const d = e.currentTarget as HTMLDivElement;
                      d.style.background = 'rgba(255,255,255,0.03)';
                      d.style.boxShadow = 'none';
                      const line = d.querySelector('.service-line') as HTMLElement | null;
                      if (line) line.style.width = '0px';
                    }}
                  >
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: s.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, flexShrink: 0 }}>
                      <Icon />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '17px', color: '#ffffff', marginBottom: '8px' }}>{s.title}</h4>
                      <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                    </div>
                    <div className="service-line" style={{ height: '3px', width: '0px', borderRadius: '2px', background: s.lineColor, transition: 'width 0.35s ease', marginTop: 'auto' }} />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
