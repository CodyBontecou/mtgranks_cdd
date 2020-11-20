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
    if (
      (this.cards.length > 0 && this.cards[0].set_name !== this.set.name) ||
      this.cards.length === 0
    ) {
      await this.$store.dispatch('getCards', this.set.code)
    }
    this.$store.commit(
      'setCard',
      this.cards.find((card) => card.slug === this.$route.params.card)
    )
  },
  computed: {
    ...mapGetters(['card', 'cards', 'sets', 'set']),
  },
  watch: {
    $route() {
      console.log('_id here')
    },
  },
  destroyed() {
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
