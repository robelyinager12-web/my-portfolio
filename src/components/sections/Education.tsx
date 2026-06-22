import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { education } from '@/data/education';

export function Education() {
  return (
    <section id="education" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="~/education"
          title="Education & certifications."
          description="Formal study and credentials that underpin the engineering practice."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-xl border border-line bg-paper-3 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_16px_30px_-18px_rgba(21,23,27,0.2)]">
                <p className="font-mono text-xs text-cyan-deep">{item.period}</p>
                <h3 className="mt-2.5 font-display text-base font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-mono text-[12.5px] text-ink-3">
                  {item.institution}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}