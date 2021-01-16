<template>
  <div class="md:flex mt-20">
    <Header class="z-10" :set="set" :card="card" page="mtgSet" />
    <div
      class="mx-20 md:mt-0 md:ml-divider"
      :class="{
        'mt-48': noCard,
        'mt-104': card && expanded === false,
        'mt-176': card && expanded === true,
      }"
    >
      <div v-if="noCards">
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
        v-if="isPremium"
        class="fixed bottom-0 right-0 mr-20 mb-4"
        @colorToggled="updateColors"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  layout: 'wideHeader',
  async fetch() {
    this.$store.commit(
      'setSet',
      this.sets.find((set) => set.slug === this.$route.params.set)
    )
    if (this.cards.length === 0 || this?.cards[0].set_name !== this?.set.name) {
      console.log(this.set)
      await this.$store.dispatch('getCards', this.set.code)
    }
  },
  computed: {
    ...mapGetters(['card', 'cards', 'colors', 'sets', 'set', 'expanded']),
    ...mapState({
      isPremium: (state) =>
        state.user.currentUser?.app_metadata.roles.includes('premium'),
    }),
    noCard() {
      return this.card === null
    },
    noCards() {
      return this.cards.length === 0
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
      if (!color.isChecked) {
        return []
      }
      if (color.label === 'Multi') {
        try {
          return this.cards.filter((card) => this.cardColor(card).length > 1)
        } catch (e) {
          console.error('Issue with color.label === "Multi"')
          console.log(e)
        }
      }
      return this.cards.filter((card) => this.cardColor(card) === color.raw)
    },
    cardColor(card) {
      try {
        if (card !== null && 'card_faces' in card) {
          return card.card_faces[0].colors.join()
        } else if (card !== null) {
          return card.colors.join()
        } else {
          return ''
        }
      } catch (e) {
        console.error('Issue with "card_faces" in card')
        console.log(e)
      }
    },
    updateColors(event) {
      const color = this.$store.state.colors.find(
        (elem) => elem.label === event.label
      )
      const boolean = !event.isChecked
      this.$store.commit('toggleColor', { color, boolean })
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
