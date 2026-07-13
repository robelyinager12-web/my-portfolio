'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
  { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope and complexity. A simple landing page takes 3-5 days, a full-stack web app typically takes 2-6 weeks, and enterprise-level systems can take 2-4 months. I always provide a detailed timeline before starting any project.' },
  { q: 'Do you offer post-launch maintenance?', a: 'Yes, absolutely. Every project comes with a post-launch support period. After that, I offer flexible monthly maintenance retainers for bug fixes, updates, and feature additions.' },
  { q: 'Can you work with an existing codebase?', a: 'Definitely. I am experienced in auditing, refactoring, and extending existing codebases. Whether it is a legacy system that needs modernizing or a half-built project that needs completing, I can jump in and contribute effectively.' },
  { q: 'What technologies do you specialize in?', a: 'My core stack is the MERN stack — MongoDB, Express, React, and Node.js — plus Next.js, TypeScript, PostgreSQL, MySQL, Three.js, Tailwind CSS, and various DevOps tools. I choose the right technology for each project.' },
  { q: 'How do you handle revisions and feedback?', a: 'I follow a milestone-based approach where feedback is collected at each stage before moving to the next. Within the agreed project scope, revisions are a natural part of the process at no extra charge.' },
  { q: 'Do you sign NDAs or contracts?', a: 'Yes. I am happy to sign NDAs and always work with a clear written contract that outlines scope, timeline, payment terms, and intellectual property rights. Your code and business logic are always protected.' },
  { q: 'Do you work remotely or on-site?', a: 'I work primarily remote and am comfortable with async communication across different time zones. For clients in Ethiopia or nearby, I am also open to on-site collaboration when needed.' },
  { q: 'How do I get started with a project?', a: 'Simply reach out via the contact form or email me directly at robelyinager12@gmail.com. I will schedule a free discovery call to understand your requirements, then provide a detailed proposal and quote within 24 hours.' }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 0% 50%,rgba(0,229,255,0.04) 0%,transparent 60%),radial-gradient(ellipse at 100% 50%,rgba(139,92,246,0.04) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '64px', alignItems: 'start' }}>

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: 'sticky', top: '100px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '50px', background: 'rgba(0,229,255,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#00E5FF', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '24px' }}>❓ FAQS</span>
            <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 600, lineHeight: 1.1, marginBottom: '16px' }}>
              <span style={{ color: '#ffffff' }}>Common </span>
              <br />
              <span style={{ background: 'linear-gradient(180deg,#8B5CF6,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Questions</span>
            </h2>
            <p style={{ fontFamily: 'Inter', fontSize: '15px', color: '#64748B', lineHeight: 1.65, marginBottom: '28px' }}>Everything you need to know before we start building together.</p>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', borderRadius: '50px', background: 'linear-gradient(90deg,#00E5FF,#8B5CF6)', color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 25px rgba(0,229,255,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'}>
              <MessageCircle size={16} /> Ask Me Anything →
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '22px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontFamily: 'Inter', fontWeight: open === i ? 500 : 400, fontSize: '15px', color: open === i ? '#00E5FF' : '#CDD5E0', transition: 'color 0.2s', lineHeight: 1.4 }}>{faq.q}</span>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: open === i ? 'rgba(0,229,255,0.12)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s', color: open === i ? '#00E5FF' : '#64748B' }}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
                      <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#64748B', lineHeight: 1.7, paddingBottom: '20px' }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
