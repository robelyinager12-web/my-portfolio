'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const whyChooseMe = [
  { emoji: '⚡', title: 'Lightning Fast', desc: 'Performance-first development. Every project is optimized for Core Web Vitals, minimal bundle size, and sub-second load times from day one.', color: '#F59E0B', bg: 'rgba(15,25,35,0.9)', lineColor: '#00E5FF' },
  { emoji: '🔒', title: 'Security First', desc: 'JWT auth, input sanitization, rate limiting, CORS hardening — security is baked into every layer of the stack, never bolted on at the end.', color: '#8B5CF6', bg: 'rgba(20,12,35,0.9)', lineColor: '#8B5CF6' },
  { emoji: '📐', title: 'Clean Architecture', desc: 'Modular, documented, readable code. Built for teams, not just demos. Your future developers will thank you for choosing maintainable structure.', color: '#EC4899', bg: 'rgba(25,12,25,0.9)', lineColor: '#EC4899' },
  { emoji: '🤝', title: 'Transparent Process', desc: 'Weekly updates, staging previews, and open communication throughout. You are never left wondering what is happening with your project.', color: '#F97316', bg: 'rgba(25,18,8,0.9)', lineColor: '#F59E0B' },
  { emoji: '🚀', title: 'On-Time Delivery', desc: 'Deadlines are commitments. Milestone-based delivery keeps projects on track — if something changes, you are the first to know.', color: '#00E5FF', bg: 'rgba(8,25,30,0.9)', lineColor: '#00E5FF' },
  { emoji: '♾️', title: 'Long-Term Support', desc: 'Post-launch support available for every project. Bug fixes, feature additions, and performance audits — I am here long after go-live.', color: '#3B82F6', bg: 'rgba(8,15,35,0.9)', lineColor: '#3B82F6' }
];

