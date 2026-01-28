import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada no Brasanitas mas com verde/teal
        primary: {
          DEFAULT: '#0f4c5c', // Azul-petróleo escuro (como o navy do Brasanitas)
          light: '#1a6b7c',
          dark: '#0a3640',
          50: '#e6f3f5',
          100: '#cce7eb',
          200: '#99cfd7',
          300: '#66b7c3',
          400: '#339faf',
          500: '#0f4c5c',
          600: '#0d424f',
          700: '#0a3640',
          800: '#082a32',
          900: '#051e24',
        },
        secondary: {
          DEFAULT: '#10b981', // Verde esmeralda vibrante
          light: '#34d399',
          dark: '#059669',
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
        },
        accent: {
          DEFAULT: '#22c55e', // Verde WhatsApp
          light: '#4ade80',
          dark: '#16a34a',
        },
        teal: {
          DEFAULT: '#14b8a6', // Teal vibrante para destaques
          light: '#2dd4bf',
          dark: '#0d9488',
        },
        cyan: {
          DEFAULT: '#06b6d4', // Ciano para variedade
          light: '#22d3ee',
          dark: '#0891b2',
        },
        mint: {
          DEFAULT: '#6ee7b7', // Menta suave
          light: '#a7f3d0',
          dark: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0f4c5c 0%, #1a6b7c 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0f4c5c 0%, #0a3640 50%, #082a32 100%)',
        'gradient-cta': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-card': 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
