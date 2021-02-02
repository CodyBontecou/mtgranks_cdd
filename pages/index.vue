<template>
  <div class="md:flex mt-20">
    <Header class="z-10 md:hidden" page="mtgSet" />
    <Login />
    <SideDrawer class="hidden md:block" />
    <div
      class="mx-20 md:mt-0"
      :class="{
        'mt-48': !card,
        'md:ml-drawer': sideDrawerExpanded,
        'mt-84': card && expanded === false,
        'mt-176': card && expanded === true,
      }"
    >
      <div v-if="noCards">
        <Loading :class="{ 'ml-48': sideDrawerExpanded }" />
      </div>
      <div class="flex flex-wrap sm:justify-center">
        <Column
          v-for="(color, i) in colors"
          :key="i"
          class="mx-1"
          :cards="cardsByColor(color)"
          :color="color"
        />
      </div>
      <FilterMenu
        class="fixed bottom-0 right-0 mr-20 mb-4"
        @filterToggled="updateFilters"
      />
      <!--      v-if="isPremium"-->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  layout: 'wideHeader',
  async fetch() {
    await this.$store.dispatch('_getCards')
  },
  computed: {
    ...mapGetters([
      'card',
      'cards',
      'colors',
      'sets',
      'expanded',
      'sideDrawerExpanded',
    ]),
    ...mapState({
      isPremium: (state) =>
        state.user.currentUser?.app_metadata.roles.includes('premium'),
      isLoggedIn: (state) => state.user.currentUser,
    }),
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
      this.$store.commit('TOGGLE_EXPANDED')
    } else {
      this.$store.commit('setCard', null)
    }
  },
  // destroyed() {
  //   this.$store.commit('setCards', [])
  //   this.$store.commit('setCard', null)
  //   this.$store.commit('setSet', null)
  // },
  methods: {
    cardsByColor(color) {
      if (!color.isChecked) {
        return []
      }
      if (color.label === 'Multi') {
        try {
          return this.cards.filter((card) => {
            try {
              const set = this.sets.find((set) => {
                return set.code.toLowerCase() === card.set
              })
              return set.isChecked && this.cardColor(card).length > 1
            } catch (e) {
              console.log(card)
            }
          })
        } catch (e) {
          console.error('Issue with color.label === "Multi"')
          console.log(e)
        }
      }
      return this.cards.filter((card) => {
        const set = this.sets.find((set) => {
          return set.code.toLowerCase() === card.set
        })
        return set.isChecked && this.cardColor(card) === color.raw
      })
    },
    cardColor(card) {
      try {
        if ('card_faces' in card && 'colors' in card.card_faces[0]) {
          return card.card_faces[0].colors.join()
        } else if (card !== null) {
          return card.colors.join()
        } else {
          return ''
        }
      } catch (e) {
        console.error('Issue with "card_faces" or "colors" in card')
        console.log(e)
      }
    },
    updateFilters(event) {
      if (event.filterType === 'color') {
        this.updateColor(event)
      } else if (event.filterType === 'set') {
        this.updateSets(event)
      }
    },
    updateColor(event) {
      const color = this.$store.state.colors.find(
        (elem) => elem.label === event.label
      )
      const boolean = !event.isChecked
      this.$store.commit('toggleColor', { color, boolean })
    },
    updateSets(event) {
      const set = this.$store.state.sets.find(
        (elem) => elem.label === event.label
      )
      const boolean = !event.isChecked
      this.$store.commit('toggleSet', { set, boolean })
      this.$store.dispatch('_getCards')
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
