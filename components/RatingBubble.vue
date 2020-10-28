<template>
  <div
    class="w-8 h-8 flex rounded-full content-center items-center"
    :class="{
      'bg-charcoal': highRating === false,
      'bg-persian-green': highRating === true,
    }"
  >
    <span class="rating text-white text-lg ml-2">
      {{ rating }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'RatingBubble',
  props: {
    rating: {
      type: String,
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
      return [...this.rating]
    },
  },
}
</script>
