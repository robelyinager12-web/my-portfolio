'use client';

import { FormEvent, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { site, socialLinks } from '@/data/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

const iconMap: Record<string, React.ReactNode> = {
  email: <Mail size={16} />,
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />
};

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-lg border border-line bg-paper-3 px-3.5 py-3 text-[14.5px] text-ink outline-none transition-colors placeholder:text-ink-3 focus:border-indigo';

  return (
    <section id="contact" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="~/contact"
              title="Let's build something."
            />
            <p className="mb-8 max-w-[400px] text-[16.5px] leading-relaxed text-ink-2">
              Open to full-stack roles and freelance projects involving React,
              Next.js, Node.js and interactive 3D work. The fastest way to
              reach me is email.
            </p>
            <div className="flex flex-col gap-5">
              {socialLinks.map((link) => (
                
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-mono text-sm transition-colors hover:text-indigo-deep"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-paper-3 text-ink-3 transition-colors group-hover:border-indigo/30 group-hover:text-indigo">
                    {iconMap[link.label] ?? <Mail size={16} />}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] text-ink-3">{link.label}</span>
                    <span className="text-ink">{link.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="name" className="mb-[7px] block font-mono text-xs text-ink-3">
                    name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="mb-[7px] block font-mono text-xs text-ink-3">
                    email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-[7px] block font-mono text-xs text-ink-3">
                  subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project enquiry / job opportunity / just saying hi"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-[7px] block font-mono text-xs text-ink-3">
                  message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about the project, role, or idea..."
                  className={`${inputClass} min-h-[140px] resize-y`}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-1.5 inline-flex w-fit items-center gap-2 rounded-[7px] bg-ink px-6 py-3 font-mono text-sm text-paper transition-all hover:bg-indigo-deep hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={15} />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'success' && (
                <p className="font-mono text-xs text-[#1F8A4C]">
                  Message sent — I&apos;ll reply to you at {site.email} soon.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-xs text-[#C0392B]">
                  Something went wrong. Email me directly at{' '}
                  <a href={`mailto:${site.email}`} className="underline">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}