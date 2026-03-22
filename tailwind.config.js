/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        slate: {
          850: '#1a2234',
          900: '#111827',
          950: '#0a0f1a',
        },
        amber: {
          350: '#fcd47a',
          450: '#f5b942',
        },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        growX: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--tw-width)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease both',
        fadeIn: 'fadeIn 0.4s ease both',
        growX: 'growX 1s ease both',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
