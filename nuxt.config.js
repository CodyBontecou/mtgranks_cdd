import axios from 'axios'

const sets = [
  {
    name: 'Zendikar Rising',
    code: 'ZNR',
    icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
    cardCount: '220',
    color: 'black-gold',
    type: 'new',
    slug: 'zendikar-rising',
  },
  {
    name: 'Ikoria: Lair of Behemoths',
    code: 'IKO',
    icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/iko.svg',
    cardCount: '264',
    color: 'orange-red',
    type: 'new',
    slug: 'ikoria-lair-of-behemoths',
  },
  {
    name: 'Core 2021',
    code: 'M21',
    icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m21.svg',
    cardCount: '264',
    color: 'black-green',
    type: 'new',
    slug: 'core-2021',
  },
  {
    name: 'Theros Beyond Death',
    code: 'THB',
    icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
    cardCount: '220',
    color: 'ash',
    type: 'old',
    slug: 'theros-beyond-death',
  },
  {
    name: 'Throne of Eldraine',
    code: 'ELD',
    icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/eld.svg',
    cardCount: '264',
    color: 'teal',
    type: 'old',
    slug: 'throne-of-eldraine',
  },
  {
    name: 'Core 2020',
    code: 'M20',
    icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m20.svg',
    cardCount: '264',
    color: 'mandarin',
    type: 'old',
    slug: 'core-2020',
  },
  {
    name: 'War of the Spark',
    code: 'WAR',
    icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/war.svg',
    cardCount: '264',
    color: 'peach',
    type: 'old',
    slug: 'war-of-the-spark',
  },
]

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mtgranks',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  storybook: {
    // Options
  },

  i18n: {
    baseUrl: 'https://mtgranks.com',
    lazy: true,
    seo: false,
    detectBrowserLanguage: {
      useCookie: true,
    },
    langDir: 'lang/',
    defaultLocale: 'en',
    parsePages: false,
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en-US.js',
      },
    ],
  },

  generate: {
    async routes() {
      const data = []

      for (const set of sets) {
        const response = await axios
          .get(
            `https://api.scryfall.com/cards/search?q=set:${set.code}+is:booster`
          )
          .then((cards) => {
            return cards.data.data.map((card) => {
              set.slug = set.name
                .replace(/[/:.,']/g, '')
                .replace(/ /g, '-')
                .toLowerCase()
              card.slug = card.name
                .replace(/[/:.,']/g, '')
                .replace(/ /g, '-')
                .toLowerCase()
              return {
                route: `${set.slug}/${card.slug}`,
                payload: { card, cards, set },
              }
            })
          })
        data.push(response)
      }
      const final = [].concat(...data)
      console.log(final[0])
      return [].concat(...data).flat()
    },
  },
}
