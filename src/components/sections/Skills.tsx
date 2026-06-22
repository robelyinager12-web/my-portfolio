import { SectionHeading } from '@/components/ui/SectionHeading';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="~/skills"
          title="Tools of the trade."
          description="Grouped by where they sit in the stack, not by how impressive they sound."
        />
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={i * 0.06}
              className={
                i === skillCategories.length - 1 && skillCategories.length % 2 !== 0
                  ? 'sm:col-span-2 lg:col-span-4'
                  : ''
              }
            >
              <div className="h-full rounded-xl border border-line bg-paper-3 px-[22px] py-[26px] transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_16px_30px_-18px_rgba(21,23,27,0.25)]">
                <h3 className="mb-3.5 font-display text-[16.5px] font-semibold">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Pill key={item} accent={category.accent}>
                      {item}
                    </Pill>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}