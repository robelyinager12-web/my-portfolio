import type { Config } from 'tailwindcss';

function withOpacity(varName: string) {
  return ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue !== undefined
      ? `rgb(var(${varName}) / ${opacityValue})`
      : `rgb(var(${varName}))`;
}

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: withOpacity('--color-paper'),
          2: withOpacity('--color-paper-2'),
          3: withOpacity('--color-paper-3')
        },
        ink: {
          DEFAULT: withOpacity('--color-ink'),
          2: withOpacity('--color-ink-2'),
          3: withOpacity('--color-ink-3')
        },
        line: withOpacity('--color-line'),
        'line-strong': withOpacity('--color-line-strong'),
        indigo: {
          DEFAULT: withOpacity('--color-indigo'),
          deep: withOpacity('--color-indigo-deep')
        },
        violet: withOpacity('--color-violet'),
        cyan: {
          DEFAULT: withOpacity('--color-cyan'),
          deep: withOpacity('--color-cyan-deep')
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      keyframes: {
        gradflow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' }
        },
        blink: {
          '50%': { opacity: '0' }
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(63,174,99,0.45)' },
          '70%': { boxShadow: '0 0 0 8px rgba(63,174,99,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(63,174,99,0)' }
        },
        'cursor-pulse': {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' }
        }
      },
      animation: {
        gradflow: 'gradflow 7s linear infinite',
        blink: 'blink 1.1s step-end infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
        'cursor-pulse': 'cursor-pulse 1.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;