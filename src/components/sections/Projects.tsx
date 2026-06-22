import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-[120px]">
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHeading
          eyebrow="~/projects"
          title="Selected work."
          description="A handful of projects that show the range — from data-heavy backends to interactive 3D interfaces."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}