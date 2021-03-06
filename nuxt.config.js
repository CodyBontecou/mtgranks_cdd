import axios from 'axios'
const getKhmRatings = () =>
  import('./data/lolahman/khm.json').then((m) => m.default || m)

const setObjects = [
  {
    name: 'Kaldheim',
    code: 'KHM',
    icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/khm.svg',
    cardCount: '220',
    color: 'black-gold',
    type: 'new',
    slug: 'kaldheim',
    isChecked: false,
    label: 'KHM',
    filterType: 'set',
    retrieved: false,
  },
  // {
  //   name: 'Zendikar Rising',
  //   code: 'ZNR',
  //   icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
  //   cardCount: '220',
  //   color: 'black-gold',
  //   type: 'new',
  //   slug: 'zendikar-rising',
  //   isChecked: false,
  //   label: 'ZNR',
  //   filterType: 'set',
  //   retrieved: false,
  // },
  // {
  //   name: 'Ikoria: Lair of Behemoths',
  //   code: 'IKO',
  //   icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/iko.svg',
  //   cardCount: '264',
  //   color: 'orange-red',
  //   type: 'new',
  //   slug: 'ikoria-lair-of-behemoths',
  //   isChecked: false,
  //   label: 'IKO',
  //   filterType: 'set',
  //   retrieved: false,
  // },
  // {
  //   name: 'Core 2021',
  //   code: 'M21',
  //   icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m21.svg',
  //   cardCount: '264',
  //   color: 'black-green',
  //   type: 'new',
  //   slug: 'core-2021',
  //   isChecked: false,
  //   label: 'M21',
  //   filterType: 'set',
  //   retrieved: false,
  // },
  // {
  //   name: 'Theros Beyond Death',
  //   code: 'THB',
  //   icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
  //   cardCount: '220',
  //   color: 'ash',
  //   type: 'old',
  //   slug: 'theros-beyond-death',
  //   isChecked: false,
  //   label: 'THB',
  //   filterType: 'set',
  //   retrieved: false,
  // },
  // {
  //   name: 'Throne of Eldraine',
  //   code: 'ELD',
  //   icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/eld.svg',
  //   cardCount: '264',
  //   color: 'teal',
  //   type: 'old',
  //   slug: 'throne-of-eldraine',
  //   isChecked: false,
  //   label: 'ELD',
  //   filterType: 'set',
  //   retrieved: false,
  // },
  // {
  //   name: 'Core 2020',
  //   code: 'M20',
  //   icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m20.svg',
  //   cardCount: '264',
  //   color: 'mandarin',
  //   type: 'old',
  //   slug: 'core-2020',
  //   isChecked: false,
  //   label: 'M20',
  //   filterType: 'set',
  //   retrieved: false,
  // },
  // {
  //   name: 'War of the Spark',
  //   code: 'WAR',
  //   icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/war.svg',
  //   cardCount: '264',
  //   color: 'peach',
  //   type: 'old',
  //   slug: 'war-of-the-spark',
  //   isChecked: false,
  //   label: 'WAR',
  //   filterType: 'set',
  //   retrieved: false,
  // },
]

const ratingReasons = [
  {
    rating: 'A',
    reason:
      'Best cards in the format. Bombs. Completely changes the game in your favor. Will almost single handedly win you the game.',
  },
  {
    rating: 'B',
    reason:
      "These cards are amazing. Efficient removal. Overstatted creatures. Powerful manasinks. Anything that is above the curve for it's manacost.",
  },
  {
    rating: 'C',
    reason:
      'Cards that are fine on curve. You are not very excited to play them but not sad to play them either. Most of your deck will probably consist of cards in this rank. Sometimes, cards in this rank will not make the cut for the final deck.',
  },
  {
    rating: 'D',
    reason:
      'Ranges from medium to bad filler; cards in this tier get cut a lot and require specific decks to be good playables - if your deck really needs a 2 drop, you have specific synergy with the card or the card fills a weakness the deck has for example.',
  },
  {
    rating: 'F',
    reason:
      "Unplayable. These cards can't even fill out the gaping holes in your curve. Cards that hurt you more than they help you.",
  },
]

