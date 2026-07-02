import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-apis-with-nodejs',
    title: 'Building Scalable APIs with Node.js',
    excerpt:
      'Patterns and best practices for structuring Express and Node.js APIs that stay maintainable as your codebase and team size grow — from folder structure to error handling.',
    date: '2026-04-12',
    readMinutes: 7,
    url: '#',
    tag: 'Backend'
  },
  {
    slug: 'nextjs-performance-optimization',
    title: 'Next.js Performance Optimization',
    excerpt:
      'Practical techniques for cutting load times in Next.js apps — covering image optimization, server vs client components, caching strategies, and Core Web Vitals.',
    date: '2026-03-02',
    readMinutes: 9,
    url: '#',
    tag: 'Frontend'
  },
  {
    slug: 'modern-database-design-principles',
    title: 'Modern Database Design Principles',
    excerpt:
      'How to choose between relational and document databases, design schemas that age well, and avoid the common pitfalls that slow down applications as data grows.',
    date: '2026-01-18',
    readMinutes: 8,
    url: '#',
    tag: 'Database'
  },
  {
    slug: 'software-architecture-best-practices',
    title: 'Software Architecture Best Practices',
    excerpt:
      'Lessons learned from building production systems — keeping codebases decoupled, testable, and easy for the next engineer to pick up without a lengthy handover.',
    date: '2025-11-30',
    readMinutes: 10,
    url: '#',
    tag: 'Engineering'
  }
];