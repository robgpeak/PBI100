import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#f4eee7',
        navy: '#0f1b2d',
        charcoal: '#1c293f',
        gold: '#b8945f',
        'gold-soft': '#d4b27b',
        ivory: '#fbf6f0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        elegant: '0 24px 60px rgba(15, 27, 45, 0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
