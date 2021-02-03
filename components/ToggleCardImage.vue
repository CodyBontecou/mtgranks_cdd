<template>
  <div
    v-if="card.card_faces"
    class="absolute rounded-full bg-white opacity-100 cursor-pointer p-2 top-0 left-0"
    :class="{
      'top-10 left-10': expanded,
    }"
    @click="toggleFace"
  >
    <SwitchVertical
      class="h-2 w-2 text-black fill-current md:h-5 md:w-5"
      :class="{
        'h-5 w-5': expanded,
      }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToggleCardImage',
  data() {
    return {
      face: 0,
    }
  },
  computed: {
    ...mapGetters(['card', 'expanded']),
    cardFace() {
      return this.card.card_faces[this.face].image_uris.border_crop
    },
  },
  methods: {
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

<style scoped></style>
