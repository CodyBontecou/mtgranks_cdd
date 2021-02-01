<template>
  <div class="relative">
    <img
      v-if="card.image_uris"
      class="max-h-card-small md:max-h-card-large"
      :class="{
        'max-h-card-large': expanded === true,
      }"
      :src="card.image_uris.border_crop"
      :alt="`image of ${card.name} within the header.`"
    />
    <img
      v-else-if="card.card_faces !== undefined"
      class="max-h-card-small md:max-h-card-large"
      :class="{
        'max-h-card-large': expanded === true,
      }"
      :src="card.card_faces[0].image_uris.border_crop"
      :alt="`Image of ${card.name} within the header.`"
    />
    <div
      class="absolute md:hidden rounded-full bg-white opacity-75 hover:opacity-100 cursor-pointer"
      :class="{
        'expand-bubble-small': !expanded,
        'expand-bubble-large': expanded,
      }"
      @click="handleExpand"
    >
      <ExpandIcon />
    </div>
    <a
      :href="tcgPriceLink"
      target="_blank"
      class="p-1 absolute text-black font-medium text-12 rounded bg-white opacity-75 hover:opacity-100 cursor-pointer md:right-18 md:bottom-180"
      :class="{
        'right-10 bottom-91 price-bubble-small': !expanded,
        'right-23 bottom-215': expanded,
      }"
    >
      ${{ card.prices.usd }}
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardImg',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['expanded', 'tcgPriceLink']),
  },
  methods: {
    handleExpand() {
      this.$store.commit('setSideDrawerExpanded', !this.expanded)
    },
  },
}
</script>

<style scoped>
.expand-bubble-small {
  bottom: 91px;
  left: 10px;
  padding: 8px;
}
.expand-bubble-large {
  bottom: 26.5vh;
  left: 23px;
  padding: 8px;
}
</style>
