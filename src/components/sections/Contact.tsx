'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const channels = [
  { icon: Mail, label: 'EMAIL', value: 'robelyinager12@gmail.com', href: 'mailto:robelyinager12@gmail.com' },
  { icon: Phone, label: 'PHONE', value: '+251 990 004 044', href: 'tel:+251990004044' },
  { icon: MapPin, label: 'LOCATION', value: 'Injibara, Ethiopia 🇪🇹', href: null },
  { icon: Clock, label: 'RESPONSE TIME', value: 'Within 24 hours', href: null }
];

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    };
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch { setStatus('error'); }
  }

  const inp: React.CSSProperties = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '10px', fontFamily: 'Inter', fontSize: '14px',
    color: '#CDD5E0', outline: 'none', transition: 'border-color 0.2s'
  };

  return (
    <section id="contact" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%,rgba(139,92,246,0.05) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(0,229,255,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#00E5FF', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>
            GET IN TOUCH
          </span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '14px' }}>
            <span style={{ color: '#ffffff' }}>Let&apos;s build something </span>
            <span style={{ background: 'linear-gradient(90deg,#8B5CF6,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>extraordinary</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s make it happen.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '20px' }} className="contact-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ borderRadius: '16px', background: 'rgba(11,17,32,0.7)', padding: '36px 40px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '36px' }}>
                <input id="name" name="name" type="text" required placeholder="Full name" style={{ ...inp }} onFocus={e => (e.target as HTMLInputElement).style.borderBottomColor = '#00E5FF'} onBlur={e => (e.target as HTMLInputElement).style.borderBottomColor = 'rgba(255,255,255,0.1)'} />
                <input id="email" name="email" type="email" required placeholder="Email address" style={{ ...inp }} onFocus={e => (e.target as HTMLInputElement).style.borderBottomColor = '#00E5FF'} onBlur={e => (e.target as HTMLInputElement).style.borderBottomColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <div style={{ marginBottom: '36px' }}>
                <textarea id="message" name="message" required rows={5} placeholder="Your message" style={{ ...inp, resize: 'none', display: 'block' }} onFocus={e => (e.target as HTMLTextAreaElement).style.borderBottomColor = '#00E5FF'} onBlur={e => (e.target as HTMLTextAreaElement).style.borderBottomColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <div style={{ marginBottom: status !== 'idle' ? '20px' : '0' }}>
                <button type="submit" disabled={status === 'sending'} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 32px', borderRadius: '50px', border: '1px solid rgba(0,229,255,0.3)', background: 'transparent', color: '#00E5FF', fontFamily: 'Inter', fontSize: '14px', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(0,229,255,0.08)'; b.style.borderColor = 'rgba(0,229,255,0.6)'; b.style.boxShadow = '0 0 18px rgba(0,229,255,0.18)'; }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'transparent'; b.style.borderColor = 'rgba(0,229,255,0.3)'; b.style.boxShadow = 'none'; }}>
                  {status === 'sending' ? <><span style={{ width: '14px', height: '14px', border: '2px solid #00E5FF', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spinSlow 0.8s linear infinite', display: 'inline-block' }} />Sending...</> : <>Send message <Send size={14} /></>}
                </button>
              </div>
              {status === 'success' && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '10px', background: 'rgba(74,222,128,0.08)', fontFamily: 'Inter', fontSize: '13px', color: '#4ADE80' }}><CheckCircle size={14} />Message sent! I will reply within 24 hours.</motion.div>}
              {status === 'error' && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '10px', background: 'rgba(248,113,113,0.08)', fontFamily: 'Inter', fontSize: '13px', color: '#F87171' }}><AlertCircle size={14} />Failed. Email robelyinager12@gmail.com directly.</motion.div>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ borderRadius: '16px', background: 'rgba(11,17,32,0.7)', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '20px', color: '#ffffff', marginBottom: '16px' }}>Direct channels</h3>
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              const inner = (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 10px', borderRadius: '10px', transition: 'background 0.2s', cursor: ch.href ? 'pointer' : 'default' }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0,229,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} style={{ color: '#00E5FF' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Inter', fontSize: '10px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '2px' }}>{ch.label}</p>
                    <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#CDD5E0' }}>{ch.value}</p>
                  </div>
                </div>
              );
              return ch.href ? <a key={i} href={ch.href} style={{ textDecoration: 'none' }}>{inner}</a> : inner;
            })}
            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(0,229,255,0.12)', background: 'rgba(0,229,255,0.04)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px rgba(74,222,128,0.6)', flexShrink: 0, animation: 'pulse2 2s infinite' }} />
                <span style={{ fontFamily: 'Inter', fontSize: '13px', color: '#00E5FF' }}>Available for freelance work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
