'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      form.reset();
    } catch { setStatus('error'); }
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    paddingBottom: '12px',
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    color: '#E2E8F0',
    outline: 'none',
    transition: 'border-color 0.2s'
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon-violet/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">
            GET IN TOUCH
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,5vw,3.8rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: '16px' }}>
            <span style={{ color: '#ffffff' }}>Let&apos;s build something </span>
            <span style={{ background: 'linear-gradient(90deg, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              extraordinary
            </span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '600px', margin: '0 auto', fontWeight: 400 }}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-5">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ borderRadius: '16px', background: 'rgba(11,17,32,0.85)', border: '1px solid rgba(255,255,255,0.07)', padding: '48px' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' }}>
                <div>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Full name"
                    style={{ ...inputStyle }}
                    onFocus={e => (e.target.style.borderBottomColor = '#00E5FF')}
                    onBlur={e => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
                <div>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="Email address"
                    style={{ ...inputStyle }}
                    onFocus={e => (e.target.style.borderBottomColor = '#00E5FF')}
                    onBlur={e => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.12)')}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '48px' }}>
                <textarea
                  id="message" name="message" required rows={6}
                  placeholder="Your message"
                  style={{ ...inputStyle, resize: 'none', display: 'block' }}
                  onFocus={e => (e.target.style.borderBottomColor = '#00E5FF')}
                  onBlur={e => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.12)')}
                />
              </div>

              <div style={{ marginBottom: status !== 'idle' ? '24px' : '0' }}>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 36px',
                    borderRadius: '50px',
                    border: '1px solid rgba(0,229,255,0.35)',
                    background: 'transparent',
                    color: '#00E5FF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,229,255,0.08)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,229,255,0.6)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(0,229,255,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,229,255,0.35)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <span style={{ width: '16px', height: '16px', border: '2px solid #00E5FF', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', display: 'inline-block' }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={14} />
                    </>
                  )}
                </motion.button>
              </div>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 18px', borderRadius: '12px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#4ADE80' }}>
                  <CheckCircle size={15} />
                  Message sent! I will reply within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 18px', borderRadius: '12px', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#F87171' }}>
                  <AlertCircle size={15} />
                  Failed. Email robelyinager12@gmail.com directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ borderRadius: '16px', background: 'rgba(11,17,32,0.85)', border: '1px solid rgba(255,255,255,0.07)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '20px', color: '#ffffff', marginBottom: '20px' }}>
              Direct channels
            </h3>

            {channels.map((ch, i) => {
              const Icon = ch.icon;
              const inner = (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 12px', borderRadius: '12px', transition: 'background 0.2s', cursor: ch.href ? 'pointer' : 'default' }} onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)'; }} onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} style={{ color: '#00E5FF' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>{ch.label}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#E2E8F0' }}>{ch.value}</p>
                  </div>
                </div>
              );
              return ch.href ? <a key={i} href={ch.href} style={{ textDecoration: 'none' }}>{inner}</a> : <div key={i}>{inner}</div>;
            })}

            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(0,229,255,0.15)', background: 'rgba(0,229,255,0.04)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px rgba(74,222,128,0.6)', flexShrink: 0, animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#00E5FF' }}>Available for freelance work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
