/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,css,js}"],
  screens:{
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      colors: {
        gradient1: 'hsl(236, 72%, 79%)',
        gradient2: 'hsl(237, 63%, 64%)',

        veryLightGrayishBlue: 'hsl(240, 78%, 98%)',
        lightGrayishBlue: 'hsl(234, 14%, 74%)',
        grayishBlue: 'hsl(233, 13%, 49%)',
        darkGrayishBlue: 'hsl(232, 13%, 33%)',
      },
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
      }
    },
  },
  plugins: [],
}

