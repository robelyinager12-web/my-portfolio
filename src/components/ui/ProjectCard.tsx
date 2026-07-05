'use client';

import { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[14px] border border-line bg-paper-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-22px_rgba(21,23,27,0.28)]">
      <div
        className="relative h-40 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B1D27, #2B2840 55%, #16323A)' }}
      >
        <svg viewBox="0 0 300 160" className="absolute inset-0 h-full w-full opacity-55">
          <polygon points="40,20 120,40 90,110 20,90" fill="none" stroke={project.accentColor} strokeWidth={1} />
          <polygon points="160,15 260,35 230,120 150,100" fill="none" stroke={project.accentColor} strokeWidth={1} />
        </svg>
        <span className="absolute bottom-3 left-3.5 font-mono text-[11px] tracking-wide text-[#CFD2E6]">
          /{project.slug}
        </span>
      </div>
      <div className="px-[22px] pb-6 pt-[22px]">
        <h3 className="mb-2 font-display text-lg font-semibold">{project.title}</h3>
        <p className="mb-4 text-[14.5px] leading-relaxed text-ink-2">{project.description}</p>
        <div className="mb-[18px] flex flex-wrap gap-[7px]">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-[5px] border border-line px-2 py-1 font-mono text-[11px] text-ink-3">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-[18px]">
          <a href={project.liveUrl} className="flex items-center gap-1 font-mono text-[12.5px] text-indigo-deep hover:underline">
            Live demo
          </a>
          <a href={project.repoUrl} className="flex items-center gap-1 font-mono text-[12.5px] text-indigo-deep hover:underline">
            Source code
          </a>
        </div>
      </div>
    </article>
  );
}
