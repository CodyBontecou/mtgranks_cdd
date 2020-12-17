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
  async fetch() {
    this.$store.commit(
      'setSet',
      this.sets.find((set) => set.slug === this.$route.params.set)
    )
    if (this.cards.length === 0 || this.cards[0].set_name !== this.set.name) {
      await this.$store.dispatch('getCards', this.set.code)
    }
  },
  computed: {
    ...mapGetters(['card', 'cards', 'sets', 'set']),
  },
  watch: {
    $route() {
      console.log('_id here')
    },
  },
  mounted() {
    if (this.$route.query.card) {
      this.$store.commit(
        'setCard',
        this.$store.state.cards.find(
          (card) => card.slug === this.$route.query.card
        )
      )
    }
  },
  destroyed() {
    this.$store.commit('setCards', [])
    this.$store.commit('setCard', null)
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
