<template>
  <div>
    <Header :set="set" :card="card" page="mtgSet" />
    <div class="mx-20">
      <div v-if="cards.length === 0">
        <Loading />
      </div>
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
import { mapGetters } from 'vuex'

export default {
  layout: 'wideHeader',
  async fetch({ payload, store, params }) {
    if (payload) {
      return { card: payload.card, cards: payload.cards, set: payload.set }
    } else {
      store.commit(
        'setSet',
        store.state.sets.find((set) => set.slug === params.set)
      )
      await store.dispatch('getCards', {
        name: 'Zendikar Rising',
        code: 'ZNR',
        icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
        cardCount: '220',
        color: 'black-gold',
        type: 'new',
        slug: 'zendikar-rising',
      })
    }
  },
  computed: {
    ...mapGetters(['card', 'cards', 'set']),
  },
  watch: {
    $route() {
      console.log('_id here')
    },
  },
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
