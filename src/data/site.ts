import { NavLink, SocialLink, Stat } from '@/types';

export const site = {
  name: 'Robel Yinager',
  handle: 'robel.yinager',
  initials: 'RY',
  role: 'Full-Stack Developer',
  roles: [
    'Full-Stack Developer',
    'Software Engineer',
    'MERN Stack Developer',
    'Backend Engineer',
    'Frontend Developer',
    'Problem Solver'
  ],
  bio: 'Creative Full-Stack Web Developer who turns ideas into seamless digital experiences — crafting intuitive frontends with React/Next.js and robust backends with Node.js and PostgreSQL. Curious, self-driven, and always learning.',
  bio2: 'Currently pursuing B.Sc. Software Engineering at University of Injibara, Ethiopia. Specializing in MERN stack solutions, RESTful APIs, and scalable web architecture.',
  location: 'Injibara, Ethiopia',
  locationFlag: '🇪🇹',
  yearsExperience: '2+',
  projectsCompleted: '20+',
  technologiesUsed: '20+',
  hoursOfCoding: '5000+',
  email: 'robelyinager12@gmail.com',
  phone: '+251 990 004 044',
  resumeUrl: '/resume.pdf',
  avatarUrl: '/avatar.jpg',
  githubUsername: 'robelyinager12-web',
  githubUrl: 'https://github.com/robelyinager12-web',
  linkedinUrl: 'https://www.linkedin.com/in/robel-yinager-943b37419/',
  portfolioUrl: 'https://robelyinager12-web.vercel.app',
  available: true
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' }
];

export const socialLinks: SocialLink[] = [
  { label: 'github', href: 'https://github.com/robelyinager12-web', handle: 'github.com/robelyinager12-web', icon: 'github' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/robel-yinager-943b37419/', handle: 'linkedin.com/in/robel-yinager', icon: 'linkedin' },
  { label: 'email', href: 'mailto:robelyinager12@gmail.com', handle: 'robelyinager12@gmail.com', icon: 'email' }
];

export const stats: Stat[] = [
  { value: '20+', label: 'projects completed' },
  { value: '2+', label: 'years experience' },
  { value: '20+', label: 'technologies' },
  { value: '100%', label: 'passion' }
];

export const typedStatuses: string[] = [
  'available for new projects',
  'open to full-time roles',
  'building something awesome',
  'shipping great software'
];

export const terminalLines = {
  whoami: 'robel_yinager — full-stack developer',
  location: 'injibara, ethiopia 🇪🇹',
  frontend: 'react, next.js, typescript, tailwind',
  backend: 'node.js, express, nestjs',
  database: 'postgresql, mongodb, mysql',
  status: 'available for new projects'
};
