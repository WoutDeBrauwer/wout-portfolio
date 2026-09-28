/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Accenten: indigo → blauw → mint als verloop, oranje als los accent
        iris: '#7C8CFF',
        azure: '#38BDF8',
        coral: '#FF8A4C',
        mint: '#48E3B6',
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
        brand: 'linear-gradient(100deg, #7C8CFF 0%, #38BDF8 50%, #48E3B6 100%)',
      },
    },
  },
  plugins: [],
}
