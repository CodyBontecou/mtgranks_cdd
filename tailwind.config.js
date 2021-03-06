module.exports = {
  theme: {
    extend: {
      colors: {
        charcoal: '#264653',
        'persian-green': '#2A9D8F',
        gray: {
          1: '#f2f2f2',
          2: '#343436',
          3: '#F1F3F4',
          4: '#DDDDDD',
        },
        blue: {
          1: '#1A73E8',
        },
        ash: '#264653',
        teal: '#2A9D8F',
        mandarin: '#F4A261',
        peach: '#E76F51',
        earth: '#2D9CDB',
        white: '#ffffff',
        gold: '#E9C46A',
      },
      spacing: {
        6: '1.5rem',
        14: '14px',
        20: '20px',
        22: '22px',
        38: '38px',
        66: '66px',
        84: '24rem',
        104: '26rem',
        106: '106px',
        170: '170px',
        176: '44rem',
        divider: '400px',
        'divider-compact': '50px',
        drawer: '400px',
      },
      lineHeight: {
        12: '12px',
        18: '18px',
        21: '21px',
        26: '26px',
        29: '29px',
        42: '42px',
        130: '130%',
        160: '160%',
      },
      fontSize: {
        8: '8px',
        '2xs': '9px',
        10: '10px',
        12: '12px',
        14: '14px',
        18: '18px',
        22: '22px',
        24: '24px',
        36: '36px',
        44: '44px',
      },
      borderRadius: {
        4: '1rem',
        10: '10px',
      },
      boxShadow: {
        1: '0px 0.892729px 2.67819px rgba(0, 0, 0, 0.05), 0px 10px 20px rgba(0, 0, 0, 0.15)',
      },
      minHeight: {
        32: '32px',
        80: '80px',
      },
      maxHeight: {
        32: '32px',
        80: '80px',
        '1/2': '50%',
        'card-small': '204px;',
        'card-large': '60vh;',
      },
      minWidth: {
        32: '32px',
        80: '80px',
      },
      maxWidth: {
        32: '32px',
        80: '80px',
        drawer: '400px',
      },
      width: {
        drawer: '400px',
      },
      // For top, right, bottom, left
      inset: {
        10: '10px',
        18: '18px',
        23: '23px',
        91: '91px',
        92: '92px',
        180: '180px',
        215: '215px',
        227: '227px',
        275: '275px',
        drawer: '400px',
      },
      opacity: {
        30: '0.3',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
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
