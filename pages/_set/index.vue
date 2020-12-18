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
      <div class="w-2/3">
        <Column
          v-for="(color, i) in colorz"
          :key="i"
          class="mt-10"
          :cards="cardsByColor(color)"
          :color="color"
        />
      </div>
      <FilterMenu class="fixed menus" @colorToggled="updateColors" />
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
    ...mapGetters([
      'card',
      'cards',
      'colors',
      'colorz',
      'sets',
      'set',
      'expanded',
    ]),
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
      const temp = []
      for (const i in this.cards) {
        try {
          if ('card_faces' in this.cards[i]) {
            if (this.cards[i].card_faces[0].colors.join() === color.raw) {
              temp.push(this.cards[i])
            }
          } else if (this.cards[i].colors.join() === color.raw) {
            temp.push(this.cards[i])
          }
        } catch (e) {
          console.log(e)
        }
      }
      return temp
    },
    updateColors(event) {
      const color = this.$store.state.colorz.find(
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

<style scoped>
.menus {
  bottom: 0;
  right: 10px;
}
</style>
