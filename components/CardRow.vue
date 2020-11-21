<template>
  <NuxtLink
    :to="{ name: 'set-card___en', params: { card: card.slug, set: set.slug } }"
    class="flex items-end hover:text-gray-600"
  >
    <!--    <RatingBubble :rating="card.rating" />-->
    <div class="flex items-end hover:text-gray-600">
      <RatingBubble :rating="randomizedRating" />
      <span class="cardName pl-6 mb-2 justify-self-end">{{ cardName }}</span>
    </div>
  </NuxtLink>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardRow',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      active: false,
      ratings: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'],
    }
  },
  computed: {
    ...mapGetters(['cards', 'sets', 'set']),
    cardName() {
      if (this.card.name.length > 19) {
        return this.card.name.substring(0, 16) + '...'
      } else {
        return this.card.name
      }
    },
    randomizedRating() {
      return this.ratings[Math.floor(Math.random() * this.ratings.length)]
    },
  },
  watch: {
    active() {
      this.$store.commit('setCard', this.card)
      this.$router.push({
        name: 'set-card___en',
        params: { card: this.card, set: this.set },
      })
    },
  },
}
</script>

<style scoped>
.cardName {
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
}
</style>
