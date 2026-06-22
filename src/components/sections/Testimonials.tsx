import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="~/testimonials"
          title="What people say."
          description="Feedback from people I've built things with."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-line bg-paper-3 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_16px_30px_-18px_rgba(21,23,27,0.2)]">
                <div>
                  <span
                    className="block font-display text-5xl leading-none text-indigo opacity-30"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-ink-3">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}