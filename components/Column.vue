<template>
  <div v-show="cardsLoaded">
    <h1 class="text-18 mb-6 font-semibold">{{ color.label }}</h1>
    <LazyCardRow
      v-for="(card, i) in cards"
      :key="`${card.id}-${card.set}-${i}`"
      :card="card"
      :class="{
        'mb-12': i === cards.length - 1,
      }"
    />
  </div>
</template>

<script>
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
    cardsLoaded() {
      return this.cards.length > 0
    },
  },
}
</script>
