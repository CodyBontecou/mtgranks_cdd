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
      <div
        v-if="cards.length !== 0"
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
import Column from '~/components/Column'
import SideDrawer from '~/components/SideDrawer/SideDrawer'
import FilterMenu from '~/components/FilterMenu'

export default {
  layout: 'wideHeader',
  components: {
    Column: Column,
    SideDrawer: SideDrawer,
    FilterMenu: FilterMenu,
  },
  async asyncData({ params, payload, store }) {
    if (payload) {
      store.commit('setSet', payload.set)
      store.commit('setCards', payload.cards)
      if (params.card) {
        store.commit('_setCard', payload.card)
      }
    } else {
      if (
        store.getters.cards.length === 0 ||
        store.getters.cards[0].set_name !== store.getters.set.name
      ) {
        await store.dispatch('_getCards')
      }
    }
    let setSlug = params.set
    if (!setSlug) {
      setSlug = 'kaldheim'
    }

    const option = store.getters['filters/filters'].sets.options.find(
      (set) => set.slug === setSlug
    )
    if (option !== store.getters.set) {
      store.commit('setSet', option)
    }

    if (!store.getters.set.isChecked) {
      const boolean = true
      await store.dispatch('filters/toggleOption', { option, boolean })
    }

    if (params.card) {
      await store.dispatch(
        '_setCard',
        store.getters.cards.find((card) => card.slug === params.card)
      )
      if (!store.getters.sideDrawerExpanded) {
        await store.dispatch('setSideDrawerExpanded', true)
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
    title() {
      if (this.card) {
        return (
          this.card.name +
          ' | ' +
          this.set.name +
          ' | Limited Card Review | Mtgranks'
        )
      } else if (this.set) {
        return this.set.name + ' | Limited Set Review | Mtgranks'
      } else {
        return 'Limited Set Reviews | Mtgranks | Magic the Gathering'
      }
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
      this.setSideDrawerExpanded(false)
      // TODO: Remove card when the page changes.
      // this._setCard(null) -- causes issues
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
  head() {
    return {
      title: this.title,
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
    }
  },
}
</script>

<style>
.centered-columns {
  width: calc(100vw - 400px);
}
</style>
