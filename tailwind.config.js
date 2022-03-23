const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge:[
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    zIndex:{
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
    },
    screens:{
      'xs': '361px',
      'sm': '640px',
      'md': '768px',
      'md-lg': '955px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'min-1170': '1170px'
    },
    container: {
      'padding': {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      'colors': {
        'blueGray': {
          ...colors.slate,
          50: '#F6FAFF',
          100: '#E9F0FA',
        },
        'lightBlue': colors.sky,
        'redGray': colors.redGray,
        'cyan': colors.cyan,
        'teal': {
          50: '#F0FCFD',
          100: '#DFF5F6',
          200: '#C2EFF2',
          300: '#A4E8ED',
          400: '#62D3DB',
          500: '#21C3CF',
          600: '#11ABB7',
          700: '#008A95',
          800: '#046B73',
          900: '#04545A'
        },
        'sky':{
          50: '#F0FCFD',
          100: '#D6EEF8',
          200: '#B8E3F5',
          300: '#94D6F2',
          400: '#5CB7DD',
          500: '#2A99C8',
          600: '#097EAE',
          700: '#006E9D',
          800: '#005B83',
          900: '#004968'
        },
        'amber':{
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        'theme':{
          'red':'#DA552F',
          'hamburger': '#4b587c'
        },
        'rose':{
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337'
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}