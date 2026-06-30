'use client';

import { useEffect, useState } from 'react';
import { Star, GitFork, BookOpen, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/data/site';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  avatar_url: string;
  bio: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
}

interface Stats {
  user: GitHubUser;
  repos: GitHubRepo[];
  totalStars: number;
  languages: Record<string, number>;
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-line bg-paper-3 p-6 text-center">
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo/[0.08] text-indigo">
        {icon}
      </div>
      <div className="font-display text-2xl font-semibold">
        <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
          {value}
        </span>
      </div>
      <p className="mt-1 font-mono text-xs text-ink-3">{label}</p>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-paper-2" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-28 rounded-xl bg-paper-2" />
        ))}
      </div>
    </div>
  );
}

export function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${site.githubUsername}`),
          fetch(`https://api.github.com/users/${site.githubUsername}/repos?per_page=100&sort=updated`)
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');
        const user: GitHubUser = await userRes.json();
        const repos: GitHubRepo[] = await reposRes.json();
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const languages = repos.reduce<Record<string, number>>((acc, repo) => {
          if (repo.language) {
            acc[repo.language] = (acc[repo.language] || 0) + 1;
          }
          return acc;
        }, {});
        setStats({ user, repos: repos.slice(0, 6), totalStars, languages });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <section id="github" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="~/github"
          title="GitHub activity."
          description="Live data pulled from the GitHub API."
        />
        {loading && <Skeleton />}
        {error && (
          <p className="font-mono text-sm text-ink-3">
            Could not load GitHub stats — visit{' '}
            <a
              href={`https://github.com/${site.githubUsername}`}
              className="text-indigo-deep underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/{site.githubUsername}
            </a>{' '}
            directly.
          </p>
        )}
        {stats && (
          <div className="space-y-8">
            <Reveal>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatCard icon={<BookOpen size={22} />} label="public repos" value={stats.user.public_repos} />
                <StatCard icon={<Star size={22} />} label="total stars" value={stats.totalStars} />
                <StatCard icon={<Users size={22} />} label="followers" value={stats.user.followers} />
                <StatCard
                  icon={<GitFork size={22} />}
                  label="top language"
                  value={Object.entries(stats.languages).sort((a, b) => b[1] - a[1])[0]?.[0] ?? ''}
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mb-4 font-display text-lg font-semibold">Recent repositories</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {stats.repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-xl border border-line bg-paper-3 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo/30"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-mono text-sm font-medium text-ink group-hover:text-indigo-deep">
                        {repo.name}
                      </h4>
                      {repo.language && (
                        <span className="shrink-0 rounded-full bg-indigo/[0.08] px-2 py-0.5 font-mono text-[10px] text-indigo-deep">
                          {repo.language}
                        </span>
                      )}
                    </div>
                    {repo.description && (
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-3 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="mt-auto flex items-center gap-4 pt-4 font-mono text-xs text-ink-3">
                      <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
