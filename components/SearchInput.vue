<template>
  <div class="relative flex flex-col z-50 w-full mx-20 text-18">
    <form
      class="py-2 flex bg-white py-3 px-2"
      :class="{
        'rounded-md': results.length === 0,
        'rounded-t-md': results.length !== 0,
      }"
    >
      <GreySearchIcon class="opacity-25 self-center mx-4 w-8 h-8" />
      <input
        v-model="search"
        class="appearance-none bg-white focus:outline-none placeholder-gray-600 rounded-r-full w-full"
        type="text"
        autocomplete="off"
        placeholder="Search Mtgranks"
        @input="onChange"
        @compositionupdate="compositionUpdate($event)"
      />

      <!--    Close button    -->
      <div
        class="flex flex-col items-center justify-center p-1 hover:text-persian-green group border-l border-gray-4 cursor-pointer"
        @click="toggleSideDrawerExpanded"
      >
        <CloseIcon class="h-6 w-6 text-gray-4 group-hover:text-persian-green" />
      </div>
    </form>
    <ul
      v-show="isOpen"
      class="absolute mt-10 bg-white w-full rounded-b-2xl shadow-1"
    >
      <li
        v-for="(result, i) in slicedResults"
        :key="i"
        class="p-2 flex rounded-sm autocomplete-result hover:bg-gray-200 cursor-pointer group hover:bg-gray-1"
        :class="{
          'rounded-b-2xl': i === slicedResults.length - 1,
        }"
        @click="setCard(result)"
      >
        <span class="mx-2">{{ result }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GreySearchIcon from '~/components/GreySearchIcon'
import CloseIcon from '~/components/CloseIcon'

export default {
  name: 'SearchInput',
  components: {
    CloseIcon: CloseIcon,
    GreySearchIcon: GreySearchIcon,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
    }
  },
  computed: {
    ...mapGetters(['card', 'set']),
    slicedResults() {
      return this.results.slice(-5)
    },
  },
  methods: {
    ...mapActions(['toggleSideDrawerExpanded']),
    onChange() {
      this.isOpen = true
      this.filterResults()
    },
    filterResults() {
      this.results = this.cards
        .filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        )
        .map((item) => item.name)
      if (this.blankSearch()) {
        this.resetResults()
      }
    },
    blankSearch() {
      return this.results.length === this.cards.length
    },
    setCard(cardName) {
      const cardObject = this.cards.find((card) => card.name === cardName)
      this.$store.commit('setCard', cardObject)
      this.$router.push({
        name: 'index/set/:set/:card?___en',
        params: {
          card: this.card.slug,
          set: this.set.slug,
        },
      })
      this.resetResults()
      this.search = cardObject.name
    },
    resetResults() {
      this.results = []
    },
    compositionUpdate(event) {
      this.search = event.data
    },
  },
}
</script>
