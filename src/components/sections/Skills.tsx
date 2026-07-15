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
  { year: '2025', gradient: 'linear-gradient(135deg,#00E5FF,#0ea5e9)', role: 'Independent Full-Stack Developer', company: 'Self-Directed / Real-World Projects', location: 'Injibara, Ethiopia', period: 'Feb 2024 — Present', type: 'Freelance' },
  { year: '2024', gradient: 'linear-gradient(135deg,#8B5CF6,#6366f1)', role: 'Full-Stack Developer (Learning)', company: 'University of Injibara', location: 'Injibara, Ethiopia', period: '2022 — Present', type: 'Academic' },
  { year: '2022', gradient: 'linear-gradient(135deg,#EC4899,#f43f5e)', role: 'Frontend Developer', company: 'Self-taught Projects', location: 'Injibara, Ethiopia', period: '2022', type: 'Self-taught' }
];

const servicesTabData = [
  { title: 'Full Stack Development', desc: 'End-to-end web application development using React, Next.js, Node.js and scalable database architectures.' },
  { title: 'Frontend Engineering', desc: 'Responsive, interactive UIs built for performance and accessibility. Specializing in React, Next.js and Three.js.' },
  { title: 'Backend Development', desc: 'Secure, scalable APIs built with Node.js and Express. Authentication systems and third-party integrations.' },
  { title: 'Database Design', desc: 'Efficient schema design and query optimization across MongoDB, PostgreSQL and MySQL.' },
  { title: 'Cloud Deployment', desc: 'Production deployments on Vercel, AWS and Google Cloud with CI/CD and Docker containerization.' },
  { title: '3D Web Experiences', desc: 'Interactive WebGL scenes using Three.js and React Three Fiber for immersive digital experiences.' }
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
                        <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', marginBottom: '0' }}>{item.company}</p>
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
            <motion.div key="services" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '14px' }}>
              {servicesTabData.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} whileHover={{ y: -5 }} style={{ padding: '24px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', cursor: 'default', transition: 'all 0.25s' }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = 'rgba(255,255,255,0.06)'; d.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)'; }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = 'rgba(255,255,255,0.03)'; d.style.boxShadow = 'none'; }}>
                  <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: '#ffffff', marginBottom: '10px' }}>{s.title}</h4>
                  <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
