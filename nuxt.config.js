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
    title: 'Mtgranks | Magic the Gathering Card Rankings',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Mtgranks provides Magic the Gathering card ratings for the\n' +
          ' sealed and draft formats. Cards are given a rating alongside a description explaining the power and weakness of each card. Content is provided by famous MTG pros.',
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://nuxtjs.org',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'My amazing Nuxt application',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://nuxtjs.org/nuxt-card.png',
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxtjs.org',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'My amazing Nuxt application',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'The amazing Nuxt application that teaches me all the cool features of Nuxt',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxtjs.org/nuxt-card.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://nuxtjs.org/nuxt-card.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'NuxtJS',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/gtag.js'],

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

  router: {
    trailingSlash: true,
  },

  generate: {
    crawler: false,
    async routes() {
      const payloads = []

      for (const set of sets) {
        const { data } = await axios.get(
          `https://api.scryfall.com/cards/search?q=set:${set.code}+is:booster`
        )

        data.data.forEach((card) => {
          card.slug = card.name
            .replace(/[/:.,']/g, '')
            .replace(/ /g, '-')
            .toLowerCase()

          for (const uri in card.purchase_uris) {
            card.purchase_uris[uri] = card.purchase_uris[uri].replace(
              'utm_source=scryfall',
              'utm_source=mtgranks'
            )
          }
        })

        const cards = data.data
        console.log(cards[0].purchase_uris)
        const cardRoutes = data.data.map((card) => {
          return {
            route: `${set.slug}/${card.slug}`,
            payload: { card, cards, set, sets },
          }
        })
        payloads.push(...cardRoutes)

        const setRoutes = sets.map((set) => {
          return {
            route: `${set.slug}`,
            payload: { cards, set, sets },
          }
        })
        payloads.push(...setRoutes)
      }

      return payloads
    },
  },
}
