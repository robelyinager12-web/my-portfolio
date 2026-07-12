'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Hospital Management System',
    category: 'FULL STACK',
    desc: 'A comprehensive healthcare platform streamlining patient records, appointments, billing, and hospital operations.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    stars: 24, forks: 8, views: '3.4K',
    github: '#', live: '#',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    border: 'border-cyan-500/20 hover:border-cyan-400/50'
  },
  {
    title: 'E-Commerce Platform',
    category: 'FRONTEND',
    desc: 'A scalable online marketplace with secure authentication, Stripe payment integration, and real-time inventory.',
    tags: ['React', 'Express', 'MongoDB', 'Stripe'],
    stars: 18, forks: 5, views: '2.7K',
    github: '#', live: '#',
    gradient: 'from-violet-500/20 to-purple-600/20',
    border: 'border-violet-500/20 hover:border-violet-400/50'
  },
  {
    title: 'Learning Management System',
    category: 'UI/UX',
    desc: 'An educational platform supporting course creation, assessments, progress tracking and instructor dashboards.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'AWS S3'],
    stars: 11, forks: 3, views: '1.9K',
    github: '#', live: '#',
    gradient: 'from-pink-500/20 to-rose-600/20',
    border: 'border-pink-500/20 hover:border-pink-400/50'
  },
  {
    title: 'Instagram Clone',
    category: 'FULL STACK',
    desc: 'A fully featured social media platform with real-time messaging, photo sharing and story features.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    stars: 31, forks: 12, views: '4.1K',
    github: '#', live: '#',
    gradient: 'from-orange-500/20 to-pink-600/20',
    border: 'border-orange-500/20 hover:border-orange-400/50'
  },
  {
    title: 'Real-Time Chat App',
    category: 'WEBRTC',
    desc: 'A WebRTC-powered video and text chat application with rooms, screen sharing and end-to-end encryption.',
    tags: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
    stars: 15, forks: 6, views: '2.2K',
    github: '#', live: '#',
    gradient: 'from-green-500/20 to-teal-600/20',
    border: 'border-green-500/20 hover:border-green-400/50'
  },
  {
    title: '3D Data Visualizer',
    category: 'API INTEGRATION',
    desc: 'An interactive WebGL dashboard mapping live metrics onto a navigable 3D scene using Three.js.',
    tags: ['Three.js', 'React', 'Node.js', 'MySQL'],
    stars: 9, forks: 2, views: '1.5K',
    github: '#', live: '#',
    gradient: 'from-yellow-500/20 to-orange-600/20',
    border: 'border-yellow-500/20 hover:border-yellow-400/50'
  }
];

const catColors: Record<string, string> = {
  'FULL STACK': 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20',
  'FRONTEND': 'bg-neon-violet/10 text-neon-violet border-neon-violet/20',
  'UI/UX': 'bg-neon-pink/10 text-neon-pink border-neon-pink/20',
  'WEBRTC': 'bg-green-400/10 text-green-400 border-green-400/20',
  'API INTEGRATION': 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20'
};

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-violet/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 font-mono text-xs text-neon-cyan tracking-widest uppercase mb-6">
            • PORTFOLIO SHOWCASE
          </span>
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-violet to-yellow-400">My Latest </span>
            <span className="text-white">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A curated collection of full-stack applications, UI experiments, and real-time systems built with passion and precision.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-center justify-center gap-8 py-4 px-8 rounded-2xl bg-white/3  max-w-lg mx-auto mb-14">
          {[
            { value: '20+', label: 'PROJECTS', color: 'text-neon-cyan' },
            { value: '15+', label: 'TECHNOLOGIES', color: 'text-neon-violet' },
            { value: '3yrs', label: 'EXPERIENCE', color: 'text-neon-pink' },
            { value: '100%', label: 'PASSION', color: 'text-yellow-400' }
          ].map((stat, i) => (
            <div key={stat.label} className={cn('text-center', i < 3 && 'border-r border-white/10 pr-8')}>
              <div className={cn('font-display font-black text-xl', stat.color)}>{stat.value}</div>
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={cn('relative rounded-2xl overflow-hidden border bg-white/3 transition-all duration-300 group', project.border)}
              whileHover={{ y: -8 }}
            >
              <div className={cn('relative h-52 overflow-hidden bg-gradient-to-br', project.gradient)}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 opacity-20">
                    {[...Array(9)].map((_, j) => (
                      <div key={j} className="w-8 h-8 rounded-lg bg-white/20" />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#050816]/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className={cn('px-3 py-1 rounded-full font-mono font-bold text-[10px] border uppercase tracking-widest', catColors[project.category] || 'bg-white/10 text-white border-white/20')}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[10px] text-white/40 tracking-widest">{'// ' + project.category}</span>
                </div>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-200">
                        <Github size={20} className="text-white" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-neon-pink/20 hover:border-neon-pink/50 transition-all duration-200">
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="p-5">
                <div className="mb-1">
                  <span className="font-mono text-[10px] text-gray-500 tracking-widest">{'// ' + project.category}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-neon-cyan transition-colors duration-300">{project.title}</h3>
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 font-mono text-xs text-gray-500"><Star size={11} className="text-yellow-400" /> {project.stars}</span>
                  <span className="flex items-center gap-1 font-mono text-xs text-gray-500"><GitFork size={11} className="text-neon-cyan" /> {project.forks}</span>
                  <span className="flex items-center gap-1 font-mono text-xs text-gray-500"><Eye size={11} className="text-neon-violet" /> {project.views}</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5  font-mono text-[10px] text-gray-400">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 pt-3 ">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 hover:bg-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-200">
                    <Github size={16} className="text-neon-cyan" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-pink/10 border border-neon-pink/20 hover:bg-neon-pink/20 hover:border-neon-pink/50 transition-all duration-200">
                    <ExternalLink size={16} className="text-neon-pink" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-12">
          <a href="https://github.com/robelyinager12-web" target="_blank" rel="noopener noreferrer" className={cn('inline-flex items-center gap-2 px-8 py-4 rounded-full', 'border-2 border-white/20 bg-transparent', 'font-mono font-bold text-white text-sm', 'hover:border-neon-cyan/60 hover:text-neon-cyan', 'hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]', 'transition-all duration-300')}>
            <Github size={18} />
            View All Projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
