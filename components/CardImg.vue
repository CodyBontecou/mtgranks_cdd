<template>
  <div class="relative">
    <img
      v-if="card.image_uris"
      class="max-h-card-small md:max-h-card-large"
      :class="{
        'max-h-card-large': expanded === true,
      }"
      :src="card.image_uris.border_crop"
      :alt="`image of ${card.name}.`"
    />
    <img
      v-else-if="card.card_faces !== undefined"
      class="max-h-card-small md:max-h-card-large"
      :class="{
        'max-h-card-large': expanded === true,
      }"
      :src="card.card_faces[0].image_uris.border_crop"
      :alt="`Image of ${card.name}.`"
    />
    <div
      class="absolute md:hidden rounded-full bg-white opacity-75 hover:opacity-100 cursor-pointer p-2"
      :class="{
        'left-10 bottom-91': !expanded,
        'left-23 bottom-215': expanded,
      }"
      @click="toggleExpandedImage"
    >
      <ExpandIcon />
    </div>
    <a
      :href="tcgPriceLink"
      target="_blank"
      class="p-1 absolute text-black font-medium text-12 rounded bg-white opacity-75 hover:opacity-100 cursor-pointer md:left-227 md:bottom-180"
      :class="{
        'left-92 bottom-91 price-bubble-small': !expanded,
        'left-275 bottom-215': expanded,
      }"
    >
      ${{ card.prices.usd }}
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    ...mapActions(['toggleExpandedImage']),
  },
}
</script>
