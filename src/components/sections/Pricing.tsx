'use client';

import { motion } from 'framer-motion';
import { Check, X, Zap, Star, Building } from 'lucide-react';

const plans = [
  {
    tier: 'STARTER',
    TierIcon: Zap,
    tierColor: '#00E5FF',
    name: 'Light Investment',
    nameColor: '#00E5FF',
    desc: 'Ideal for individuals and small businesses who need a clean, professional online presence without a large upfront commitment.',
    bg: 'rgba(11,17,32,0.8)',
    popular: false,
    features: [
      { label: 'Responsive Landing Page', included: true },
      { label: 'UI/UX Design', included: true },
      { label: 'Contact Form', included: true },
      { label: 'Backend API', included: false },
      { label: 'Database Integration', included: false },
      { label: 'Auth System', included: false },
      { label: 'Ongoing Support Period', included: true }
    ],
    btnColor: 'rgba(255,255,255,0.08)',
    btnBorder: 'rgba(255,255,255,0.15)',
    btnText: '#ffffff'
  },
  {
    tier: 'PROFESSIONAL',
    TierIcon: Star,
    tierColor: '#8B5CF6',
    name: 'Moderate Investment',
    nameColor: '#8B5CF6',
    desc: 'Best for growing businesses that need a full-stack product with secure authentication, a database, and a polished admin interface.',
    bg: 'linear-gradient(135deg,rgba(30,15,60,0.95),rgba(20,10,50,0.95))',
    popular: true,
    features: [
      { label: 'Full React Frontend', included: true },
      { label: 'Node.js Backend + API', included: true },
      { label: 'MongoDB / MySQL DB', included: true },
      { label: 'Auth + JWT Security', included: true },
      { label: 'Admin Dashboard', included: true },
      { label: 'Real Time Features', included: false },
      { label: 'Extended Support Period', included: true }
    ],
    btnColor: 'linear-gradient(90deg,#8B5CF6,#6366f1)',
    btnBorder: 'transparent',
    btnText: '#ffffff'
  },
  {
    tier: 'ENTERPRISE',
    TierIcon: Building,
    tierColor: '#EC4899',
    name: 'Premium Investment',
    nameColor: '#EC4899',
    desc: 'For organisations requiring a complete, scalable, enterprise-grade system with real-time features, CI/CD, security auditing, and long-term dedicated support.',
    bg: 'rgba(11,17,32,0.8)',
    popular: false,
    features: [
      { label: 'Full-Stack Architecture', included: true },
      { label: 'Real-Time + WebSockets', included: true },
      { label: 'Custom CMS / Dashboard', included: true },
      { label: 'Performance Optimization', included: true },
      { label: 'CI/CD Pipeline Setup', included: true },
      { label: 'Security Audit', included: true },
      { label: 'Long-Term Dedicated Support', included: true }
    ],
    btnColor: 'rgba(255,255,255,0.08)',
    btnBorder: 'rgba(236,72,153,0.4)',
    btnText: '#EC4899'
  }
];

export function Pricing() {
  return (
    <section id="pricing" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%,rgba(139,92,246,0.08) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '16px' }}>
            <span style={{ color: '#ffffff' }}>Transparent </span>
            <span style={{ background: 'linear-gradient(90deg,#8B5CF6,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Pricing</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            No hidden fees. Investment scales with scope and complexity.
            <span style={{ color: '#00E5FF' }}> Reach out for a tailored quote.</span>
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', alignItems: 'start' }}>
          {plans.map((plan, i) => {
            const Icon = plan.TierIcon;
            return (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                style={{ position: 'relative', borderRadius: '20px', padding: '32px 28px', background: plan.bg, transition: 'all 0.3s', cursor: 'default' }}
              >
                {plan.popular && (
                  <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 18px', borderRadius: '50px', background: 'linear-gradient(90deg,#00E5FF,#8B5CF6)', fontFamily: 'Inter', fontWeight: 700, fontSize: '12px', color: '#000000', whiteSpace: 'nowrap' }}>
                    ⭐ Most Popular
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: plan.tierColor + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} style={{ color: plan.tierColor }} />
                  </div>
                  <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', color: plan.tierColor, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{plan.tier}</span>
                </div>

                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: plan.nameColor, marginBottom: '14px', lineHeight: 1.2 }}>{plan.name}</h3>

                <p style={{ fontFamily: 'Inter', fontSize: '13px', color: '#64748B', lineHeight: 1.65, marginBottom: '28px' }}>{plan.desc}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {plan.features.map(feature => (
                    <div key={feature.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: feature.included ? plan.tierColor + '20' : 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {feature.included
                          ? <Check size={13} style={{ color: plan.tierColor }} />
                          : <X size={11} style={{ color: '#475569' }} />
                        }
                      </div>
                      <span style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: feature.included ? 500 : 400, color: feature.included ? '#CDD5E0' : '#475569', textDecoration: feature.included ? 'none' : 'line-through' }}>{feature.label}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 24px', borderRadius: '50px', border: '1.5px solid ' + plan.btnBorder, background: plan.btnColor, fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', color: plan.btnText, textDecoration: 'none', transition: 'all 0.25s', cursor: 'pointer' }}
                  onMouseEnter={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.opacity = '0.85'; a.style.transform = 'scale(1.02)'; }}
                  onMouseLeave={e => { const a = e.currentTarget as HTMLAnchorElement; a.style.opacity = '1'; a.style.transform = 'scale(1)'; }}>
                  Get Started →
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#475569', marginBottom: '8px' }}>Not sure which plan fits? Let us discuss your project.</p>
          <a href="#contact" style={{ fontFamily: 'Inter', fontSize: '14px', color: '#00E5FF', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#8B5CF6'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#00E5FF'}>
            Get a tailored quote →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
