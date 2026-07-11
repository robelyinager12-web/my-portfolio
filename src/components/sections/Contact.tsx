'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'success' | 'error';

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 13.26l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.993.3z"/>
  </svg>
);

const channels = [
  { icon: Mail, label: 'EMAIL', value: 'robelyinager12@gmail.com', href: 'mailto:robelyinager12@gmail.com', color: 'bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan', hover: 'group-hover:bg-neon-cyan/20 group-hover:text-neon-cyan' },
  { icon: Phone, label: 'PHONE', value: '+251 990 004 044', href: 'tel:+251990004044', color: 'bg-neon-violet/10 border-neon-violet/20 text-neon-violet', hover: 'group-hover:bg-neon-violet/20 group-hover:text-neon-violet' },
  { icon: Phone, label: 'TELEGRAM PHONE', value: '+251 920 362 975', href: 'tel:+251920362975', color: 'bg-blue-400/10 border-blue-400/20 text-blue-400', hover: 'group-hover:bg-blue-400/20 group-hover:text-blue-400' },
  { icon: MapPin, label: 'LOCATION', value: 'Injibara, Ethiopia 🇪🇹', href: null, color: 'bg-neon-pink/10 border-neon-pink/20 text-neon-pink', hover: '' }
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

  const inputClass = 'w-full bg-transparent border-b border-white/15 py-3 font-mono text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan transition-colors duration-200';

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-neon-violet/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">GET IN TOUCH</span>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-4">
            <span className="text-white">Let&apos;s build something </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-pink">extraordinary</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Have a project in mind? Send me a message and let&apos;s make it happen.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-2xl bg-white/3 border border-white/8">
            <h3 className="font-display font-semibold text-xl text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest">Full name</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest">Email address</label>
                  <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block font-mono text-xs text-gray-500 uppercase tracking-widest">Your message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." className={cn(inputClass, 'resize-none')} />
              </div>
              <motion.button type="submit" disabled={status === 'sending'} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet text-black font-mono font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                {status === 'sending' ? <><span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />Sending...</> : <><Send size={15} />Send Message</>}
              </motion.button>
              {status === 'success' && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-xl bg-green-400/10 border border-green-400/20 font-mono text-sm text-green-400"><CheckCircle size={16} />Message sent! I will reply within 24 hours.</motion.div>}
              {status === 'error' && <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-xl bg-red-400/10 border border-red-400/20 font-mono text-sm text-red-400"><AlertCircle size={16} />Failed. Email me at robelyinager12@gmail.com</motion.div>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
              <h3 className="font-display font-semibold text-lg text-white mb-5">Direct channels</h3>
              <div className="space-y-3">
                {channels.map((ch, i) => {
                  const Icon = ch.icon;
                  const inner = (
                    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                      <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors', ch.color, ch.hover)}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{ch.label}</p>
                        <p className="font-mono text-sm text-white group-hover:text-neon-cyan transition-colors">{ch.value}</p>
                      </div>
                    </div>
                  );
                  return ch.href ? <a key={i} href={ch.href}>{inner}</a> : <div key={i}>{inner}</div>;
                })}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
              <h3 className="font-display font-semibold text-base text-white mb-4">Telegram</h3>
              <div className="space-y-3">
                <a href="https://t.me/robaNew05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-white/8 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                    <TelegramIcon />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">TELEGRAM USERNAME</p>
                    <span className="font-mono text-sm text-blue-400 group-hover:text-blue-300 transition-colors">@robaNew05</span>
                  </div>
                </a>
                <a href="https://t.me/+251920362975" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl border border-white/8 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                    <TelegramIcon />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">TELEGRAM PHONE</p>
                    <span className="font-mono text-sm text-blue-400 group-hover:text-blue-300 transition-colors">+251 920 362 975</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/3 border border-white/8 space-y-3">
              <h3 className="font-display font-semibold text-base text-white mb-4">Find me online</h3>
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
                <span className="font-mono text-xs text-green-400 font-medium">Available for freelance</span>
              </div>
              <p className="font-mono text-xs text-gray-400">Response guaranteed within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
