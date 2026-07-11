'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'success' | 'error';

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 13.26l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.993.3z"/>
  </svg>
);

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

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-neon-violet/4 rounded-full blur-[150px]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-cyan/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-neon-pink/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,4rem)] leading-tight mb-4">
            <span className="text-white">Let&apos;s build something </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-pink">
              extraordinary
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-[#0B1120]/80 border border-white/8 p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-white/15 pb-3 font-mono text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-cyan transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="Email address"
                    className="w-full bg-transparent border-b border-white/15 pb-3 font-mono text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-cyan transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message" name="message" required rows={6}
                  placeholder="Your message"
                  className="w-full bg-transparent border-b border-white/15 pb-3 font-mono text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-cyan transition-colors duration-200 resize-none"
                />
              </div>

              <div>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    'flex items-center gap-2 px-10 py-4 rounded-full font-mono font-semibold text-sm transition-all duration-300',
                    'bg-gradient-to-r from-neon-cyan to-neon-violet text-black',
                    'hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]',
                    'disabled:opacity-60 disabled:cursor-not-allowed'
                  )}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={15} />
                    </>
                  )}
                </motion.button>
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-400/10 border border-green-400/20 font-mono text-sm text-green-400"
                >
                  <CheckCircle size={16} />
                  Message sent! I will reply within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-400/10 border border-red-400/20 font-mono text-sm text-red-400"
                >
                  <AlertCircle size={16} />
                  Failed. Email me at robelyinager12@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-[#0B1120]/80 border border-white/8 p-8 space-y-1"
          >
            <h3 className="font-display font-semibold text-xl text-white mb-6">Direct channels</h3>

            {channels.map((ch, i) => {
              const Icon = ch.icon;
              const inner = (
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-cyan/20 transition-colors duration-200">
                    <Icon size={20} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">{ch.label}</p>
                    <p className="font-mono text-sm text-white group-hover:text-neon-cyan transition-colors duration-200">{ch.value}</p>
                  </div>
                </div>
              );
              return ch.href
                ? <a key={i} href={ch.href}>{inner}</a>
                : <div key={i}>{inner}</div>;
            })}

            <div className="pt-4 border-t border-white/8 space-y-1">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest px-4 pb-2">Telegram</h4>
              <a href="https://t.me/robaNew05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-400/5 transition-colors duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-400/20 transition-colors">
                  <span className="text-blue-400"><TelegramIcon /></span>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">USERNAME</p>
                  <p className="font-mono text-sm text-blue-400 group-hover:text-blue-300 transition-colors">@robaNew05</p>
                </div>
              </a>
              <a href="https://t.me/+251920362975" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-400/5 transition-colors duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-400/20 transition-colors">
                  <span className="text-blue-400"><TelegramIcon /></span>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">PHONE</p>
                  <p className="font-mono text-sm text-blue-400 group-hover:text-blue-300 transition-colors">+251 920 362 975</p>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-white/8 space-y-1">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest px-4 pb-2">Social</h4>
              <a href="https://github.com/robelyinager12-web" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/20 transition-colors">
                  <Github size={20} className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">GITHUB</p>
                  <p className="font-mono text-sm text-gray-300 group-hover:text-neon-cyan transition-colors">github.com/robelyinager12-web</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/robel-yinager-943b37419/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-violet/10 group-hover:border-neon-violet/20 transition-colors">
                  <Linkedin size={20} className="text-gray-400 group-hover:text-neon-violet transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">LINKEDIN</p>
                  <p className="font-mono text-sm text-gray-300 group-hover:text-neon-violet transition-colors">linkedin.com/in/robel-yinager</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
