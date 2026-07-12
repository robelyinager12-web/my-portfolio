'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const whyChooseMe = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Performance-first development. Every project is optimized for Core Web Vitals, minimal bundle size, and sub-second load times from day one.', color: 'border-yellow-400/20 hover:border-yellow-400/40', iconBg: 'bg-yellow-400/10', bar: 'bg-yellow-400' },
  { icon: '🔒', title: 'Security First', desc: 'JWT auth, input sanitization, rate limiting, CORS hardening — security is baked into every layer of the stack, never bolted on at the end.', color: 'border-neon-violet/20 hover:border-neon-violet/40', iconBg: 'bg-neon-violet/10', bar: 'bg-neon-violet' },
  { icon: '📐', title: 'Clean Architecture', desc: 'Modular, documented, readable code. Built for teams, not just demos. Your future developers will thank you for choosing maintainable structure.', color: 'border-neon-pink/20 hover:border-neon-pink/40', iconBg: 'bg-neon-pink/10', bar: 'bg-neon-pink' },
  { icon: '🤝', title: 'Transparent Process', desc: 'Weekly updates, staging previews, and open communication throughout. You are never left wondering what is happening with your project.', color: 'border-orange-400/20 hover:border-orange-400/40', iconBg: 'bg-orange-400/10', bar: 'bg-orange-400' },
  { icon: '🚀', title: 'On-Time Delivery', desc: 'Deadlines are commitments. Milestone-based delivery keeps projects on track — if something changes, you are the first to know.', color: 'border-neon-cyan/20 hover:border-neon-cyan/40', iconBg: 'bg-neon-cyan/10', bar: 'bg-neon-cyan' },
  { icon: '♾️', title: 'Long-Term Support', desc: 'Post-launch support available for every project. Bug fixes, feature additions, and performance audits — I am here long after go-live.', color: 'border-blue-400/20 hover:border-blue-400/40', iconBg: 'bg-blue-400/10', bar: 'bg-blue-400' }
];

const coreCapabilities = [
  { num: 'I', title: 'Optimized Workflow', desc: 'My development experience is powered by modern tooling — VS Code extensions like Emmet, IntelliCode, and Prettier keep my code clean, fast, and maintainable.', cat: 'DevOps' },
  { num: 'II', title: 'Integrated Interfaces', desc: 'I create seamless connections between user interfaces and backend systems, enabling smooth, secure data exchange from dynamic form handling to custom API paths.', cat: 'Full Stack' },
  { num: 'III', title: 'Client-Centric Delivery', desc: 'Every project is delivered with precision and purpose — on time, completely aligned with your targets, and built to leave a lasting modern impression.', cat: 'Delivery' },
  { num: 'IV', title: 'Developer-Centric', desc: 'Built for uptime and impact: backend systems running on structured code with an emphasis on rock-solid reliability that builds user confidence.', cat: 'Backend' },
  { num: 'V', title: 'Real-Time Updates', desc: 'I deploy full-stack applications with real-time updates and low latency metrics, ensuring users instantly experience data changes without reload delays.', cat: 'Full Stack' },
  { num: 'VI', title: '24/7 Uptime Layouts', desc: 'I deliver applications optimized for continuous availability, high performance, and reliable server-side asset rendering under heavy networking traffic.', cat: 'DevOps' },
  { num: 'VII', title: 'Fully Responsive', desc: 'Fluid layouts built cleanly to scale elegantly across smartphone screens, tablets, and wide high-definition monitors using pure modern CSS logic.', cat: 'Frontend' },
  { num: 'VIII', title: 'Creative UI/UX Design', desc: 'I design intuitive interfaces with custom gradients, interactive layers, and light-weight vector graphics that elevate user engagement and brand presence.', cat: 'Frontend' },
  { num: 'IX', title: 'Full-Stack Integration', desc: 'Connecting secure databases, robust server layers, and interactive front-ends into one unified application package designed for high-velocity user scaling.', cat: 'Full Stack' }
];

const filterTabs = ['All', 'Frontend', 'Backend', 'Full Stack', 'UI/UX', 'DevOps', 'Delivery'];

export function Services() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? coreCapabilities
    : coreCapabilities.filter(c => c.cat === activeFilter);

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-28">

        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">
              ✦ WHAT I OFFER
            </span>
            <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-4">
              <span className="text-white">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">End-to-end digital solutions engineered with precision, creativity, and relentless attention to performance.</p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 px-6 py-4 rounded-2xl bg-white/3  max-w-2xl mx-auto">
              <span className="flex items-center gap-2 font-mono text-sm text-yellow-400"><span>⚡</span> Fast Delivery</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-2 font-mono text-sm text-neon-violet"><span>🔒</span> Secure by Default</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-2 font-mono text-sm text-neon-cyan"><span>📐</span> Clean Architecture</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-2 font-mono text-sm text-orange-400"><span>🤝</span> Full Ownership Transfer</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/5 font-mono text-xs text-yellow-400 tracking-widest uppercase mb-6">
              🏆 WHY CHOOSE ME
            </span>
            <h3 className="font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white mb-3">
              Built Different. <span className="text-neon-cyan">Delivered Better.</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">Six commitments I bring to every single project — no exceptions, no excuses.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseMe.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className={cn('p-6 rounded-2xl bg-white/3 border transition-all duration-300 group', item.color)} whileHover={{ y: -6 }}>
                <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5', item.iconBg)}>
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className={cn('h-0.5 w-8 rounded-full', item.bar)} />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h3 className="font-display font-black text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
              <span className="text-white">Core </span>
              <span className="text-neon-cyan">Capabilities</span>
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">Nine pillars of excellence. Click any card to explore full details.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {filterTabs.map(tab => (
                <button key={tab} onClick={() => setActiveFilter(tab)} className={cn('px-4 py-2 rounded-full font-mono text-sm transition-all duration-200', activeFilter === tab ? 'bg-gradient-to-r from-neon-cyan to-neon-violet text-black font-bold shadow-[0_0_15px_rgba(0,255,255,0.3)]' : 'bg-white/5  text-gray-400 hover:text-white hover:border-white/20')}>
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((item, i) => (
                <motion.div key={item.num} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }} className="p-6 rounded-2xl bg-white/3  hover:border-neon-violet/30 hover:bg-white/5 transition-all duration-300 group" whileHover={{ y: -4 }}>
                  <div className="text-4xl font-display font-black text-neon-cyan mb-4 opacity-60">{item.num}</div>
                  <h4 className="font-display font-bold text-lg text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{item.desc}</p>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/30 font-mono text-xs text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-200">
                    Read more →
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
