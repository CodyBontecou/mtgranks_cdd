<template>
  <div class="md:flex mt-20">
    <Header class="z-10" :set="set" :card="card" page="mtgSet" />
    <div
      class="mx-20 lg:mt-0 lg:ml-divider"
      :class="{
        'mt-48': card === null,
        'mt-104': card && expanded === false,
        'mt-176': card && expanded === true,
      }"
    >
      <div v-if="cards.length === 0">
        <Loading />
      </div>
      <div class="flex flex-wrap sm:justify-center">
        <Column
          v-for="(color, i) in colors"
          :key="i"
          class="mx-2"
          :cards="cardsByColor(color)"
          :color="color"
        />
      </div>
      <FilterMenu
        class="fixed bottom-0 right-0 mr-20 mb-4"
        @colorToggled="updateColors"
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
  data() {
    return {
      windowWidth: 0,
      headerOpen: true,
      mdBreakpoint: 768,
    }
  },
  computed: {
    ...mapGetters(['card', 'cards', 'colors', 'sets', 'set', 'expanded']),
    headerVisible() {
      return this.windowWidth > this.mdBreakpoint ? false : this.headerOpen
    },
  },
  beforeDestroyed() {
    window.removeEventListener('resize', this.updateWindowSize)
  },
  mounted() {
    this.updateWindowSize()
    window.addEventListener('resize', this.updateWindowSize)
    if (this.$route.query.card) {
      this.$store.commit(
        'setCard',
        this.$store.state.cards.find(
          (card) => card.slug === this.$route.query.card
        )
      )
    } else {
      this.$store.commit('setCard', null)
    }
  },
  destroyed() {
    this.$store.commit('setCards', [])
    this.$store.commit('setCard', null)
    this.$store.commit('setSet', null)
  },
  methods: {
    cardsByColor(color) {
      if (!color.isChecked) {
        return []
      }
      if (color.label === 'Multi') {
        return this.cards.filter((card) => this.cardColor(card).length > 1)
      }
      return this.cards.filter((card) => this.cardColor(card) === color.raw)
    },
    cardColor(card) {
      if ('card_faces' in card) {
        return card.card_faces[0].colors.join()
      } else {
        return card.colors.join()
      }
    },
    updateColors(event) {
      const color = this.$store.state.colors.find(
        (elem) => elem.label === event.label
      )
      const boolean = !event.isChecked
      this.$store.commit('toggleColor', { color, boolean })
    },
    updateWindowSize() {
      this.windowWidth = window.innerWidth
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

<!--<style scoped>-->
<!--.menus {-->
<!--  bottom: 10px;-->
<!--  right: 10px;-->
<!--}-->
<!--</style>-->
