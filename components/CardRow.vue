<template>
  <div
    class="flex items-end hover:text-gray-600 cursor-pointer rounded p-1 btn"
    @click="activateCard"
  >
    <RatingBubble class="shadow-lg" :rating="randomizedRating" />
    <span class="cardName ml-6 mb-1 justify-self-end">{{ cardName }}</span>
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
    ...mapActions(['setSideDrawerExpanded']),
    activateCard() {
      this.active = !this.active
      this.setSideDrawerExpanded(true)
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
.btn:hover {
  transform: translateY(-0.15rem);
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
}
.btn:active {
  transform: translateY(-0.05rem);
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
}
.btn::after {
  transition: all 0.1s;
}
</style>
