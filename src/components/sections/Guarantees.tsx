'use client';

import { motion } from 'framer-motion';

const guaranteeItems = [
  { emoji: '🛡️', title: 'Satisfaction Guaranteed', desc: 'If the delivered work does not match the agreed scope and quality, I will revise it at no extra cost until it genuinely meets your expectations.', bg: 'rgba(15,40,30,0.8)', accent: '#10B981' },
  { emoji: '📅', title: 'Deadline Commitment', desc: 'Every project comes with a clear written timeline agreed upon before a single line of code is written. I honour every deadline.', bg: 'rgba(30,15,50,0.8)', accent: '#8B5CF6' },
  { emoji: '🔄', title: 'Continuous Revisions', desc: 'Within the agreed project scope, revisions are a natural part of the process, not an extra charge. I iterate with you until every detail matches your vision.', bg: 'rgba(40,15,30,0.8)', accent: '#EC4899' },
  { emoji: '🔐', title: 'Your Code, Your Property', desc: 'Full intellectual property ownership transfers to you upon project completion — no strings attached, no licensing traps, no vendor lock-in.', bg: 'rgba(35,30,10,0.8)', accent: '#F59E0B' },
  { emoji: '📞', title: 'Always Reachable', desc: 'Questions are answered promptly and progress is communicated every week. No radio silence, no vague updates, ever.', bg: 'rgba(35,20,5,0.8)', accent: '#F97316' },
  { emoji: '🚀', title: 'Ongoing Post-Launch Care', desc: 'Every project includes a dedicated post-launch period where I actively monitor performance and make quick adjustments to keep everything running smoothly.', bg: 'rgba(15,20,45,0.8)', accent: '#3B82F6' }
];

export function Guarantees() {
  return (
    <section id="guarantees" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%,rgba(139,92,246,0.07) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(139,92,246,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#8B5CF6', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>🛡️ MY GUARANTEES</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '16px' }}>
            <span style={{ color: '#ffffff' }}>What You Can </span>
            <span style={{ color: '#00E5FF' }}>Always </span>
            <span style={{ color: '#8B5CF6' }}>Expect</span>
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '16px', color: '#64748B', maxWidth: '540px', margin: '0 auto', lineHeight: 1.6 }}>
            Every project I take on comes with these non-negotiable commitments — backed by action, not just words.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px' }}>
          {guaranteeItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6, scale: 1.01 }}
              style={{ padding: '32px', borderRadius: '16px', background: item.bg, cursor: 'default', transition: 'all 0.3s' }}
              onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = '0 8px 40px ' + item.accent + '25'; }}
              onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: item.accent + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px' }}>
                {item.emoji}
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '18px', color: '#ffffff', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#94A3B8', lineHeight: 1.7 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
