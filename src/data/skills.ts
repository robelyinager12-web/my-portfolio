import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'cyan',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend',
    color: 'violet',
    items: ['Node.js', 'NestJS', 'Express.js', 'Firebase', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Databases',
    color: 'pink',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis']
  },
  {
    title: 'Tools & DevOps',
    color: 'cyan',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Postman', 'VS Code']
  },
  {
    title: 'Cloud & Hosting',
    color: 'violet',
    items: ['AWS', 'Google Cloud', 'Firebase', 'Vercel', 'Netlify']
  },
  {
    title: 'AI & ML',
    color: 'pink',
    items: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn']
  }
];
