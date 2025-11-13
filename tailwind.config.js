/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFE600', // Yellow accent color
        dark: '#111111',    // Almost black
        light: '#FFFFFF',   // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif font
      },
    },
  },
  plugins: [],
}
