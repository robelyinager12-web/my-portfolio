import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { stats } from '@/data/site';

export function About() {
  return (
    <section id="about" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading eyebrow="~/about" title="From idea to production." />

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
            <div className="space-y-[18px] text-[16.5px] leading-relaxed text-ink-2">
              <p>
                I&apos;m a <strong className="font-semibold text-ink">full-stack engineer and MERN
                developer</strong> who enjoys owning a feature from the database schema to the
                pixel on screen. My recent work leans on <strong className="font-semibold text-ink">
                Next.js and TypeScript</strong> for the frontend, <strong className="font-semibold text-ink">
                Node.js and Express</strong> for the API layer, and a mix of{' '}
                <strong className="font-semibold text-ink">MongoDB, PostgreSQL and MySQL</strong>{' '}
                depending on what the data actually needs.
              </p>
              <p>
                I&apos;m especially drawn to interfaces that feel alive — interactive 3D scenes
                built with <strong className="font-semibold text-ink">Three.js</strong>, smooth
                motion, and details that make a product feel considered rather than templated.
                Outside of pure features, I care about clean architecture, readable code, and
                shipping things that are easy for the next engineer to pick up.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-line bg-line">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-paper-3 px-[22px] py-[26px]">
                  <div className="font-display text-[32px] font-semibold">
                    <span className="bg-gradient-to-r from-indigo to-cyan bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <div className="mt-1.5 font-mono text-xs text-ink-3">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}