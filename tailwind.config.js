module.exports = {
  theme: {
    extend: {
      colors: {
        charcoal: '#264653',
        'persian-green': '#2A9D8F',
        gray: {
          1: '#f2f2f2',
        },
        column: {
          red: '#E76F51',
          green: '#2A9D8F',
          blue: '#E76F51',
          black: '#E76F51',
          white: '#E76F51',
          multi: '#E76F51',
          colorless: '#E76F51',
          lands: '#E76F51',
        },
      },
      spacing: {
        6: '1.5rem',
        14: '14px',
        20: '20px',
        38: '38px',
        66: '66px',
        170: '170px',
      },
      lineHeight: {
        12: '12px',
        18: '18px',
        21: '21px',
        29: '29px',
        130: '130%',
        160: '160%',
      },
      fontSize: {
        '2xs': '9px',
        10: '10px',
        12: '12px',
        18: '18px',
      },
      borderRadius: {
        10: '10px',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
}
