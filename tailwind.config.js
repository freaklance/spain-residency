/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'spanish-red': '#AA151B',
        'spanish-yellow': '#F1BF00',
      }
    },
  },
  plugins: [],
};