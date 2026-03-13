/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        panel: 'rgba(255, 255, 255, 0.05)',
        accent: '#8b5cf6', // Violet
        'accent-bright': '#c4b5fd',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right bottom, #4c1d95, #1e1b4b, #000000)',
      }
    },
  },
  plugins: [],
}
