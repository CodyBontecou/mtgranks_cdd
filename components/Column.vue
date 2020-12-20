<template>
  <div v-show="cardsLoaded">
    <h1 class="text-18 mb-4 font-semibold">{{ color.label }}</h1>
    <CardRow v-for="card in cards" :key="card.id" :card="card" class="mb-2" />
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
