<template>
  <div>
    <Header class="z-10" :set="set" :card="card" page="mtgSet" />
    <div
      class="mx-20"
      :class="{
        'mt-48': card === null,
        'mt-88': card && expanded === false,
        'mt-176': card && expanded === true,
      }"
    >
      <div v-if="cards.length === 0">
        <Loading />
      </div>
      <Column
        v-for="(color, i) in colors"
        :key="i"
        class="mt-10"
        :cards="cardsByColor(color)"
        :color="color"
      />
      <FilterMenu class="fixed menus" />
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
    ...mapGetters(['card', 'cards', 'sets', 'set', 'expanded']),
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
  mounted() {
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

<style scoped>
.menus {
  bottom: 0;
  right: 10px;
}
</style>
