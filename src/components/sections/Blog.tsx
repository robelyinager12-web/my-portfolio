'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { blogPosts } from '@/data/blog';

function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(dateStr));
}

export function Blog() {
  return (
    <section id="blog" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="~/blog"
          title="Latest writing."
          description="Thoughts on engineering, architecture, and the tools I use day to day."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-line bg-paper-3 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-indigo/30 hover:shadow-[0_16px_30px_-18px_rgba(67,57,202,0.2)]"
              >
                <div className="flex items-center gap-3 font-mono text-xs text-ink-3">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readMinutes} min read</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-indigo-deep">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-5">
                  <span className="font-mono text-[12.5px] text-indigo-deep">
                    Read article →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}