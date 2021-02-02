<template>
  <div v-show="cardsLoaded">
    <h1 class="text-18 mb-6 font-semibold">{{ color.label }}</h1>
    <LazyCardRow
      v-for="(card, i) in cards"
      :key="card.id"
      :card="card"
      class="mb-2"
      :class="{
        'mb-12': i === cards.length - 1,
      }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Column',
  props: {
    cards: {
      type: Array,
      required: true,
    },
    color: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['colorLabels']),
    cardsLoaded() {
      return this.cards.length > 0
    },
  },
}
</script>
