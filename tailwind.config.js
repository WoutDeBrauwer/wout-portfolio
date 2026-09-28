/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Accenten: violet → roze → koraal als verloop, mint voor "nu/live"
        iris: '#9A86FF',
        rose: '#FF6FB1',
        coral: '#FF8466',
        mint: '#48E3B6',
        dark: '#111014',    // Pagina-achtergrond (licht violet getint zwart)
        panel: '#1a1820',   // Kaarten en vlakken
        line: 'rgba(255, 255, 255, 0.14)', // Dunne randen en lijnen
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        brand: 'linear-gradient(100deg, #9A86FF 0%, #FF6FB1 50%, #FF8466 100%)',
      },
    },
  },
  plugins: [],
}
