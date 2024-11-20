/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index2.html',
    './myjs.js',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#09090b',
        background: '#f9f9fb',
        primary: '#6d66a3',
        secondary: '#a49dcd',
        accent: '#7b72c0',
      },

      fontFamily: {
        turret: ['"Turret Road"', 'sans-serif'],
      },

      fontSize: {
        sm: '0.600rem',
        base: '0.8rem',
        xl: '1.066rem',
        '2xl': '1.421rem',
        '3xl': '1.894rem',
        '4xl': '2.525rem',
        '5xl': '3.366rem',
      },

      boxShadow: {
        'primary': '0px 4px 6px rgba(109, 102, 163, 0.5)',
        'secondary': '0px 4px 6px rgba(164, 157, 205, 0.5)',
      },

      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}
