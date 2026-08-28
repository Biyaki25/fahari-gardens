/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF6ED',
        sand: '#EFE4CC',
        forest: {
          DEFAULT: '#1E3B2A',
          light: '#2F5240',
          dark: '#132A1D',
        },
        clay: {
          DEFAULT: '#9C3B1C',
          light: '#B65330',
        },
        gold: {
          DEFAULT: '#C1932A',
          light: '#DCB768',
        },
        charcoal: '#241F1A',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1320px',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(30, 59, 42, 0.35)',
        card: '0 10px 30px -12px rgba(36, 31, 26, 0.25)',
      },
      keyframes: {
        drawline: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        draw: 'drawline 2.4s ease forwards',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}
