'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site, socialLinks } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Status = 'idle' | 'sending' | 'success' | 'error';

const socialIcons: Record<string, React.ComponentType<{size?: number; className?: string}>> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: Mail,
  telegram: Mail
};

const socialAccents: Record<string, string> = {
  github: 'hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-neon-cyan',
  linkedin: 'hover:border-neon-violet/40 hover:text-neon-violet hover:shadow-neon-violet',
  email: 'hover:border-neon-pink/40 hover:text-neon-pink hover:shadow-neon-pink',
  twitter: 'hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-neon-cyan',
  telegram: 'hover:border-neon-violet/40 hover:text-neon-violet hover:shadow-neon-violet'
};

const inputClass = cn(
  'w-full px-4 py-3 rounded-xl font-mono text-sm',
  'bg-glass-bg border border-glass-border',
  'text-text-primary placeholder:text-text-muted',
  'focus:outline-none focus:border-neon-violet/60 focus:shadow-neon-violet',
  'hover:border-glass-border-strong',
  'transition-all duration-200'
);

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
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
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/contact" title="Lets Build Something" description="Open to full-stack roles freelance projects and collaborations" align="center" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <Reveal direction="left" delay={0.1} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-text-primary">Get in touch</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  I am currently available for freelance work and open to full-time opportunities.
                  Whether you have a project in mind or just want to say hello, my inbox is always open.
                </p>
              </div>
              <div className="space-y-4">
                <div className={cn('flex items-center gap-3 p-4 rounded-xl', 'bg-glass-bg border border-glass-border')}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-neon-cyan/10 border border-neon-cyan/20">
                    <Mail size={16} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted">email</p>
                    <a href={'mailto:' + site.email} className="font-mono text-sm text-neon-cyan hover:underline">{site.email}</a>
                  </div>
                </div>
                <div className={cn('flex items-center gap-3 p-4 rounded-xl', 'bg-glass-bg border border-glass-border')}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-neon-violet/10 border border-neon-violet/20">
                    <MapPin size={16} className="text-neon-violet" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted">location</p>
                    <p className="font-mono text-sm text-neon-violet">{site.location} {site.locationFlag}</p>
                  </div>
                </div>
                <div className={cn('flex items-center gap-3 p-4 rounded-xl', 'bg-glass-bg border border-glass-border')}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-neon-pink/10 border border-neon-pink/20">
                    <Clock size={16} className="text-neon-pink" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted">availability</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <p className="font-mono text-sm text-green-400">available for work</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-xs text-neon-cyan tracking-widest uppercase">find me on</p>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.icon];
                    return (
                      <a key={link.label} href={link.href} target={link.label !== 'email' ? '_blank' : undefined} rel="noopener noreferrer" className={cn('flex items-center gap-3 p-3 rounded-xl', 'bg-glass-bg border border-glass-border', 'text-text-secondary font-mono text-sm', 'transition-all duration-200', socialAccents[link.icon])}>
                        <Icon size={15} />
                        {link.handle}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2} className="lg:col-span-3">
            <motion.div className={cn('p-8 rounded-2xl', 'bg-glass-bg border border-glass-border backdrop-blur-glass', 'hover:border-neon-violet/30', 'transition-all duration-300')} whileHover={{ boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}>
              <h3 className="font-display font-bold text-xl text-text-primary mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-text-muted mb-2">your name</label>
                    <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-text-muted mb-2">your email</label>
                    <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block font-mono text-xs text-text-muted mb-2">subject</label>
                  <input id="subject" name="subject" type="text" required placeholder="Project enquiry or job opportunity" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-text-muted mb-2">message</label>
                  <textarea id="message" name="message" required placeholder="Tell me about your project or role..." rows={5} className={cn(inputClass, 'resize-none')} />
                </div>
                <motion.button type="submit" disabled={status === 'sending'} className={cn('w-full flex items-center justify-center gap-2 py-3.5 rounded-xl', 'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink', 'text-bg-primary font-mono font-semibold text-sm', 'hover:shadow-neon-violet transition-all duration-300', 'disabled:opacity-60 disabled:cursor-not-allowed')} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg-primary border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={cn('flex items-center gap-2 p-4 rounded-xl', 'bg-green-400/10 border border-green-400/30', 'font-mono text-sm text-green-400')}>
                    <CheckCircle size={16} />
                    Message sent successfully. I will reply soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={cn('flex items-center gap-2 p-4 rounded-xl', 'bg-red-400/10 border border-red-400/30', 'font-mono text-sm text-red-400')}>
                    <AlertCircle size={16} />
                    Something went wrong. Email {site.email} directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
