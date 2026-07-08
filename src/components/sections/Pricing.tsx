'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Star, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    tier: 'STARTER',
    name: 'Light Investment',
    desc: 'Ideal for individuals and small businesses who need a clean, professional online presence without a large upfront commitment.',
    icon: Zap,
    color: 'text-neon-cyan',
    border: 'border-white/10 hover:border-neon-cyan/40',
    glow: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]',
    badge: null,
    features: [
      'Responsive Landing Page',
      'UI/UX Design',
      'Contact Form',
      'Basic SEO Setup',
      'Mobile Optimized',
      '1 Month Support'
    ]
  },
  {
    tier: 'PROFESSIONAL',
    name: 'Moderate Investment',
    desc: 'Best for growing businesses that need a full-stack product with secure authentication, a database, and a polished admin interface.',
    icon: Star,
    color: 'text-neon-violet',
    border: 'border-neon-violet/40',
    glow: 'shadow-[0_0_40px_rgba(139,92,246,0.15)]',
    badge: '⭐ Most Popular',
    features: [
      'Full React Frontend',
      'Node.js + Express Backend',
      'MongoDB / PostgreSQL Database',
      'JWT Authentication',
      'REST API Development',
      'Admin Dashboard',
      'Deployment to Vercel/AWS',
      '3 Months Support'
    ]
  },
  {
    tier: 'ENTERPRISE',
    name: 'Premium Investment',
    desc: 'For organisations requiring a complete, scalable, enterprise-grade system with real-time features, CI/CD, security auditing, and long-term dedicated support.',
    icon: Building,
    color: 'text-neon-pink',
    border: 'border-white/10 hover:border-neon-pink/40',
    glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]',
    badge: null,
    features: [
      'Full-Stack Architecture',
      'Real-Time + WebSockets',
      'Custom CMS / Dashboard',
      'CI/CD Pipeline',
      'Security Audit',
      'Performance Optimization',
      'Multi-Environment Deploy',
      'Docker + AWS Infrastructure',
      '6 Months Support'
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-tight mb-4">
            <span className="text-white">Transparent </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-pink">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. Investment scales with scope and complexity.
            <span className="text-neon-cyan"> Reach out for a tailored quote.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isPopular = plan.badge !== null;
            return (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={cn(
                  'relative rounded-2xl p-7 border transition-all duration-300',
                  isPopular
                    ? 'bg-gradient-to-b from-neon-violet/15 to-neon-pink/10'
                    : 'bg-white/3',
                  plan.border,
                  plan.glow
                )}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet text-black font-mono font-bold text-xs">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', isPopular ? 'bg-neon-violet/20' : 'bg-white/5')}>
                      <Icon size={20} className={plan.color} />
                    </div>
                    <span className={cn('font-mono text-xs font-bold tracking-widest uppercase', plan.color)}>
                      {plan.tier}
                    </span>
                  </div>
                  <h3 className={cn('font-display font-black text-2xl mb-3', plan.color)}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={cn('w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0', isPopular ? 'bg-neon-violet/20' : 'bg-white/5')}>
                        <Check size={12} className={plan.color} />
                      </div>
                      <span className="font-mono text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                
                  href="#contact"
                  className={cn(
                    'flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-mono font-bold text-sm transition-all duration-300',
                    isPopular
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-violet text-black hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:scale-105'
                      : 'border-2 border-white/20 text-white hover:border-neon-violet/60 hover:text-neon-violet'
                  )}
                >
                  Get Started →
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-12 p-6 rounded-2xl bg-white/3 border border-white/8 text-center max-w-2xl mx-auto">
          <p className="font-mono text-sm text-gray-400 mb-3">
            Not sure which plan fits your needs?
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono font-bold text-neon-cyan hover:text-neon-violet transition-colors duration-200">
            Let us discuss your project requirements →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
