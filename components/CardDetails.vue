<template>
  <div v-if="card" class="z-40 flex flex-col order-2 justify-center">
    <CardImg :card="card" />
    <p class="mx-20 text-sm text-white leading-160 font-medium">
      {{ rating.reason }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardDetails',
  data() {
    return {
      rating: {
        rator: {
          name: 'Justlolaman',
        },
        rating: 'A-',
        reason:
          'Best cards in the format. Bombs. Completely changes the game in your\n' +
          '      favor. Will almost single handedly win you the game.',
      },
    }
  },
  computed: {
    ...mapGetters({
      expanded: 'expanded',
      card: 'card',
    }),
  },
}
</script>

<style scoped></style>
