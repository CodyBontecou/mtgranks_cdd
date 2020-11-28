<template>
  <div>
    <Header :set="set" :card="card" page="mtgSet" />
    <div class="mx-20">
      <Column
        v-for="(color, i) in colors"
        :key="i"
        class="mt-10"
        :cards="cardsByColor(color)"
        :color="color"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'wideHeader',
  async asyncData({ payload, params, $axios }) {
    if (payload) {
      return {
        card: payload.card,
        cards: payload.cards,
        set: payload.set,
        sets: payload.sets,
      }
    } else {
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
      const set = sets.find((set) => set.slug === params.set)
      const { data } = await $axios.get(
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
      const card = cards.find((card) => card.slug === params.card)

      return { card, cards, set, sets }
    }
  },
  computed: {
    colors() {
      const temp = []
      this.cards.forEach((card) => {
        if (!this.isArrayInArray(temp, card.colors)) {
          temp.push(card.colors)
        }
      })
      return temp.filter((element) => {
        return element !== undefined
      })
    },
  },
  methods: {
    cardsByColor(color) {
      return this.cards.filter(
        (card) => JSON.stringify(card.colors) === JSON.stringify(color)
      )
    },
    isArrayInArray(arr, item) {
      const itemAsString = JSON.stringify(item)

      return arr.some((ele) => {
        return JSON.stringify(ele) === itemAsString
      })
    },
  },
  head() {
    return {
      title: `${this.card.name} | Mtgranks | MTG: Arena Card Rankings for Magic The Gathering | Rating Review`,
      link: [{ rel: 'icon', type: 'image/x-icon', href: `${this.set.icon}` }],
      meta: [
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: '#264653',
        },
        {
          hid: 'msapplication-navbutton-color',
          name: 'msapplication-navbutton-color',
          content: '#264653',
        },
        {
          hid: 'apple-mobile-web-app-status-bar-style',
          name: 'apple-mobile-web-app-status-bar-style',
          content: '#264653',
        },
      ],
    }
  },
}
</script>
