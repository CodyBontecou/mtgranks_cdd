module.exports = {
  theme: {
    extend: {
      colors: {
        charcoal: '#264653',
        'persian-green': '#2A9D8F',
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
