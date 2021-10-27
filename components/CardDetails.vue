<template>
  <div v-if="card" class="z-40 flex flex-col order-2 justify-center">
    <CardImg :card="card" />
    <p class="mx-20 text-sm text-white leading-160 font-medium">
      {{ ratingReason }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardImg from '~/components/CardImg'

export default {
  name: 'CardDetails',
  components: {
    CardImg: CardImg,
  },
  computed: {
    ...mapGetters({
      expanded: 'expanded',
      card: 'card',
    }),
    ratingReason() {
      try {
        return this.card.rating[0].reason
      } catch (e) {
        return 'This is where the reasoning behind the card rating will go.'
      }
    },
  },
}
</script>

<style scoped></style>
