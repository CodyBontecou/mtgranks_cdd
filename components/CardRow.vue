<template>
  <nuxt-link to="" class="p-1 flex items-end hover:shadow rounded">
    <div
      class="w-8 h-8 flex rounded-full items-end"
      :class="{
        'bg-charcoal': highRating === false,
        'bg-persian-green': highRating === true,
      }"
    >
      <span class="rating text-white text-lg mb-2 justify-self-end">
        {{ card.rating }}
      </span>
    </div>
    <span class="cardName pl-6 mb-2 justify-self-end">{{ cardName }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardRow',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    highRating() {
      /**
       * Checks it 'A' or 'B' ratings are within the
       * ratingList.
       * Primarily used to determine styling.
       */
      return this.ratingList.some((r) => ['A', 'B'].includes(r))
    },
    ratingList() {
      /**
       * Returns the card rating split into a list.
       * example: "A+" => ["A", "+"]
       */
      return [...this.card.rating]
    },
    cardName() {
      if (this.card.name.length > 19) {
        return this.card.name.substring(0, 16) + '...'
      } else {
        return this.card.name
      }
    },
  },
}
</script>

<style scoped>
.rating {
  margin-left: 0.65rem;
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
}

.cardName {
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
}
</style>
