/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
        '7xl': '58px',
        '3xl': '32px',
        '5xl': '48px',
        '2xl': '21px',
        'base': '14px',
      },
    extend: {
      fontFamily: {
        customFont: ['"Catamaran"', 'sans-serif'],
        customFont: ['"Lato"', 'sans-serif'],
        customFont: ['"Mazzard"', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      size: {
        '128': '30%',
        '100': '31%',
        '110': '15%',
      },
      padding: {
        '18': '75px',
        '22': '90px',
        '26': '108px',
      },
      colors: {
        'dark-blue': '#222F5E',
        'orange': '#FF7D56',
        'purple': '#6100C1',
        'light-blue': '#6ED2EF',
        'lime': '#B2D93A',
        'yellow': '#FDCF3F',
        'amber': '#FDCF3F',
        'blue': '#4F94FB',
      },
      content: {
        'quote': 'url("../src/images/quote.svg")',
        'vector-blue': 'url("../src/images/vector-blue.svg")',
        'vector-orange': 'url("../src/images/vector-orange.svg")',
        'vector-yellow': 'url("../src/images/vector-yellow.svg")',
      },
    },
  },
  plugins: [],
}
