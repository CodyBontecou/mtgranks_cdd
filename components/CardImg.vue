<template>
  <div class="w-full flex flex-col items-center">
    <img
      v-if="card.image_uris"
      class="w-4/5 self-center mt-20"
      :src="card.image_uris.border_crop"
      :alt="`image of ${card.name}.`"
    />
    <img
      v-else-if="card.card_faces !== undefined"
      class="w-4/5 self-center mt-20"
      :src="cardFace"
      :alt="`Image of ${card.name}.`"
    />

    <div class="w-full my-6 py-3 border-t border-b border-gray-1">
      <div class="flex items-center justify-between mx-20">
        <!-- Rating Bubble -->
        <div class="flex flex-col text-center mr-4 cursor-pointer">
          <div class="card--detail__toggle-container-filled">
            <span class="card--detail__toggle-icon-white text-lg"> A </span>
          </div>
          <span class="card--detail__toggle-text">Rating</span>
        </div>
        <!-- Expand Image Size -->
        <div
          class="flex flex-col text-center mr-4 cursor-pointer p-2 rounded group"
          @click="toggleExpandedImage"
        >
          <div class="card--detail__toggle-container group-hover:bg-gray-3">
            <ExpandIcon class="card--detail__toggle-icon" />
          </div>
          <span class="card--detail__toggle-text">Expand</span>
        </div>
        <!--   Buy Card Link -->
        <a
          :href="tcgPriceLink"
          target="_blank"
          class="flex flex-col text-center mr-4 cursor-pointer p-2 rounded group"
        >
          <div class="card--detail__toggle-container group-hover:bg-gray-3">
            <DollarIcon class="card--detail__toggle-icon" />
          </div>
          <span class="card--detail__toggle-text">${{ card.prices.usd }}</span>
        </a>
        <!--   Flip card image -->
        <div
          class="flex flex-col text-center p-2 rounded group"
          :class="{
            'cursor-pointer': card.card_faces,
            'cursor-default': !card.card_faces,
          }"
          @click="toggleFace"
        >
          <div
            class="card--detail__toggle-container"
            :class="{
              'bg-white group-hover:bg-gray-3': card.card_faces,
              'opacity-50': !card.card_faces,
            }"
          >
            <SwitchVertical class="card--detail__toggle-icon" />
          </div>
          <span class="card--detail__toggle-text">Flip</span>
        </div>

        <!--   Share -->
        <div
          class="flex flex-col text-center cursor-pointer p-2 rounded group"
          @click="copyURL"
        >
          <div class="card--detail__toggle-container group-hover:bg-gray-3">
            <Share class="card--detail__toggle-icon" />
          </div>
          <span class="card--detail__toggle-text">Share</span>
        </div>
      </div>
    </div>
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
      shared: false,
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
      if ('card_faces' in this.card) {
        if (this.face === 0) {
          this.face = 1
        } else {
          this.face = 0
        }
      }
    },
    copyURL() {
      const url = `https://mtgranks.com${this.$route.fullPath}`
      navigator.clipboard.writeText(url).then(() => {
        alert('Copied to clipboard')
      })
    },
  },
}
</script>

<style>
.card--detail__toggle-container {
  @apply rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center border border-persian-green;
}
.card--detail__toggle-container-filled {
  @apply rounded-full bg-persian-green p-2 w-10 h-10 flex items-center justify-center;
}
.card--detail__toggle-icon {
  @apply text-persian-green;
}
.card--detail__toggle-icon-white {
  @apply text-white;
}
.card--detail__toggle-text {
  @apply text-white mt-1;

  font-size: 0.75rem;
}
</style>
