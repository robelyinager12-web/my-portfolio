'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.16 13.26l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.993.3z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/robel-yinager-943b37419/' },
  { icon: TelegramIcon, label: 'Telegram', href: 'https://t.me/robaNew05' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:robelyinager12@gmail.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/robelyinager12-web' }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-[2px] bg-gradient-to-r from-neon-cyan via-neon-violet via-neon-pink via-orange-400 via-yellow-400 via-green-400 to-neon-cyan" />

      <div className="relative bg-[#020610] pt-16 pb-10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-neon-violet/3 rounded-full blur-[100px]" />
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: (i * 41 + 5) % 100 + '%',
                top: (i * 67 + 10) % 100 + '%',
                width: (i % 2 + 1) * 3 + 'px',
                height: (i % 2 + 1) * 3 + 'px',
                background: i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#8B5CF6' : '#EC4899',
                opacity: 0.25
              }}
              animate={{ y: [0, -15, 0], opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 3 + i % 3, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-5"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex flex-col items-center gap-2 group"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={cn(
                      'w-14 h-14 rounded-2xl flex items-center justify-center',
                      'bg-white/5 border border-white/10',
                      'text-gray-300',
                      'group-hover:bg-white/10 group-hover:border-white/20',
                      'transition-all duration-200'
                    )}>
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors tracking-wider">
                      {social.label}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-between w-full gap-4"
            >
              <p className="font-mono text-xs text-gray-600">
                © {new Date().getFullYear()} Robel Yinager. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {['Terms of Service', 'Privacy Policy', 'Accessibility'].map((item, i, arr) => (
                  <span key={item} className="flex items-center gap-6">
                    <a href="#" className="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
                      {item}
                    </a>
                    {i < arr.length - 1 && <span className="text-white/10">|</span>}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-xs text-gray-600">Designed & built by</span>
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-neon-violet/40">
                  <Image src="/avatar.jpg" alt="Robel Yinager" fill className="object-cover object-top" />
                </div>
                <span className="font-mono text-sm font-semibold text-white">Robel Yinager</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-gradient-to-r from-neon-cyan via-neon-violet via-neon-pink via-orange-400 via-yellow-400 via-green-400 to-neon-cyan opacity-40" />

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={cn(
          'fixed bottom-6 right-6 w-12 h-12 rounded-full z-50',
          'bg-neon-violet/20 border border-neon-violet/40',
          'flex items-center justify-center text-neon-violet',
          'hover:bg-neon-violet/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]',
          'transition-all duration-200'
        )}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
