/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Accenten: paars → blauw → teal (appelblauwzeegroen) als verloop, iris als indigo tussentint
        iris: '#7C8CFF',
        azure: '#38BDF8',
        violet: '#B07CFF',
        teal: '#2DD4BF',
        dark: '#0F1115',    // Pagina-achtergrond (licht blauw getint zwart)
        panel: '#171A21',   // Kaarten en vlakken
        line: 'rgba(255, 255, 255, 0.14)', // Dunne randen en lijnen
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        brand: 'linear-gradient(100deg, #B07CFF 0%, #38BDF8 50%, #2DD4BF 100%)',
      },
    },
  },
  plugins: [],
}
