'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const whyChooseMe = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Performance-first development. Every project is optimized for Core Web Vitals, minimal bundle size, and sub-second load times from day one.', color: '#F59E0B' },
  { icon: '🔒', title: 'Security First', desc: 'JWT auth, input sanitization, rate limiting, CORS hardening — security is baked into every layer of the stack, never bolted on at the end.', color: '#8B5CF6' },
  { icon: '📐', title: 'Clean Architecture', desc: 'Modular, documented, readable code. Built for teams, not just demos. Your future developers will thank you for choosing maintainable structure.', color: '#EC4899' },
  { icon: '🤝', title: 'Transparent Process', desc: 'Weekly updates, staging previews, and open communication throughout. You are never left wondering what is happening with your project.', color: '#F97316' },
  { icon: '🚀', title: 'On-Time Delivery', desc: 'Deadlines are commitments. Milestone-based delivery keeps projects on track — if something changes, you are the first to know.', color: '#00E5FF' },
  { icon: '♾️', title: 'Long-Term Support', desc: 'Post-launch support available for every project. Bug fixes, feature additions, and performance audits — I am here long after go-live.', color: '#3B82F6' }
];

const coreCapabilities = [
  { num: 'I', title: 'Optimized Workflow', desc: 'My development experience is powered by modern tooling — VS Code extensions like Emmet, IntelliCode, and Prettier keep code clean, fast, and maintainable.', cat: 'DevOps', gradient: 'linear-gradient(135deg,#0ea5e9,#6366f1)' },
  { num: 'II', title: 'Integrated Interfaces', desc: 'I create seamless connections between user interfaces and backend systems, enabling smooth, secure data exchange from dynamic form handling to custom API paths.', cat: 'Full Stack', gradient: 'linear-gradient(135deg,#8B5CF6,#EC4899)' },
  { num: 'III', title: 'Client-Centric Delivery', desc: 'Every project is delivered with precision and purpose — on time, completely aligned with your targets, and built to leave a lasting modern impression.', cat: 'Delivery', gradient: 'linear-gradient(135deg,#10b981,#3b82f6)' },
  { num: 'IV', title: 'Developer-Centric', desc: 'Built for uptime and impact: backend systems running on structured code with an emphasis on rock-solid reliability that builds user confidence.', cat: 'Backend', gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
  { num: 'V', title: 'Real-Time Updates', desc: 'I deploy full-stack applications with real-time updates and low latency metrics, ensuring users instantly experience data changes without reload delays.', cat: 'Full Stack', gradient: 'linear-gradient(135deg,#00E5FF,#8B5CF6)' },
  { num: 'VI', title: '24/7 Uptime Layouts', desc: 'I deliver applications optimized for continuous availability, high performance, and reliable server-side asset rendering under heavy networking traffic.', cat: 'DevOps', gradient: 'linear-gradient(135deg,#ec4899,#f97316)' },
  { num: 'VII', title: 'Fully Responsive', desc: 'Fluid layouts built cleanly to scale elegantly across smartphone screens, tablets, and wide high-definition monitors using pure modern CSS logic.', cat: 'Frontend', gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
  { num: 'VIII', title: 'Creative UI/UX Design', desc: 'I design intuitive interfaces with custom gradients, interactive layers, and light-weight vector graphics that elevate user engagement and brand presence.', cat: 'Frontend', gradient: 'linear-gradient(135deg,#f43f5e,#ec4899)' },
  { num: 'IX', title: 'Full-Stack Integration', desc: 'Connecting secure databases, robust server layers, and interactive front-ends into one unified application package designed for high-velocity user scaling.', cat: 'Full Stack', gradient: 'linear-gradient(135deg,#10b981,#00E5FF)' }
];

const filterTabs = ['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps', 'Delivery'];

export function Services() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? coreCapabilities : coreCapabilities.filter(c => c.cat === activeFilter);

  return (
    <section id="services" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 0% 50%,rgba(0,229,255,0.04) 0%,transparent 60%),radial-gradient(ellipse at 100% 50%,rgba(236,72,153,0.04) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(0,229,255,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#00E5FF', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>✦ WHAT I OFFER</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '16px' }}>
            <span style={{ color: '#ffffff' }}>My </span>
            <span style={{ background: 'linear-gradient(90deg,#8B5CF6,#00E5FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Services</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '560px', margin: '0 auto 28px', lineHeight: 1.6 }}>End-to-end digital solutions engineered with precision, creativity, and relentless attention to performance.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '14px 28px', borderRadius: '50px', background: 'rgba(255,255,255,0.03)', maxWidth: 'fit-content', margin: '0 auto' }}>
            {[['⚡','Fast Delivery','#F59E0B'],['🔒','Secure by Default','#8B5CF6'],['📐','Clean Architecture','#00E5FF'],['🤝','Full Ownership Transfer','#EC4899']].map(([icon,text,color])=>(
              <span key={text as string} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter', fontSize: '13px', color: color as string }}><span>{icon}</span>{text as string}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(245,158,11,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#F59E0B', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>🏆 WHY CHOOSE ME</span>
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
            Built Different. <span style={{ color: '#00E5FF' }}>Delivered Better.</span>
          </h3>
          <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>Six commitments I bring to every single project — no exceptions, no excuses.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px', marginBottom: '80px' }}>
          {whyChooseMe.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -6 }} style={{ position: 'relative', padding: '28px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', overflow: 'hidden', cursor: 'default', transition: 'all 0.3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 0 30px ' + item.color + '20'; d.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; d.style.background = 'rgba(255,255,255,0.03)'; }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: item.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px' }}>{item.icon}</div>
              <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '17px', color: '#ffffff', marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B', lineHeight: 1.65, marginBottom: '16px' }}>{item.desc}</p>
              <div style={{ height: '2px', width: '32px', borderRadius: '2px', background: item.color }} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 600, marginBottom: '12px' }}>
            <span style={{ color: '#ffffff' }}>Core </span>
            <span style={{ color: '#00E5FF' }}>Capabilities</span>
          </h3>
          <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '480px', margin: '0 auto 24px' }}>Nine pillars of excellence. Click any card to explore full details.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {filterTabs.map(tab => (
              <button key={tab} onClick={() => setActiveFilter(tab)} style={{ padding: '8px 18px', borderRadius: '50px', border: 'none', fontFamily: 'Inter', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s', background: activeFilter === tab ? 'linear-gradient(90deg,#00E5FF,#8B5CF6)' : 'rgba(255,255,255,0.05)', color: activeFilter === tab ? '#000000' : '#94A3B8', fontWeight: activeFilter === tab ? 600 : 400 }}>
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px' }}>
            {filtered.map((item, i) => (
              <motion.div key={item.num} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -6, scale: 1.02 }} style={{ position: 'relative', padding: '28px', borderRadius: '16px', background: 'rgba(20,14,35,0.8)', overflow: 'hidden', cursor: 'default', transition: 'all 0.35s' }}
                onMouseEnter={e => {
                  const d = e.currentTarget as HTMLDivElement;
                  d.style.background = item.gradient;
                  d.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
                  const btn = d.querySelector('button') as HTMLButtonElement | null;
                  if (btn) { btn.style.background = 'rgba(255,255,255,0.15)'; btn.style.color = '#ffffff'; btn.style.borderColor = 'rgba(255,255,255,0.3)'; }
                  const num = d.querySelector('.cap-num') as HTMLElement | null;
                  if (num) num.style.opacity = '0.5';
                }}
                onMouseLeave={e => {
                  const d = e.currentTarget as HTMLDivElement;
                  d.style.background = 'rgba(20,14,35,0.8)';
                  d.style.boxShadow = 'none';
                  const btn = d.querySelector('button') as HTMLButtonElement | null;
                  if (btn) { btn.style.background = 'transparent'; btn.style.color = '#00E5FF'; btn.style.borderColor = 'rgba(0,229,255,0.2)'; }
                  const num = d.querySelector('.cap-num') as HTMLElement | null;
                  if (num) num.style.opacity = '0.25';
                }}>
                <div className="cap-num" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '40px', color: '#ffffff', opacity: 0.25, marginBottom: '16px', lineHeight: 1, transition: 'opacity 0.3s' }}>{item.num}</div>
                <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '17px', color: '#ffffff', marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: '20px' }}>{item.desc}</p>
                <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '50px', border: '1px solid rgba(0,229,255,0.2)', background: 'transparent', color: '#00E5FF', fontFamily: 'Inter', fontSize: '12px', cursor: 'pointer', transition: 'all 0.25s' }}>
                  Read more →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
