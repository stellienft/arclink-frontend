/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'jet': '#080808',
        'carbon': '#0F0F0E',
        'soft-white': '#E7E6E6',
        'orange': {
          DEFAULT: '#FB5005',
          hover: '#e04504',
        },
        'electric-blue': '#2075FE',
        'neon-green': '#1AC153',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
