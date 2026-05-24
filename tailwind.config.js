/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d9ff',
        'primary-dark': '#00a8cc',
        secondary: '#ff006e',
        accent: '#8338ec',
        'bg-dark': '#0a0e27',
        'bg-secondary': '#16213e',
        'bg-tertiary': '#0f3460',
        'text-light': '#e8e8e8',
        'text-muted': '#a8a8a8',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease forwards',
        fadeIn: 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
