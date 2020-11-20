<template>
  <div>
    <Header :set="set" page="mtgSet" />
    <div class="mx-20">
      <div v-if="cards.length === 0">
        <Loading />
      </div>
      <Column v-else class="mt-10" :cards="cards" color="Green"></Column>
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
    await this.$store.dispatch('getCards', this.set.code)
  },
  computed: {
    ...mapGetters(['cards', 'sets', 'set']),
  },
  watch: {
    $route() {
      console.log('_id here')
    },
  },
  destroyed() {
    this.$store.commit('setCards', [])
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
