'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'success' | 'error';

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
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-neon-violet/4 rounded-full blur-[150px]" />
        <div className="floating-dot" style={{ top: '20%', left: '10%' }} />
        <div className="floating-dot" style={{ bottom: '20%', right: '10%', background: '#8B5CF6', animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-4">
            <span className="text-white">Let&apos;s build something </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-pink">extraordinary</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-white/3 border border-white/8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest">Full name</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" className="w-full bg-transparent border-b border-white/15 py-3 font-mono text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan transition-colors duration-200" />
                </div>
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest">Email address</label>
                  <input id="email" name="email" type="email" required placeholder="your@email.com" className="w-full bg-transparent border-b border-white/15 py-3 font-mono text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan transition-colors duration-200" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest">Your message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project or idea..." className="w-full bg-transparent border-b border-white/15 py-3 font-mono text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan transition-colors duration-200 resize-none" />
              </div>
              <motion.button type="submit" disabled={status === 'sending'} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet text-black font-mono font-bold text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                {status === 'sending' ? <><span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />Sending...</> : <><Send size={15} />Send Message</>}
              </motion.button>
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-xl bg-green-400/10 border border-green-400/20 font-mono text-sm text-green-400">
                  <CheckCircle size={16} /> Message sent! I will reply within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-xl bg-red-400/10 border border-red-400/20 font-mono text-sm text-red-400">
                  <AlertCircle size={16} /> Failed. Email me at robelyinager12@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
              <h3 className="font-display font-bold text-lg text-white mb-5">Direct channels</h3>
              <div className="space-y-4">
                <a href="mailto:robelyinager12@gmail.com" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                  <div className="w-11 h-11 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-cyan/20 transition-colors">
                    <Mail size={18} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">EMAIL</p>
                    <p className="font-mono text-sm text-white group-hover:text-neon-cyan transition-colors">robelyinager12@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+251990004044" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                  <div className="w-11 h-11 rounded-xl bg-neon-violet/10 border border-neon-violet/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-violet/20 transition-colors">
                    <Phone size={18} className="text-neon-violet" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">PHONE</p>
                    <p className="font-mono text-sm text-white group-hover:text-neon-violet transition-colors">+251 990 004 044</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-11 h-11 rounded-xl bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-neon-pink" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">LOCATION</p>
                    <p className="font-mono text-sm text-white">Injibara, Ethiopia 🇪🇹</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/3 border border-white/8 space-y-3">
              <h3 className="font-display font-bold text-base text-white mb-4">Find me online</h3>
              <a href="https://github.com/robelyinager12-web" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-white/8 hover:border-neon-cyan/30 hover:bg-white/5 transition-all duration-200 group">
                <Github size={18} className="text-gray-500 group-hover:text-neon-cyan transition-colors" />
                <span className="font-mono text-sm text-gray-400 group-hover:text-neon-cyan transition-colors">github.com/robelyinager12-web</span>
              </a>
              <a href="https://www.linkedin.com/in/robel-yinager-943b37419/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-white/8 hover:border-neon-violet/30 hover:bg-white/5 transition-all duration-200 group">
                <Linkedin size={18} className="text-gray-500 group-hover:text-neon-violet transition-colors" />
                <span className="font-mono text-sm text-gray-400 group-hover:text-neon-violet transition-colors">linkedin.com/in/robel-yinager</span>
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-neon-violet/10 to-neon-pink/10 border border-neon-violet/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400 font-semibold">Available for freelance</span>
              </div>
              <p className="font-mono text-xs text-gray-400">Response guaranteed within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
