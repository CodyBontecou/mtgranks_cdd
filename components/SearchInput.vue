<template>
  <div class="relative flex flex-col z-50 w-full mx-20">
    <form
      class="py-2 flex bg-white"
      :class="{
        'rounded-full shadow-1': results.length === 0,
        'rounded-t-2xl': results.length !== 0,
      }"
    >
      <GreySearchIcon class="mx-2 w-6 h-6" />
      <label for="cardSearch"> </label>
      <!-- TODO: Change placeholder text when a card exists  -->
      <input
        id="cardSearch"
        v-model="search"
        class="appearance-none focus:outline-none placeholder-gray-600 rounded-r-full w-full"
        type="text"
        autocomplete="off"
        placeholder="Search Mtgranks"
        @input="onChange"
      />
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
import { mapGetters } from 'vuex'
export default {
  name: 'SearchInput',
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
    ...mapGetters(['inputPlaceholderText']),
    slicedResults() {
      return this.results.slice(-5)
    },
  },
  methods: {
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
        name: 'set___en',
        query: { card: cardObject.slug },
      })
      this.resetResults()
      this.search = cardObject.name
    },
    resetResults() {
      this.results = []
    },
  },
}
</script>
