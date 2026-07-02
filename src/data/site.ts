import { NavLink, SocialLink, Stat } from '@/types';

export const site = {
  name: 'Robel Yinager',
  handle: 'robel.yinager',
  initials: 'RY',
  role: 'Full-Stack Engineer & Software Developer',
  roles: [
    'Full Stack Developer',
    'Software Engineer',
    'MERN Stack Developer',
    'Backend Engineer',
    'Frontend Architect',
    'Problem Solver'
  ],
  bio: 'I am a passionate Full Stack Developer and Software Engineer dedicated to creating scalable, secure, and user-centered applications. My expertise spans frontend development, backend architecture, database design, API development, cloud deployment, and modern software engineering practices.',
  bio2: 'I enjoy transforming complex business requirements into elegant technical solutions and continuously learning emerging technologies. Based in Injibara, Ethiopia — building world-class software from East Africa.',
  location: 'Injibara, Ethiopia',
  locationFlag: '🇪🇹',
  yearsExperience: '3+',
  projectsCompleted: '20+',
  technologiesUsed: '15+',
  hoursOfCoding: '5000+',
  email: 'robelyinager12@gmail.com',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/avatar.jpg',
  githubUsername: 'robelyinager12-web',
  available: true
};

export const navLinks: NavLink[] = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'services', href: '#services' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' }
];

export const socialLinks: SocialLink[] = [
  {
    label: 'github',
    href: 'https://github.com/robelyinager12-web',
    handle: 'github.com/robelyinager12-web',
    icon: 'github'
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/robel-yinager-943b37419/',
    handle: 'linkedin.com/in/robel-yinager',
    icon: 'linkedin'
  },
  {
    label: 'email',
    href: 'mailto:robelyinager12@gmail.com',
    handle: 'robelyinager12@gmail.com',
    icon: 'email'
  }
];

export const stats: Stat[] = [
  { value: '3+', label: 'years experience' },
  { value: '20+', label: 'projects completed' },
  { value: '15+', label: 'technologies' },
  { value: '5000+', label: 'hours coding' }
];

export const typedStatuses: string[] = [
  'available for work',
  'building something awesome',
  'open to opportunities',
  'shipping great software'
];

export const terminalLines = {
  whoami: 'robel_yinager — full-stack engineer',
  location: 'injibara, ethiopia 🇪🇹',
  frontend: 'react, next.js, typescript, three.js',
  backend: 'node.js, express, nestjs',
  database: 'mongodb, postgresql, mysql',
  status: 'available for new projects'
};