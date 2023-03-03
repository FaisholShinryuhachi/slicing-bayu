/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*.{html,js}"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#F19B9B',
        secondary: '#88D7F8',
        tertiary: '#F2B84E'
      },
      screens: {
        '2xl': '1320px',
      },
      backgroundImage: {
        'footer': "url('../dist/img/Vector 3.png')",
      },
    },
  },
  plugins: [
  ],
}