const validKeys = [
  'name',
  'lang',
  'image_uris',
  'card_faces',
  'colors',
  'set',
  'set_name',
  'prices',
  'purchase_uris',
]

function generateSlug(string) {
  return string
    .replace(/[/:.,']/g, '')
    .replace(/ /g, '-')
    .replace(/--/g, '-')
    .toLowerCase()
}

export default {
  target: 'static',

  head: {
    title: 'Limited Set Review | Mtgranks | Magic the Gathering',
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
          'Mtgranks provides Magic the Gathering card ratings for the limited sealed and draft formats. Cards are given a rating alongside a description explaining the power and weakness of each card. Content is provided by famous MTG pros.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/og_meta.png',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Mtgranks Magic the Gathering limited set reviews.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/og_meta.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Mtgranks Magic the Gathering limited set reviews.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  },

  css: [],

  plugins: [
    { src: '~/plugins/Vuelidate' },
    { src: '~/plugins/vue-disqus' },
    { src: '~/plugins/cypress', ssr: false },
  ],

  components: false,

  buildModules: ['@nuxtjs/tailwindcss', '@/modules/sitemapRouteGenerator'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/router-extras',
    '@nuxtjs/sitemap',
  ],

  router: {},

  axios: {},

  storybook: {},

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

  sitemap: {
    hostname: 'https://mtgranks.netlify.app/',
  },
  generate: {
    crawler: false,
    async routes() {
      const routesToGenerate = []
      let i
      const khmRatings = await getKhmRatings()
      const khmSet = khmRatings[0]['Set']

      for (i = 0; i < setObjects.length; i++) {
        const set = setObjects[i]
        let cards = []

        await axios
          .get(
            `https://api.scryfall.com/cards/search?q=set:${set.code}+is:booster`
          )
          .then((res) => {
            cards.push(...res.data.data)
            return axios.get(res.data.next_page)
          })
          .then((response) => {
            cards.push(...response.data.data)

            cards = cards.map((card) => {
              Object.keys(card).forEach(
                (key) => validKeys.includes(key) || delete card[key]
              )
              card.slug = generateSlug(card.name)
              if (set.code === khmSet) {
                khmRatings.forEach((rating) => {
                  const ratingSlug = generateSlug(rating['Name'])
                  console.log(ratingSlug)
                  if (card.slug.includes(ratingSlug)) {
                    card.rating = [
                      {
                        rator: {
                          name: 'Justlolaman',
                        },
                        rating: rating['JustLolaman'],
                        reason: ratingReasons.find((r) =>
                          r.rating.includes(rating['JustLolaman'][0].charAt(0))
                        )['reason'],
                      },
                      {
                        rator: {
                          name: 'M0bieus',
                        },
                        rating: rating['M0bieus'],
                        reason: ratingReasons.find((r) =>
                          r.rating.includes(rating['M0bieus'][0].charAt(0))
                        )['reason'],
                      },
                      {
                        rator: {
                          name: 'Scottynada',
                        },
                        rating: rating['Scottynada'],
                        reason: ratingReasons.find((r) =>
                          r.rating.includes(rating['Scottynada'][0].charAt(0))
                        )['reason'],
                      },
                    ]
                  }
                })
              }
              return card
            })

            if (i === 0) {
              routesToGenerate.push({
                route: '/',
                payload: { set, cards },
              })
            }

            const setRoutes = {
              route: '/set/' + set.slug + '/',
              payload: { set, cards },
            }

            const cardRoutes = cards.map((card) => {
              return {
                route: '/set/' + set.slug + '/' + card.slug + '/',
                payload: { set, card, cards },
              }
            })

            routesToGenerate.push(setRoutes)
            routesToGenerate.push(...cardRoutes)
          })
      }
      return routesToGenerate
    },
  },

  build: {
    standalone: true,
    parallel: true,
    cache: true,
    html: {
      minify: {
        minifyCSS: false,
        minifyJS: false,
      },
    },
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },
}