const coreCapabilities = [
  {
    num: 'I',
    title: 'Optimized Workflow',
    desc: 'My development experience is powered by modern tooling — VS Code extensions like Emmet, IntelliCode, and Prettier keep code clean, fast, and maintainable.',
    cat: 'DevOps',
    gradient: 'linear-gradient(135deg,#0ea5e9,#6366f1)',
    fullDetail: {
      overview: 'An optimized development workflow is the backbone of every high-quality project I deliver. By combining battle-tested tooling with modern engineering practices, I ensure that every line of code is intentional, readable, and built to scale.',
      points: [
        'VS Code with extensions: Emmet, IntelliCode, Prettier, ESLint, GitLens',
        'Git branching strategies: feature branches, pull requests, semantic commits',
        'Automated code formatting and linting on every save and commit',
        'Task runners and build pipelines using npm scripts and Webpack/Vite',
        'Consistent folder structures and naming conventions across all projects',
        'Documentation-first approach — README files, JSDoc comments, API docs'
      ],
      tools: ['VS Code', 'Git', 'ESLint', 'Prettier', 'Vite', 'Webpack', 'npm']
    }
  },
  {
    num: 'II',
    title: 'Integrated Interfaces',
    desc: 'I create seamless connections between user interfaces and backend systems, enabling smooth, secure data exchange from dynamic form handling to custom API paths.',
    cat: 'Full Stack',
    gradient: 'linear-gradient(135deg,#8B5CF6,#EC4899)',
    fullDetail: {
      overview: 'Full integration between frontend and backend is where great applications are born. I architect systems where data flows seamlessly from database to UI — with zero friction, real validation, and meaningful error handling at every layer.',
      points: [
        'RESTful API design following industry best practices and OpenAPI standards',
        'Axios and React Query for efficient, cached, and optimistic data fetching',
        'Real-time data sync using WebSockets and Socket.io for live features',
        'Form handling with React Hook Form and Zod/Yup schema validation',
        'JWT and OAuth2 authentication flows with secure token management',
        'Error boundary patterns and graceful degradation for resilient UIs'
      ],
      tools: ['React Query', 'Axios', 'Socket.io', 'React Hook Form', 'Zod', 'JWT', 'OAuth2']
    }
  },
  {
    num: 'III',
    title: 'Client-Centric Delivery',
    desc: 'Every project is delivered with precision and purpose — on time, completely aligned with your targets, and built to leave a lasting modern impression.',
    cat: 'Delivery',
    gradient: 'linear-gradient(135deg,#10b981,#3b82f6)',
    fullDetail: {
      overview: 'Client satisfaction is not a feature — it is the foundation. I approach every engagement with clear communication, structured milestones, and a relentless focus on delivering exactly what was promised, when it was promised.',
      points: [
        'Detailed project scoping and written specifications before a single line of code',
        'Weekly progress updates with staging previews via Vercel preview deployments',
        'Milestone-based delivery with client sign-off at each phase',
        'Responsive communication — questions answered within hours, not days',
        'Post-delivery walkthrough and documentation handoff included in every project',
        'Satisfaction revisions within agreed scope at no additional cost'
      ],
      tools: ['Vercel', 'Notion', 'Slack', 'Loom', 'GitHub Projects', 'Figma']
    }
  },
  {
    num: 'IV',
    title: 'Developer-Centric',
    desc: 'Built for uptime and impact: backend systems running on structured code with an emphasis on rock-solid reliability that builds user confidence.',
    cat: 'Backend',
    gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    fullDetail: {
      overview: 'I build backend systems that are not just functional — they are maintainable, testable, and production-hardened. Every API I write is designed for the next developer who touches it, not just to pass a deadline.',
      points: [
        'Node.js and Express with clean MVC and service-layer architecture',
        'NestJS for large-scale enterprise applications requiring strict structure',
        'Comprehensive error handling, logging with Winston and Morgan',
        'Unit and integration testing with Jest and Supertest',
        'API rate limiting, CORS configuration, and helmet.js for security',
        'Database transactions and rollback strategies for data integrity'
      ],
      tools: ['Node.js', 'Express', 'NestJS', 'Jest', 'Supertest', 'Winston', 'Helmet.js']
    }
  },
  {
    num: 'V',
    title: 'Real-Time Updates',
    desc: 'I deploy full-stack applications with real-time updates and low latency metrics, ensuring users instantly experience data changes without reload delays.',
    cat: 'Full Stack',
    gradient: 'linear-gradient(135deg,#00E5FF,#8B5CF6)',
    fullDetail: {
      overview: 'Modern applications demand instant feedback. I implement real-time architectures that keep every connected user in sync — from live chat and notifications to collaborative editing and live dashboards.',
      points: [
        'WebSocket implementation using Socket.io with room-based event architecture',
        'Server-Sent Events (SSE) for one-way real-time data streams',
        'Redis Pub/Sub for scalable real-time messaging across multiple server instances',
        'Optimistic UI updates with React Query for instant perceived performance',
        'Live notifications and activity feeds with read/unread state management',
        'Real-time form collaboration and conflict resolution strategies'
      ],
      tools: ['Socket.io', 'Redis', 'React Query', 'Server-Sent Events', 'WebSockets', 'MongoDB Change Streams']
    }
  },
  {
    num: 'VI',
    title: '24/7 Uptime Layouts',
    desc: 'I deliver applications optimized for continuous availability, high performance, and reliable server-side asset rendering under heavy networking traffic.',
    cat: 'DevOps',
    gradient: 'linear-gradient(135deg,#ec4899,#f97316)',
    fullDetail: {
      overview: 'Downtime is not an option. I architect and deploy applications built for continuous availability — with monitoring, auto-scaling, and failover strategies that keep your platform running under any load.',
      points: [
        'Deployment on Vercel, AWS EC2, and Railway with zero-downtime deploys',
        'Docker containerization for consistent environments across dev, staging, and production',
        'Nginx reverse proxy configuration with SSL termination and load balancing',
        'Health check endpoints and automated restart policies with PM2',
        'CDN integration for static asset delivery at global edge locations',
        'Uptime monitoring with automated alerts and incident response procedures'
      ],
      tools: ['Vercel', 'AWS', 'Docker', 'Nginx', 'PM2', 'Railway', 'Cloudflare CDN']
    }
  },
  {
    num: 'VII',
    title: 'Fully Responsive',
    desc: 'Fluid layouts built cleanly to scale elegantly across smartphone screens, tablets, and wide high-definition monitors using pure modern CSS logic.',
    cat: 'Frontend',
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    fullDetail: {
      overview: 'Every interface I build works flawlessly on any screen — from a 320px smartphone to a 4K ultrawide monitor. Mobile-first is not a checkbox; it is how I think from the first line of CSS.',
      points: [
        'Mobile-first CSS methodology with progressive enhancement for larger screens',
        'Tailwind CSS utility-first approach with custom breakpoints and design tokens',
        'Fluid typography using clamp() for seamless text scaling across all viewports',
        'CSS Grid and Flexbox mastery for complex, pixel-perfect responsive layouts',
        'Touch-friendly interaction targets and swipe gesture support on mobile',
        'Cross-browser testing on Chrome, Firefox, Safari, and Edge before delivery'
      ],
      tools: ['Tailwind CSS', 'CSS Grid', 'Flexbox', 'clamp()', 'Bootstrap', 'BrowserStack']
    }
  },
  {
    num: 'VIII',
    title: 'Creative UI/UX Design',
    desc: 'I design intuitive interfaces with custom gradients, interactive layers, and light-weight vector graphics that elevate user engagement and brand presence.',
    cat: 'Frontend',
    gradient: 'linear-gradient(135deg,#f43f5e,#ec4899)',
    fullDetail: {
      overview: 'I bridge the gap between design and engineering — translating concepts into pixel-perfect, animated interfaces that delight users and reinforce your brand identity at every interaction point.',
      points: [
        'Figma-to-code workflows with precise implementation of design systems',
        'Framer Motion animations for smooth, physics-based micro-interactions',
        'Three.js and WebGL for immersive 3D visual experiences in the browser',
        'Custom SVG illustrations and animated icons for brand differentiation',
        'Accessibility-first design — WCAG 2.1 AA compliance on every project',
        'Dark mode implementation with CSS variables and system preference detection'
      ],
      tools: ['Figma', 'Framer Motion', 'Three.js', 'GSAP', 'SVG', 'CSS Variables']
    }
  },
  {
    num: 'IX',
    title: 'Full-Stack Integration',
    desc: 'Connecting secure databases, robust server layers, and interactive front-ends into one unified application package designed for high-velocity user scaling.',
    cat: 'Full Stack',
    gradient: 'linear-gradient(135deg,#10b981,#00E5FF)',
    fullDetail: {
      overview: 'I own the entire stack — from database schema to pixel-perfect UI — delivering cohesive, well-integrated applications where every layer speaks efficiently to the next.',
      points: [
        'End-to-end type safety with TypeScript across frontend, backend, and database',
        'Prisma ORM for type-safe database queries with automated migrations',
        'tRPC for end-to-end typesafe APIs without code generation',
        'Monorepo setups with Turborepo for shared packages and consistent tooling',
        'CI/CD pipelines with GitHub Actions for automated testing and deployment',
        'Environment management with secrets, staging, and production separation'
      ],
      tools: ['TypeScript', 'Prisma', 'tRPC', 'Turborepo', 'GitHub Actions', 'PostgreSQL', 'MongoDB']
    }
  }
];

