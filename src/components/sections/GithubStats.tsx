'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, Users, ExternalLink, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { site } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GithubRepo, GithubUser } from '@/types';

interface Stats {
  user: GithubUser;
  repos: GithubRepo[];
  totalStars: number;
  topLanguages: Record<string, number>;
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string | number; color: string }) {
  return (
    <motion.div className={cn('p-5 rounded-2xl text-center', 'bg-glass-bg border border-glass-border backdrop-blur-glass', 'hover:border-neon-violet/40 hover:shadow-neon-violet', 'transition-all duration-300')} whileHover={{ y: -6, scale: 1.03 }}>
      <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 border', color)}>
        {icon}
      </div>
      <p className={cn('font-display text-2xl font-bold', 'bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent')}>{value}</p>
      <p className="font-mono text-xs text-text-muted mt-1">{label}</p>
    </motion.div>
  );
}

function RepoCard({ repo }: { repo: GithubRepo }) {
  return (
    <motion.a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={cn('flex flex-col h-full p-5 rounded-xl', 'bg-glass-bg border border-glass-border backdrop-blur-glass', 'hover:border-neon-violet/40 hover:shadow-neon-violet', 'transition-all duration-300 group')} whileHover={{ y: -4 }}>
      <div className="flex items-start justify-between gap-2 mb-3">
        <h4 className="font-mono text-sm font-medium text-text-primary group-hover:text-neon-cyan transition-colors duration-200 truncate">{repo.name}</h4>
        <ExternalLink size={13} className="text-text-muted group-hover:text-neon-cyan transition-colors flex-shrink-0" />
      </div>
      {repo.description && (
        <p className="text-text-muted text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{repo.description}</p>
      )}
      <div className="flex items-center gap-4 mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1 font-mono text-xs text-neon-violet">
            <Code size={11} />{repo.language}
          </span>
        )}
        <span className="flex items-center gap-1 font-mono text-xs text-text-muted">
          <Star size={11} />{repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1 font-mono text-xs text-text-muted">
          <GitFork size={11} />{repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}

function LanguageBar({ languages }: { languages: Record<string, number> }) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  const sorted = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const colors = ['bg-neon-cyan', 'bg-neon-violet', 'bg-neon-pink', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'];

  return (
    <div className="space-y-3">
      <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
        {sorted.map(([lang, count], i) => (
          <motion.div key={lang} className={cn('h-full rounded-full', colors[i])} initial={{ width: 0 }} whileInView={{ width: (count / total * 100) + '%' }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }} />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {sorted.map(([lang, count], i) => (
          <div key={lang} className="flex items-center gap-1.5">
            <span className={cn('w-2 h-2 rounded-full', colors[i])} />
            <span className="font-mono text-xs text-text-secondary">{lang}</span>
            <span className="font-mono text-xs text-text-muted">{Math.round(count / total * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => <div key={i} className="h-32 rounded-2xl bg-glass-bg border border-glass-border" />)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => <div key={i} className="h-28 rounded-xl bg-glass-bg border border-glass-border" />)}
      </div>
    </div>
  );
}

export function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetch_stats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/' + site.githubUsername),
          fetch('https://api.github.com/users/' + site.githubUsername + '/repos?per_page=100&sort=updated')
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');
        const user: GithubUser = await userRes.json();
        const allRepos: GithubRepo[] = await reposRes.json();
        const totalStars = allRepos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const topLanguages = allRepos.reduce<Record<string, number>>((acc, r) => {
          if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
          return acc;
        }, {});
        setStats({ user, repos: allRepos.slice(0, 6), totalStars, topLanguages });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetch_stats();
  }, []);

  return (
    <section id="github" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-custom">
        <SectionHeading eyebrow="~/github" title="GitHub Activity" description="Live data pulled directly from the GitHub API" />

        {loading && <Skeleton />}

        {error && (
          <div className={cn('p-6 rounded-2xl text-center', 'bg-glass-bg border border-neon-pink/30', 'text-text-secondary')}>
            <p className="font-mono text-sm mb-3">Could not load GitHub stats right now.</p>
            <a href={'https://github.com/' + site.githubUsername} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-neon-cyan hover:underline">
              Visit github.com/{site.githubUsername} directly
            </a>
          </div>
        )}

        {stats && (
          <div className="space-y-8">
            <Reveal direction="up" delay={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard icon={<BookOpen size={18} />} label="public repos" value={stats.user.public_repos} color="text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20" />
                <StatCard icon={<Star size={18} />} label="total stars" value={stats.totalStars} color="text-neon-violet bg-neon-violet/10 border-neon-violet/20" />
                <StatCard icon={<Users size={18} />} label="followers" value={stats.user.followers} color="text-neon-pink bg-neon-pink/10 border-neon-pink/20" />
                <StatCard icon={<GitFork size={18} />} label="following" value={stats.user.following} color="text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20" />
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className={cn('p-6 rounded-2xl', 'bg-glass-bg border border-glass-border backdrop-blur-glass')}>
                <h3 className="font-mono text-xs text-neon-cyan tracking-widest uppercase mb-4">top languages</h3>
                <LanguageBar languages={stats.topLanguages} />
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div>
                <h3 className="font-mono text-xs text-neon-cyan tracking-widest uppercase mb-4">recent repositories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stats.repos.map((repo, i) => (
                    <motion.div key={repo.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                      <RepoCard repo={repo} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
