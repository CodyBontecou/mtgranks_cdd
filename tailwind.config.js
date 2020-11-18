module.exports = {
  theme: {
    extend: {
      colors: {
        charcoal: '#264653',
        'persian-green': '#2A9D8F',
        gray: {
          1: '#f2f2f2',
        },
        ash: '#264653',
        teal: '#2A9D8F',
        mandarin: '#F4A261',
        peach: '#E76F51',
      },
      spacing: {
        6: '1.5rem',
        14: '14px',
        20: '20px',
        22: '22px',
        38: '38px',
        66: '66px',
        170: '170px',
      },
      lineHeight: {
        12: '12px',
        18: '18px',
        21: '21px',
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
      },
      borderRadius: {
        10: '10px',
      },
      boxShadow: {
        1: '0px 0.892729px 2.67819px rgba(0, 0, 0, 0.05), 0px 10px 20px rgba(0, 0, 0, 0.15)',
      },
      minHeight: {
        8: '8px',
      },
      minWidth: {
        8: '8px',
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
