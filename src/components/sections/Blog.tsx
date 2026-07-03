'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/lib/utils';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Pill } from '@/components/ui/Pill';

const tagColors: Record<string, 'cyan' | 'violet' | 'pink'> = {
  Backend: 'cyan',
  Frontend: 'violet',
  Database: 'pink',
  Engineering: 'cyan'
};

const cardAccents = [
  { border: 'hover:border-neon-cyan/40', shadow: 'hover:shadow-neon-cyan', number: 'text-neon-cyan/15', bar: 'from-neon-cyan' },
  { border: 'hover:border-neon-violet/40', shadow: 'hover:shadow-neon-violet', number: 'text-neon-violet/15', bar: 'from-neon-violet' },
  { border: 'hover:border-neon-pink/40', shadow: 'hover:shadow-neon-pink', number: 'text-neon-pink/15', bar: 'from-neon-pink' },
  { border: 'hover:border-neon-cyan/40', shadow: 'hover:shadow-neon-cyan', number: 'text-neon-cyan/15', bar: 'from-neon-cyan' }
];

export function Blog() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-neon-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/blog" title="Latest Writing" description="Thoughts on engineering architecture and the tools I use day to day" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => {
            const accent = cardAccents[i % cardAccents.length];
            const tagColor = tagColors[post.tag] ?? 'cyan';
            return (
              <Reveal key={post.slug} direction="up" delay={i * 0.1}>
                <motion.a href={post.url} target="_blank" rel="noopener noreferrer" className={cn('relative flex flex-col h-full p-6 rounded-2xl overflow-hidden', 'bg-glass-bg border border-glass-border backdrop-blur-glass', accent.border, accent.shadow, 'transition-all duration-300 group')} whileHover={{ y: -8, scale: 1.01 }}>
                  <div className={cn('absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300', accent.bar)} />
                  <span className={cn('absolute bottom-4 right-4 font-display font-bold text-7xl leading-none select-none pointer-events-none', accent.number)}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative z-10 flex flex-col h-full space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <Pill color={tagColor} size="sm" glow>
                        {post.tag}
                      </Pill>
                      <ArrowUpRight size={16} className="text-text-muted group-hover:text-neon-cyan transition-colors duration-200" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-neon-violet transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 pt-2 border-t border-glass-border">
                      <span className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                        <Tag size={11} className="text-neon-violet" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
                        <Clock size={11} className="text-neon-cyan" />
                        {post.readMinutes} min read
                      </span>
                      <span className="ml-auto font-mono text-xs text-neon-violet group-hover:text-neon-cyan transition-colors duration-200">
                        read article
                      </span>
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
