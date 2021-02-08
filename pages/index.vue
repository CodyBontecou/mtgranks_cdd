<template>
  <div class="md:flex mt-20">
    <!--    <Login />-->
    <SideDrawer />
    <div
      class="m-5 md:m-20 md:mt-0"
      :class="{
        'md:ml-drawer': sideDrawerExpanded,
      }"
    >
      <div v-if="$fetchState.pending">
        <Loading :class="{ 'ml-48': sideDrawerExpanded }" />
      </div>
      <div
        v-if="cards.length !== 0 || !$fetchState.pending"
        class="flex flex-wrap justify-center"
        :class="{ 'md:centered-columns': sideDrawerExpanded }"
      >
        <Column
          v-for="(color, i) in checkedColors"
          :key="`${set}-${color}-${i}`"
          class="mx-1"
          :cards="cardsByColor(color)"
          :color="color"
        />
      </div>
      <FilterMenu
        class="fixed bottom-0 right-0 mr-20 mb-4"
        :class="{
          'hidden md:block': sideDrawerExpanded,
        }"
        @filterToggled="updateFilters"
      />
    </div>
  </div>
</template>

<router>
alias:
  -
    path: /set/:set/:card?
  -
    path: /set/:set
</router>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'wideHeader',
  async fetch() {
    let setSlug = this.$route.params.set
    if (!setSlug) {
      setSlug = 'kaldheim'
    }

    const option = this.filters.sets.options.find((set) => set.slug === setSlug)
    if (option !== this.set) {
      this.$store.commit('setSet', option)
    }

    if (!this.set.isChecked) {
      const boolean = true
      this.toggleOption({ option, boolean })
    }

    if (this.cards.length === 0 || this.cards[0].set_name !== this.set.name) {
      await this.$store.dispatch('_getCards')
    }

    if (this.$route.params.card) {
      await this.$store.dispatch(
        '_setCard',
        this.cards.find((card) => card.slug === this.$route.params.card)
      )
      if (!this.sideDrawerExpanded) {
        this.setSideDrawerExpanded(true)
      }
    }
  },
  computed: {
    ...mapGetters({
      card: 'card',
      cards: 'cards',
      set: 'set',
      sets: 'sets',
      sideDrawerExpanded: 'sideDrawerExpanded',
      checkedSets: 'filters/checkedSets',
      filters: 'filters/filters',
      checkedColors: 'filters/checkedColors',
    }),
    noCards() {
      return this.cards.length === 0
    },
  },
  methods: {
    ...mapActions({
      toggleSideDrawerExpanded: 'toggleSideDrawerExpanded',
      _setCard: '_setCard',
      setActiveSets: 'setActiveSets',
      setSideDrawerExpanded: 'setSideDrawerExpanded',
      toggleOption: 'filters/toggleOption',
    }),
    cardsByColor(color) {
      if (!color.isChecked) {
        return []
      }

      if (color.label === 'Multi') {
        try {
          return this.cards.filter((card) => {
            try {
              const set = this.checkedSets.find((set) => {
                return set.code.toLowerCase() === card.set
              })
              return set && this.cardColor(card).length > 1
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
        const set = this.checkedSets.find((set) => {
          return set.code.toLowerCase() === card.set
        })
        return set && this.cardColor(card) === color.raw
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
      if (event.filterType === 'sets') {
        this.updateSets(event)
      }
    },
    updateSets(event) {
      const set = this.filters.sets.options.find(
        (elem) => elem.label === event.label
      )
      this.$router.push({
        name: 'index/set/:set___en',
        params: {
          set: set.slug,
        },
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

<style>
.centered-columns {
  width: calc(100vw - 400px);
}
</style>
