import type { Config } from 'tailwindcss';

function withOpacity(varName: string) {
  return ({ opacityValue }: { opacityValue?: string }) =>
    opacityValue !== undefined
      ? `rgb(var(${varName}) / ${opacityValue})`
      : `rgb(var(${varName}))`;
}

// Tailwind’s type definitions don’t like the function-based color generator used here.
// Runtime output is still valid (it becomes a string), so we cast the generator values.
const config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: withOpacity('--color-paper') as unknown as string,
          2: withOpacity('--color-paper-2') as unknown as string,
          3: withOpacity('--color-paper-3') as unknown as string
        },
        ink: {
          DEFAULT: withOpacity('--color-ink') as unknown as string,
          2: withOpacity('--color-ink-2') as unknown as string,
          3: withOpacity('--color-ink-3') as unknown as string
        },
        line: withOpacity('--color-line') as unknown as string,
        'line-strong': withOpacity('--color-line-strong') as unknown as string,
        indigo: {
          DEFAULT: withOpacity('--color-indigo') as unknown as string,
          deep: withOpacity('--color-indigo-deep') as unknown as string
        },
        violet: withOpacity('--color-violet') as unknown as string,
        cyan: {
          DEFAULT: withOpacity('--color-cyan') as unknown as string,
          deep: withOpacity('--color-cyan-deep') as unknown as string
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
} satisfies Config;

export default config;

