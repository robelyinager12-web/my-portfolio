import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading eyebrow="~/experience" title="Where I've worked." />

        <div className="relative max-w-[760px]">
          <div className="absolute bottom-1.5 left-[7px] top-1.5 w-px bg-line-strong" />

          {experience.map((item, i) => (
            <Reveal key={item.role + item.period} delay={i * 0.08}>
              <div className="relative mb-12 pl-[38px] last:mb-0">
                <span className="absolute left-0 top-[5px] z-[1] h-[15px] w-[15px] rounded-full border-2 border-indigo bg-paper" />

                <p className="mb-1.5 font-mono text-[12.5px] text-cyan-deep">
                  {item.period}
                </p>
                <h3 className="font-display text-[18.5px] font-semibold">
                  {item.role}
                </h3>
                <p className="mb-3 mt-0.5 font-mono text-sm text-ink-3">
                  {item.company} · {item.location}
                </p>
                <ul className="space-y-1.5 text-[14.5px] leading-relaxed text-ink-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-[18px] before:absolute before:left-0 before:top-[3px] before:text-xs before:text-ink-3 before:content-['→']"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}