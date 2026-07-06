'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const skillsData = [
  { name: 'React.js', percent: 95, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', percent: 90, icon: '▲', color: 'from-white to-gray-400' },
  { name: 'TypeScript', percent: 88, icon: '🔷', color: 'from-blue-400 to-blue-600' },
  { name: 'Node.js', percent: 93, icon: '🟢', color: 'from-green-400 to-green-600' },
  { name: 'MongoDB', percent: 91, icon: '🍃', color: 'from-green-500 to-emerald-600' },
  { name: 'PostgreSQL', percent: 85, icon: '🐘', color: 'from-blue-500 to-indigo-600' },
  { name: 'MySQL', percent: 87, icon: '🗄️', color: 'from-orange-400 to-orange-600' },
  { name: 'Express.js', percent: 92, icon: '⚙️', color: 'from-gray-400 to-gray-600' },
  { name: 'Three.js', percent: 80, icon: '🎮', color: 'from-purple-400 to-purple-600' }
];

const experienceData = [
  { role: 'Software Engineer', company: 'Company Name', period: '2025 — Present', type: 'Full-time', highlights: ['Lead end-to-end feature delivery across Next.js and Node.js stack', 'Designed Three.js-powered interactive product visualizer', 'Owned PostgreSQL and MongoDB schemas for core services'] },
  { role: 'Full-Stack Developer', company: 'Company Name', period: '2024 — 2025', type: 'Full-time', highlights: ['Built and maintained React + Express MERN features', 'Introduced Jest testing raising coverage significantly', 'Implemented real-time features using Socket.io'] },
  { role: 'Freelance Developer', company: 'Self-employed', period: '2023 — Present', type: 'Freelance', highlights: ['Delivered full-stack applications for independent clients', 'Handled complete project lifecycle end to end', 'Built e-commerce stores and management dashboards'] }
];

const servicesData = [
  { title: 'Full Stack Development', desc: 'End-to-end web application development using modern frameworks and scalable architectures.', icon: '💻' },
  { title: 'Frontend Engineering', desc: 'Responsive, interactive and visually engaging user interfaces built for performance.', icon: '🎨' },
  { title: 'Backend Development', desc: 'Secure APIs, authentication systems and scalable server-side applications.', icon: '🔧' },
  { title: 'Database Design', desc: 'Efficient database architecture and query optimization for high-performance applications.', icon: '🗄️' },
  { title: 'Cloud Deployment', desc: 'Deploying applications using modern cloud and DevOps practices on AWS and Vercel.', icon: '☁️' },
  { title: '3D Web Experiences', desc: 'Interactive Three.js scenes, WebGL visualizations and immersive digital experiences.', icon: '🌐' }
];

const tabs = ['⚡ SKILLS', '📋 EXPERIENCE', '🔧 SERVICES'];

function SkillBar({ skill, index }: { skill: typeof skillsData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-neon-violet/30 hover:bg-white/5 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-mono font-semibold text-white text-sm">{skill.name}</span>
        </div>
        <span className="font-mono font-bold text-neon-cyan text-sm">{skill.percent}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: skill.percent + '%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.05, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-violet/30 bg-neon-violet/5 font-mono text-xs text-neon-violet tracking-widest uppercase mb-6">
            ✦ MY PROFILE
          </span>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-tight">
            <span className="text-white">My Professional </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink">Profile</span>
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={cn(
                'px-6 py-2.5 rounded-full font-mono text-sm font-semibold transition-all duration-300',
                activeTab === i
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-violet text-black shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div key="skills" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div key="experience" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6 max-w-3xl mx-auto">
              {experienceData.map((item, i) => (
                <motion.div key={item.role} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-neon-cyan/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">{item.role}</h3>
                      <p className="font-mono text-sm text-neon-cyan">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-gray-500">{item.period}</p>
                      <span className={cn('inline-block mt-1 px-2 py-0.5 rounded-full font-mono text-[10px]', item.type === 'Freelance' ? 'bg-neon-pink/10 text-neon-pink border border-neon-pink/20' : 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20')}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-neon-violet mt-0.5 flex-shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div key="services" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesData.map((service, i) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-neon-violet/30 hover:bg-white/5 transition-all duration-300 group" whileHover={{ y: -4 }}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-neon-cyan transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
