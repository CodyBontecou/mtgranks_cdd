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
      :src="cardFace"
      :alt="`Image of ${card.name}.`"
    />
    <div
      v-if="card.card_faces"
      class="absolute rounded-full bg-white opacity-100 cursor-pointer p-2 top-0 left-0"
      :class="{
        'top-10 left-10': expanded,
      }"
      @click="toggleFace"
    >
      <SwitchVertical
        class="h-2 w-2 text-black fill-current"
        :class="{
          'h-5 w-5': expanded,
        }"
      />
    </div>
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
  data() {
    return {
      face: 0,
    }
  },
  computed: {
    ...mapGetters(['expanded', 'tcgPriceLink']),
    cardFace() {
      return this.card.card_faces[this.face].image_uris.border_crop
    },
  },
  methods: {
    ...mapActions(['toggleExpandedImage']),
    toggleFace() {
      if (this.face === 0) {
        this.face = 1
      } else {
        this.face = 0
      }
    },
  },
}
</script>
