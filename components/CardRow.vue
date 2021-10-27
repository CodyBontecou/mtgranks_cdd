<template>
  <div
    class="flex items-end hover:text-gray-600 cursor-pointer rounded p-1 hover:shadow"
    @click="activateCard"
  >
    <RatingBubble class="shadow-lg" :rating="computedRating" />
    <span class="text-18 font-medium ml-6 mb-1 justify-self-end">
      {{ cardName }}
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RatingBubble from '~/components/RatingBubble'

export default {
  name: 'CardRow',
  components: {
    RatingBubble: RatingBubble,
  },
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
    ...mapGetters(['set']),
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
    computedRating() {
      try {
        return this.card.rating[0].rating
      } catch (e) {
        return ''
      }
    },
  },
  watch: {
    active() {
      this.$store.commit('setCard', this.card)
      this.$router.push({
        name: 'index/set/:set/:card?___en',
        params: {
          card: this.card.slug,
          set: this.set.slug,
        },
      })
    },
  },
  methods: {
    ...mapActions({
      setSideDrawerExpanded: 'setSideDrawerExpanded',
      setIdentifier: 'comments/setIdentifier',
    }),
    activateCard() {
      this.active = !this.active
      this.setIdentifier({
        identifier: `${this.card.name}&${this.card.set}`,
      })
      if (!this.sideDrawerExpanded) {
        this.setSideDrawerExpanded(true)
      }
    },
  },
}
</script>
