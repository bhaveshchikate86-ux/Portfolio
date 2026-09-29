/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#06080e',
          surface: '#0d1322',
          surfaceLight: '#141c30',
          card: 'rgba(13, 19, 34, 0.7)',
          accent: '#38bdf8',
          accentBlue: '#2563eb',
          electric: '#00d2ff',
          muted: '#94a3b8',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(56, 189, 248, 0.35)',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(56, 189, 248, 0.25)',
        'glow-md': '0 0 30px -5px rgba(56, 189, 248, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(37, 99, 235, 0.3)',
        'glow-avatar': '0 0 50px -5px rgba(56, 189, 248, 0.4), 0 0 90px 10px rgba(37, 99, 235, 0.25)',
        'inner-glow': 'inset 0 0 20px 0 rgba(56, 189, 248, 0.15)',
        'light-card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.03)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
