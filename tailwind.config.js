/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFE600', // Geel accent, spaarzaam gebruiken
        dark: '#131313',    // Pagina-achtergrond
        panel: '#1b1b1b',   // Kaarten en vlakken
        line: 'rgba(255, 255, 255, 0.14)', // Dunne randen en lijnen
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
