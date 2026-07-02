import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'cyan',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Three.js',
      'Tailwind CSS',
      'Redux',
      'Framer Motion',
      'HTML5',
      'CSS3'
    ]
  },
  {
    title: 'Backend',
    color: 'violet',
    items: [
      'Node.js',
      'Express.js',
      'NestJS',
      'REST APIs',
      'GraphQL',
      'JWT Auth',
      'OAuth 2.0',
      'WebSockets',
      'Socket.io'
    ]
  },
  {
    title: 'Databases',
    color: 'pink',
    items: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Prisma ORM',
      'Firebase',
      'Mongoose'
    ]
  },
  {
    title: 'DevOps & Cloud',
    color: 'cyan',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Vercel',
      'AWS',
      'CI/CD',
      'Linux',
      'Nginx'
    ]
  },
  {
    title: 'Software Engineering',
    color: 'violet',
    items: [
      'System Design',
      'Microservices',
      'Design Patterns',
      'Data Structures',
      'Algorithms',
      'Software Architecture',
      'Agile / Scrum',
      'Code Review'
    ]
  }
];