<template>
  <div>
    <Header :set="set" :card="card" page="mtgSet" />
    <div class="mx-20">
      <!--      <div v-if="cards.length === 0">-->
      <!--        <Loading />-->
      <!--      </div>-->
      <!--      <Column v-else class="mt-10" :cards="cards" color="Green"></Column>-->
      <CardRow
        v-for="(card, i) in cards"
        :key="i"
        :card="card"
        class="mb-2"
        :class="{ 'mt-10': i === 0 }"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'wideHeader',
  async asyncData({ payload, params, $axios }) {
    if (payload) {
      console.log(`payload of _card:  ${JSON.stringify(payload.card)}`)
      return { card: payload.card, cards: payload.cards, set: payload.set }
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
      const response = await $axios.$get(
        `https://api.scryfall.com/cards/search?q=set:${set.code}+is:booster`
      )
      response.data.forEach(
        (card) =>
          (card.slug = card.name
            .replace(/[/:.,']/g, '')
            .replace(/ /g, '-')
            .toLowerCase())
      )
      const cards = response.data
      const card = cards.find((card) => card.slug === params.card)

      return { card, cards, set, sets }
    }
  },
  // destroyed() {
  //   this.$store.commit('setCard', null)
  // },
  head: {
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
  },
}
</script>
