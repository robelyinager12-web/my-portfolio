import { NavLink, SocialLink, Stat } from '@/types';

export const site = {
  name: 'Robel Yinager',
  handle: 'robel.yinager',
  role: 'Full-stack engineer, end to end.',
  roles: [
    'Full Stack Developer',
    'Software Engineer',
    'MERN Stack Developer',
    'Backend Engineer',
    'Frontend Architect',
    'Problem Solver'
  ],
  tagline:
    "I design and ship production-grade web applications — from interactive three.js interfaces to resilient APIs and databases. Currently focused on React, Next.js and TypeScript.",
  location: 'based in — your city',
  yearsExperience: '5+ yrs experience',
  email: 'hello@robelyinager.dev',
  resumeUrl: '/resume.pdf',
  githubUsername: 'robelyinager'
};

export const navLinks: NavLink[] = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' }
];

export const socialLinks: SocialLink[] = [
  { label: 'email', href: `mailto:${site.email}`, handle: site.email },
  { label: 'github', href: 'https://github.com/robelyinager', handle: 'github.com/robelyinager' },
  { label: 'linkedin', href: 'https://linkedin.com/in/robelyinager', handle: 'linkedin.com/in/robelyinager' }
];

export const stats: Stat[] = [
  { value: '5+', label: 'years building production software' },
  { value: '40+', label: 'projects shipped to production' },
  { value: '12', label: 'core technologies in daily use' },
  { value: '3', label: 'database engines worked with' }
];

export const typedStatuses: string[] = [
  'available for new projects_',
  'open to full-time roles_',
  'shipping something right now_'
];

export const terminalLines = {
  whoami: 'robel_yinager — full-stack engineer',
  frontend: 'react, next.js, typescript, three.js',
  backend: 'node.js, express',
  database: 'mongodb, postgresql, mysql'
};