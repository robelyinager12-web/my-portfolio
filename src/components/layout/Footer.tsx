'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/robel-yinager-943b37419/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/robelyinager12-web' },
  { icon: Mail, label: 'Email', href: 'mailto:robelyinager12@gmail.com' },
  { icon: Phone, label: 'Phone', href: 'tel:+251990004044' }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-[3px] bg-gradient-to-r from-neon-cyan via-neon-violet via-neon-pink via-yellow-400 via-green-400 to-neon-cyan" />

      <div className="bg-[#020610] py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-neon-violet/3 rounded-full blur-[100px]" />
          <div className="floating-dot" style={{ top: '30%', left: '15%', width: '6px', height: '6px' }} />
          <div className="floating-dot" style={{ bottom: '30%', right: '15%', background: '#8B5CF6', width: '4px', height: '4px', animationDelay: '2s' }} />
          <div className="floating-dot" style={{ top: '60%', left: '75%', background: '#EC4899', width: '5px', height: '5px', animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-neon-violet/40 flex-shrink-0">
                  <Image src="/avatar.jpg" alt="Robel Yinager" fill className="object-cover object-top" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink">
                    Robel Yinager
                  </h3>
                  <p className="font-mono text-[10px] text-neon-cyan tracking-widest uppercase">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Building scalable, secure and beautiful web applications from Injibara, Ethiopia. Available for freelance and full-time opportunities.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400">Available for work</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-4">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest pb-2 border-b border-white/8">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-200 group">
                      <span className="w-0 h-px bg-neon-cyan group-hover:w-4 transition-all duration-300 flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4">
              <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest pb-2 border-b border-white/8">Contact Info</h4>
              <div className="space-y-3">
                <a href="mailto:robelyinager12@gmail.com" className="flex items-center gap-3 font-mono text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-200">
                  <Mail size={14} className="text-neon-cyan flex-shrink-0" />
                  robelyinager12@gmail.com
                </a>
                <a href="tel:+251990004044" className="flex items-center gap-3 font-mono text-sm text-gray-400 hover:text-neon-violet transition-colors duration-200">
                  <Phone size={14} className="text-neon-violet flex-shrink-0" />
                  +251 990 004 044
                </a>
                <div className="flex items-center gap-3 font-mono text-sm text-gray-400">
                  <span className="text-neon-pink flex-shrink-0">📍</span>
                  Injibara, Ethiopia 🇪🇹
                </div>
              </div>
            </motion.div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-10" />

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={social.label} className="flex flex-col items-center gap-1.5 group" whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }}>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 group-hover:text-neon-cyan transition-all duration-200">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>

            <div className="text-center space-y-2">
              <p className="font-mono text-xs text-gray-600">
                &copy; {new Date().getFullYear()} Robel Yinager. All rights reserved.
              </p>
              <div className="flex items-center justify-center gap-4">
                {['Terms of Service', 'Privacy Policy', 'Accessibility'].map((item, i) => (
                  <span key={item} className="flex items-center gap-4">
                    <a href="#" className="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">{item}</a>
                    {i < 2 && <span className="text-gray-700">|</span>}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="font-mono text-xs text-gray-600">Designed & built by</span>
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-neon-violet/40">
                    <Image src="/avatar.jpg" alt="Robel Yinager" fill className="object-cover object-top" />
                  </div>
                  <span className="font-mono text-xs font-bold text-white">Robel Yinager</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-6 right-6 w-11 h-11 rounded-xl bg-neon-violet/20 border border-neon-violet/40 flex items-center justify-center text-neon-violet hover:bg-neon-violet/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-200 z-50" whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
        <ArrowUp size={18} />
      </motion.button>

      <div className="h-1 bg-gradient-to-r from-neon-cyan via-neon-violet via-neon-pink via-yellow-400 via-green-400 to-neon-cyan opacity-40" />
    </footer>
  );
}
