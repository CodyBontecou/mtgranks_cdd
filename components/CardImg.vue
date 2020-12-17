<template>
  <div class="relative">
    <img
      v-if="card.image_uris"
      :class="{
        'card-small': expanded === false,
        'card-large': expanded === true,
      }"
      :src="card.image_uris.border_crop"
      :alt="`Small image of ${card.name} within the header.`"
    />
    <img
      v-else-if="card.card_faces !== undefined"
      :class="{
        'card-small': expanded === false,
        'card-large': expanded === true,
      }"
      :src="card.card_faces[0].image_uris.border_crop"
      :alt="`Small image of ${card.name} within the header.`"
    />
    <div
      class="absolute rounded-full bg-white opacity-75 hover:opacity-100 cursor-pointer"
      :class="{
        'expand-bubble-small': !expanded,
        'expand-bubble-large': expanded,
      }"
      @click="handleExpand"
    >
      <ExpandIcon />
    </div>
    <a
      :href="card.purchase_uris.tcgplayer"
      target="_blank"
      class="absolute text-black font-medium text-12 bg-white opacity-75 hover:opacity-100 cursor-pointer"
      :class="{
        'price-bubble-small': !expanded,
        'price-bubble-large': expanded,
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
    ...mapGetters(['expanded']),
  },
  methods: {
    handleExpand() {
      this.$store.commit('setExpanded', !this.expanded)
    },
  },
}
</script>

<style scoped>
.card-small {
  max-height: 204px;
}
.card-large {
  max-height: 60vh;
}
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
.price-bubble-small {
  bottom: 91px;
  right: 10px;
  border-radius: 4px;
  padding: 4px;
}
.price-bubble-large {
  bottom: 26.5vh;
  right: 23px;
  border-radius: 4px;
  padding: 4px;
}
</style>
