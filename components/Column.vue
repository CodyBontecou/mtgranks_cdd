<template>
  <div v-show="cardsLoaded" class="mt-20">
    <!--    <h1 class="column-title mb-4 font-semibold">{{ prettifiedColorName }}</h1>-->
    <h1 class="column-title mb-4 font-semibold">{{ color.label }}</h1>
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
    // prettifiedColorName() {
    //   const flattenedColor = this.color.join().replace(/,/g, '')
    //   for (const i in this.colorLabels) {
    //     // Checking if the colorLabel object has a value of color
    //     if (
    //       Object.keys(this.colorLabels[i]).find(
    //         (key) => this.colorLabels[i][key] === flattenedColor
    //       )
    //     ) {
    //       // grabbing the first key
    //       return Object.keys(this.colorLabels[i])[0]
    //     }
    //   }
    //   return this.color
    // },
  },
}
</script>

<style scoped>
.column-title {
  font-style: normal;
  font-size: 17px;
  line-height: 130%;
}
</style>
