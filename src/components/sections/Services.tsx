import { Code2, Monitor, Server, Database, Cloud } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/services';
import { Service } from '@/types';

const iconMap: Record<Service['icon'], React.ReactNode> = {
  fullstack: <Code2 size={28} />,
  frontend: <Monitor size={28} />,
  backend: <Server size={28} />,
  database: <Database size={28} />,
  cloud: <Cloud size={28} />
};

export function Services() {
  return (
    <section id="services" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="~/services"
          title="What I can do for you."
          description="End-to-end capability across the full product lifecycle — from first line of code to production deployment."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <div className="group h-full rounded-xl border border-line bg-paper-3 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo/30 hover:shadow-[0_20px_40px_-20px_rgba(67,57,202,0.2)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo/[0.08] text-indigo transition-colors duration-300 group-hover:bg-indigo/[0.15]">
                  {iconMap[service.icon]}
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold">{service.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-ink-2">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}