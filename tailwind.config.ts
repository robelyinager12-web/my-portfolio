import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050816',
          secondary: '#0B1120',
          card: 'rgba(255,255,255,0.03)'
        },
        neon: {
          cyan: '#00FFFF',
          violet: '#8B5CF6',
          pink: '#EC4899',
          'cyan-dim': 'rgba(0,255,255,0.15)',
          'violet-dim': 'rgba(139,92,246,0.15)',
          'pink-dim': 'rgba(236,72,153,0.15)'
        },
        glass: {
          border: 'rgba(255,255,255,0.08)',
          'border-strong': 'rgba(139,92,246,0.35)',
          bg: 'rgba(255,255,255,0.04)',
          'bg-strong': 'rgba(139,92,246,0.08)'
        },
        text: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
          muted: '#475569'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      backgroundImage: {
        'gradient-neon':
          'linear-gradient(90deg, #00FFFF, #8B5CF6, #EC4899)',
        'gradient-neon-diagonal':
          'linear-gradient(135deg, #00FFFF, #8B5CF6 50%, #EC4899)',
        'gradient-card':
          'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(0,255,255,0.04))',
        'gradient-hero':
          'radial-gradient(ellipse at top, rgba(139,92,246,0.15) 0%, rgba(5,8,22,0) 70%)'
      },
      keyframes: {
        gradflow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(139,92,246,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139,92,246,0.7), 0 0 60px rgba(0,255,255,0.2)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        rotate3d: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
        }
      },
      animation: {
        gradflow: 'gradflow 4s ease infinite',
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
        rotate3d: 'rotate3d 20s linear infinite',
        orbit: 'orbit 8s linear infinite'
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,255,255,0.4), 0 0 40px rgba(0,255,255,0.1)',
        'neon-violet': '0 0 20px rgba(139,92,246,0.4), 0 0 40px rgba(139,92,246,0.1)',
        'neon-pink': '0 0 20px rgba(236,72,153,0.4), 0 0 40px rgba(236,72,153,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
        'glass-strong': '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)'
      },
      backdropBlur: {
        xs: '2px',
        glass: '12px',
        strong: '20px'
      }
    }
  },
  plugins: []
};

export default config;