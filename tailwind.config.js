/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  corePlugins: {
    preflight: false,  
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'heading': ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      'global': ['Work Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
    },
    fontSize: {
      16: '16px',
      18: '18px',
      20: '20px',
      24:'24px',
      32: '32px',
      48:'48px',
      64: '64px',
    },
    lineHeight: {
      content: '25px',
      auto:'initial',
      0: '0px', 
      15: '15px',
      16: '16px',
      19: '19px', 
      20: '20px',
      22: '22px', 
      24: '24px', 
      26: '26px',
      40: '40px'
  },
    extend: {
      colors: {
        primary: '#28ee9a',
        textColor:'#333333',
      },
      width: {
        2: '2px',
        6: '6px',
      },
      height: {
        1: '1px',
        2: '2px',
        6: '6px',
        10:'10px',
        16:'16px',
        650:'650px',
      },
      borderRadius: {
        37:'37px',
      },
      margin: {
        20: '20px',
        30: '30px',
        40: '40px',
        50:'50px',
        60: '60px',
        70: '70px',
        80: '80px',
        90:'90px',
        100:'100px',
      },
      padding: {
        20: '20px',
        30: '30px',
        35: '35px',
        55: '55px',
        60: '60px',
        70: '70px',
        80: '80px',
        90:'90px',
        100:'100px',
      },
      inset: {
        'inherit': 'inherit',
        8: '8px',
        'minus_5':'-5px'
      },
      boxShadow: {
        'pagiation-Shadow-active': '0 0 0px 7px rgba(40, 238, 154, 0.3)',
        'pagiation-Shadow': '0 0 0px 0px rgba(40, 238, 154, 0.3)',
      },
      maxWidth: {
        150: '150px',
        200: '200px',
      },
      screens: {
        small : { 'max': '575px' },
        smallMin: { 'min': '640px' },
        md: { 'max': '768px' },
        mdMin: { 'max': '769px' },
        tablet: { 'max': '1024px' }, 
        tabletMin: { 'min': '1025px' }, 
        large: { 'max': '1199px' },
        largeMin: { 'min': '1200' }, 
        xl: { 'max': '1299px' },
        xlMin: { 'min': '1200px' },
        laptop: { 'max': '1499px' },
        mainscreenmin: { 'min': '1499px' },
        mainscreenmax: { 'max': '1600px' },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
          '.container-fluid': {
              maxWidth: '100%',
        },
      })
  }
  ], 
}