const filterTabs = ['All', 'Frontend', 'Backend', 'Full Stack', 'DevOps', 'Delivery'];

export function Services() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<typeof coreCapabilities[0] | null>(null);
  const filtered = activeFilter === 'All' ? coreCapabilities : coreCapabilities.filter(c => c.cat === activeFilter);

  return (
    <section id="services" style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 0% 50%,rgba(0,229,255,0.04) 0%,transparent 60%),radial-gradient(ellipse at 100% 50%,rgba(236,72,153,0.04) 0%,transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(0,229,255,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#00E5FF', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>✦ WHAT I OFFER</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 600, lineHeight: 1.15, marginBottom: '16px' }}>
            <span style={{ color: '#ffffff' }}>My </span>
            <span style={{ background: 'linear-gradient(90deg,#8B5CF6,#00E5FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Services</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '560px', margin: '0 auto 28px', lineHeight: 1.6 }}>End-to-end digital solutions engineered with precision, creativity, and relentless attention to performance.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '14px 28px', borderRadius: '50px', background: 'rgba(255,255,255,0.03)', maxWidth: 'fit-content', margin: '0 auto' }}>
            {[['⚡','Fast Delivery','#F59E0B'],['🔒','Secure by Default','#8B5CF6'],['📐','Clean Architecture','#00E5FF'],['🤝','Full Ownership Transfer','#EC4899']].map(([icon,text,color])=>(
              <span key={text as string} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter', fontSize: '13px', color: color as string }}><span>{icon}</span>{text as string}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '50px', background: 'rgba(245,158,11,0.06)', fontFamily: 'Inter', fontSize: '11px', color: '#F59E0B', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>🏆 WHY CHOOSE ME</span>
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
            Built Different. <span style={{ color: '#00E5FF' }}>Delivered Better.</span>
          </h3>
          <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>Six commitments I bring to every single project — no exceptions, no excuses.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '16px', marginBottom: '80px' }}>
          {whyChooseMe.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} whileHover={{ y: -6 }} style={{ padding: '32px', borderRadius: '16px', background: item.bg, cursor: 'default', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', gap: '16px' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'}>
              <div style={{ fontSize: '36px', lineHeight: 1 }}>{item.emoji}</div>
              <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '18px', color: '#ffffff', margin: 0 }}>{item.title}</h4>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#94A3B8', lineHeight: 1.7, margin: 0, flex: 1 }}>{item.desc}</p>
              <div style={{ height: '3px', width: '48px', borderRadius: '2px', background: item.lineColor }} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 600, marginBottom: '12px' }}>
            <span style={{ color: '#ffffff' }}>Core </span>
            <span style={{ color: '#00E5FF' }}>Capabilities</span>
          </h3>
          <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '480px', margin: '0 auto 24px' }}>Nine pillars of excellence. Click any card to explore full details.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {filterTabs.map(tab => (
              <button key={tab} onClick={() => setActiveFilter(tab)} style={{ padding: '8px 18px', borderRadius: '50px', border: 'none', fontFamily: 'Inter', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s', background: activeFilter === tab ? 'linear-gradient(90deg,#00E5FF,#8B5CF6)' : 'rgba(255,255,255,0.05)', color: activeFilter === tab ? '#000000' : '#94A3B8', fontWeight: activeFilter === tab ? 600 : 400 }}>
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px' }}>
            {filtered.map((item, i) => (
              <motion.div key={item.num} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -6, scale: 1.02 }} style={{ position: 'relative', padding: '28px', borderRadius: '16px', background: 'rgba(20,14,35,0.8)', overflow: 'hidden', cursor: 'default', transition: 'all 0.35s' }}
                onMouseEnter={e => {
                  const d = e.currentTarget as HTMLDivElement;
                  d.style.background = item.gradient;
                  d.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
                  const btn = d.querySelector('.readmore-btn') as HTMLButtonElement | null;
                  if (btn) { btn.style.background = 'rgba(255,255,255,0.2)'; btn.style.color = '#ffffff'; btn.style.borderColor = 'rgba(255,255,255,0.4)'; }
                }}
                onMouseLeave={e => {
                  const d = e.currentTarget as HTMLDivElement;
                  d.style.background = 'rgba(20,14,35,0.8)';
                  d.style.boxShadow = 'none';
                  const btn = d.querySelector('.readmore-btn') as HTMLButtonElement | null;
                  if (btn) { btn.style.background = 'transparent'; btn.style.color = '#00E5FF'; btn.style.borderColor = 'rgba(0,229,255,0.2)'; }
                }}>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '40px', color: '#ffffff', opacity: 0.25, marginBottom: '16px', lineHeight: 1 }}>{item.num}</div>
                <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '17px', color: '#ffffff', marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, marginBottom: '20px' }}>{item.desc}</p>
                <button
                  className="readmore-btn"
                  onClick={() => setSelected(item)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '50px', border: '1px solid rgba(0,229,255,0.2)', background: 'transparent', color: '#00E5FF', fontFamily: 'Inter', fontSize: '12px', cursor: 'pointer', transition: 'all 0.25s' }}>
                  Read more →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(5,8,22,0.85)', backdropFilter: 'blur(8px)' }} />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }} transition={{ type: 'spring', stiffness: 280, damping: 25 }} style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 201, width: '90%', maxWidth: '680px', maxHeight: '85vh', overflowY: 'auto', borderRadius: '24px', background: '#0B1120', padding: '40px', boxShadow: '0 24px 80px rgba(0,0,0,0.6)' }}>

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '48px', background: selected.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '8px' }}>{selected.num}</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '50px', background: 'rgba(0,229,255,0.08)', fontFamily: 'Inter', fontSize: '11px', color: '#00E5FF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>{selected.cat}</div>
                  <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '26px', color: '#ffffff', margin: 0 }}>{selected.title}</h2>
                </div>
                <button onClick={() => setSelected(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#94A3B8', flexShrink: 0, transition: 'all 0.2s' }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(255,255,255,0.1)'; b.style.color = '#ffffff'; }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = 'rgba(255,255,255,0.05)'; b.style.color = '#94A3B8'; }}>
                  <X size={16} />
                </button>
              </div>

              <div style={{ height: '2px', width: '100%', background: selected.gradient, borderRadius: '1px', marginBottom: '28px' }} />

              <p style={{ fontFamily: 'Inter', fontSize: '15px', color: '#94A3B8', lineHeight: 1.75, marginBottom: '28px' }}>{selected.fullDetail.overview}</p>

              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: '#ffffff', marginBottom: '16px' }}>What this includes</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {selected.fullDetail.points.map((point, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 16px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E5FF', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontFamily: 'Inter', fontSize: '14px', color: '#CDD5E0', lineHeight: 1.6 }}>{point}</span>
                  </motion.div>
                ))}
              </div>

              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: '#ffffff', marginBottom: '14px' }}>Tools & Technologies</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {selected.fullDetail.tools.map(tool => (
                  <span key={tool} style={{ padding: '6px 14px', borderRadius: '50px', background: 'rgba(0,229,255,0.08)', fontFamily: 'Inter', fontSize: '12px', fontWeight: 500, color: '#00E5FF' }}>{tool}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#contact" onClick={() => setSelected(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '50px', background: 'linear-gradient(90deg,#00E5FF,#8B5CF6)', color: '#000000', fontFamily: 'Inter', fontWeight: 600, fontSize: '14px', textDecoration: 'none', transition: 'all 0.25s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(0,229,255,0.4)'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'}>
                  Start a Project →
                </a>
                <button onClick={() => setSelected(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: '#94A3B8', fontFamily: 'Inter', fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = 'rgba(255,255,255,0.25)'; b.style.color = '#ffffff'; }}
                  onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = 'rgba(255,255,255,0.12)'; b.style.color = '#94A3B8'; }}>
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
