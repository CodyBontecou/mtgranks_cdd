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

    <div
      class="w-full my-6 py-3 border-t border-b border-gray-1 border-opacity-50"
    >
      <div class="flex items-center justify-between mx-20">
        <!-- Rating Bubble -->
        <div class="flex flex-col text-center mr-4 cursor-pointer">
          <div
            class="card--detail__toggle-container-filled"
            :class="{
              'bg-charcoal border border-white': highRating === false,
              'bg-persian-green': highRating === true,
            }"
          >
            <span class="card--detail__toggle-icon-white text-lg">
              {{ computedRating }}
            </span>
          </div>
          <span class="card--detail__toggle-text">Rating</span>
        </div>
        <!-- Expand Image Size -->
        <!--        <div
          class="flex flex-col text-center mr-4 cursor-pointer p-2 rounded group"
          @click="toggleExpandedImage"
        >
          <div class="card&#45;&#45;detail__toggle-container group-hover:bg-gray-3">
            <ExpandIcon class="card&#45;&#45;detail__toggle-icon" />
          </div>
          <span class="card&#45;&#45;detail__toggle-text">Expand</span>
        </div>-->
        <!--   Buy Card Link -->
        <a
          id="buy-card"
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
          id="flip-card"
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
          id="copy-url"
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
import DollarIcon from '~/components/DollarIcon'
import Share from '~/components/Share'
import SwitchVertical from '~/components/SwitchVertical'

export default {
  name: 'CardImg',
  components: {
    DollarIcon: DollarIcon,
    Share: Share,
    SwitchVertical: SwitchVertical,
  },
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
    highRating() {
      /**
       * Checks if 'A' or 'B' ratings are within the
       * ratingList.
       * Primarily used to determine styling.
       */
      return this.ratingList.some((r) => ['A', 'B'].includes(r))
    },
    ratingList() {
      /**
       * Returns the card rating split into a list.
       * example: "A+" => ["A", "+"]
       */
      if (this.card.rating) {
        // return this.card.rating[0].rating.split('')
        return [...this.card.rating[0].rating]
      } else {
        return []
      }
    },
    computedRating() {
      try {
        return this.card.rating[0].rating
      } catch (e) {
        return ''
      }
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
  @apply rounded-full p-2 w-10 h-10 flex items-center justify-center;
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
