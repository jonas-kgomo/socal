// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: { 
        socarl: {
         100: '#fffaf0',
         200: '#feebc8',
         300: '#FFDAA5',
         400: '#f6ad55',
         500: '#ed8936',
         600: '#dd6b20',
         700: '#c05621',
         800: '#9c4221',
         900: '#7b341e',
         },
       },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { tablet }

      'md': '1024px',
      // => @media (min-width: 1024px) { laptop }

      'lg': '1280px',
      // => @media (min-width: 1280px) { 4k display }
    },
    
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
}