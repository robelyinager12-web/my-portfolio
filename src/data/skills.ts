import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    accent: 'indigo',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Three.js', 'Tailwind CSS', 'Redux', 'Framer Motion']
  },
  {
    title: 'Backend',
    accent: 'cyan',
    items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'JWT', 'OAuth', 'WebSockets']
  },
  {
    title: 'Databases',
    accent: 'violet',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Firebase']
  },
  {
    title: 'DevOps & Cloud',
    accent: 'ink',
    items: ['Git', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Linux', 'Nginx']
  },
  {
    title: 'Software Engineering',
    accent: 'indigo',
    items: ['System Design', 'Microservices', 'Design Patterns', 'Data Structures', 'Algorithms', 'Software Architecture']
  }
];