'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'Project timelines vary based on scope and complexity. A simple landing page takes 3-5 days, a full-stack web app typically takes 2-6 weeks, and enterprise-level systems can take 2-4 months. I always provide a detailed timeline before starting any project.'
  },
  {
    q: 'Do you offer post-launch maintenance?',
    a: 'Yes, absolutely. Every project comes with a post-launch support period — Starter gets 1 month, Professional gets 3 months, and Enterprise gets 6 months. After that, I offer flexible monthly maintenance retainers for bug fixes, updates, and feature additions.'
  },
  {
    q: 'Can you work with an existing codebase?',
    a: 'Definitely. I am experienced in auditing, refactoring, and extending existing codebases. Whether it is a legacy system that needs modernizing or a half-built project that needs completing, I can jump in and contribute effectively.'
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'My core stack is the MERN stack — MongoDB, Express, React, and Node.js — plus Next.js, TypeScript, PostgreSQL, MySQL, Three.js, Tailwind CSS, and various DevOps tools. I choose the right technology for each project rather than forcing a one-size-fits-all approach.'
  },
  {
    q: 'How do you handle revisions and feedback?',
    a: 'I follow a milestone-based approach where feedback is collected at each stage before moving to the next. Within the agreed project scope, revisions are a natural part of the process at no extra charge. I iterate until every detail matches your vision.'
  },
  {
    q: 'Do you sign NDAs or contracts?',
    a: 'Yes. I am happy to sign NDAs and always work with a clear written contract that outlines scope, timeline, payment terms, and intellectual property rights. Your code, your business logic, and your data are always protected.'
  },
  {
    q: 'Do you work remotely or on-site?',
    a: 'I work primarily remote and am comfortable with async communication across different time zones. For clients in Ethiopia or nearby, I am also open to on-site collaboration when needed.'
  },
  {
    q: 'How do I get started with a project?',
    a: 'Simply reach out via the contact form or email me directly at robelyinager12@gmail.com. I will schedule a free discovery call to understand your requirements, goals, and timeline, then provide a detailed proposal and quote within 24 hours.'
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-cyan/4 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-violet/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-24 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">
                ❓ FAQS
              </span>
              <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] leading-tight mt-4">
                <span className="text-white">Common </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-neon-violet to-neon-pink">Questions</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mt-4">
                Everything you need to know before we start building together.
              </p>
            </div>
            <a href="#contact" className={cn('inline-flex items-center gap-2 px-7 py-3.5 rounded-full', 'bg-gradient-to-r from-neon-cyan to-neon-violet', 'text-black font-mono font-bold text-sm', 'hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:scale-105', 'transition-all duration-300')}>
              <MessageCircle size={16} />
              Ask Me Anything →
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn('rounded-2xl border overflow-hidden transition-all duration-300', open === i ? 'border-neon-cyan/30 bg-neon-cyan/5' : 'border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5')}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={cn('font-mono font-semibold text-sm transition-colors duration-200', open === i ? 'text-neon-cyan' : 'text-white')}>
                    {faq.q}
                  </span>
                  <div className={cn('w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-200', open === i ? 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan' : 'bg-white/5 border-white/10 text-gray-400')}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 border-t border-neon-cyan/10">
                        <p className="text-gray-400 text-sm leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
