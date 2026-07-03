'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Pill } from '@/components/ui/Pill';

const colorMap = {
  cyan: { border: 'border-neon-cyan/30', shadow: 'shadow-neon-cyan', glow: 'from-neon-cyan/10', tag: 'text-neon-cyan', badge: 'cyan' as const },
  violet: { border: 'border-neon-violet/30', shadow: 'shadow-neon-violet', glow: 'from-neon-violet/10', tag: 'text-neon-violet', badge: 'violet' as const },
  pink: { border: 'border-neon-pink/30', shadow: 'shadow-neon-pink', glow: 'from-neon-pink/10', tag: 'text-neon-pink', badge: 'pink' as const }
};

const svgShapes = [
  '<polygon points="40,20 120,40 90,110 20,90" fill="none" stroke="#00FFFF" stroke-width="1" opacity="0.6"/>',
  '<circle cx="150" cy="80" r="55" fill="none" stroke="#8B5CF6" stroke-width="1" opacity="0.6"/>',
  '<polygon points="150,10 260,50 220,130 80,130 40,50" fill="none" stroke="#EC4899" stroke-width="1" opacity="0.6"/>',
  '<rect x="60" y="20" width="90" height="90" fill="none" stroke="#00FFFF" stroke-width="1" opacity="0.6" transform="rotate(20 105 65)"/>'
];

export function Projects() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedProject = projects.find(p => p.slug === selected);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/projects" title="Selected Work" description="A handful of projects that show the range from data-heavy backends to interactive 3D interfaces" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const colors = colorMap[project.accentColor];
            return (
              <Reveal key={project.slug} direction="up" delay={i * 0.1}>
                <motion.article className={cn('relative h-full rounded-2xl overflow-hidden', 'bg-glass-bg border border-glass-border backdrop-blur-glass', 'hover:' + colors.border, colors.shadow.replace('shadow', 'hover:shadow'), 'transition-all duration-300 cursor-pointer group')} whileHover={{ y: -8, scale: 1.01 }} onClick={() => setSelected(project.slug)}>
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-primary">
                    <svg viewBox="0 0 300 160" className="absolute inset-0 w-full h-full" dangerouslySetInnerHTML={{ __html: svgShapes[i % svgShapes.length] }} />
                    <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500', 'bg-gradient-to-br to-transparent', colors.glow)} />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="font-mono text-xs text-text-muted">/{project.slug}</span>
                      {project.featured && <Pill color={colors.badge} size="sm" glow>featured</Pill>}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-neon-violet transition-colors duration-300">{project.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="font-mono text-xs px-2 py-1 rounded-md bg-glass-bg border border-glass-border text-text-muted">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-3">
                        <a href={project.liveUrl} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={cn('flex items-center gap-1.5 font-mono text-xs', colors.tag, 'hover:opacity-80 transition-opacity')}>
                          <ExternalLink size={13} /> Live Demo
                        </a>
                        <a href={project.repoUrl} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text-primary transition-colors">
                          <Github size={13} /> Source
                        </a>
                      </div>
                      <span className="font-mono text-xs text-text-muted group-hover:text-neon-violet transition-colors">view details →</span>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && selectedProject && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 z-[200] bg-bg-primary/80 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} className={cn('fixed inset-4 md:inset-10 lg:inset-20 z-[201] overflow-y-auto', 'bg-bg-secondary border border-neon-violet/30 rounded-2xl', 'shadow-neon-violet p-8')}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-mono text-xs text-neon-cyan mb-2">/{selectedProject.slug}</p>
                  <h2 className="font-display font-bold text-3xl text-text-primary">{selectedProject.title}</h2>
                </div>
                <button onClick={() => setSelected(null)} className="w-9 h-9 rounded-lg flex items-center justify-center border border-glass-border bg-glass-bg text-text-secondary hover:text-neon-violet hover:border-neon-violet/40 transition-all">
                  <X size={16} />
                </button>
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map(tag => (
                  <Pill key={tag} color={colorMap[selectedProject.accentColor].badge} size="md">{tag}</Pill>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className={cn('flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm', 'bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink', 'text-bg-primary font-semibold hover:shadow-neon-violet transition-all duration-300')}>
                  <ExternalLink size={15} /> Live Demo
                </a>
                <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className={cn('flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm', 'border border-glass-border bg-glass-bg text-text-secondary', 'hover:border-neon-violet/40 hover:text-neon-violet transition-all duration-300')}>
                  <Github size={15} /> Source Code
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
