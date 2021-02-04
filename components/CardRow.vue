<template>
  <div
    class="flex items-end hover:text-gray-600 cursor-pointer rounded p-1 hover:shadow"
    @click="activateCard"
  >
    <RatingBubble class="shadow-lg" :rating="randomizedRating" />
    <span class="text-18 font-medium ml-6 mb-1 justify-self-end">{{
      cardName
    }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
        name: 'index___en',
        query: { card: this.card.slug },
      })
    },
  },
  methods: {
    ...mapActions({
      setSideDrawerExpanded: 'setSideDrawerExpanded',
      setConfig: 'comments/setConfig',
    }),
    activateCard() {
      this.active = !this.active
      this.setConfig({
        identifier: `${this.card.name}&${this.card.set}`,
      })
      this.setSideDrawerExpanded(true)
    },
  },
}
</script>
