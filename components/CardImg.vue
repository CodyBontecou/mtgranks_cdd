<template>
  <div>
    <img
      v-if="card.image_uris"
      class="card-height"
      :src="card.image_uris.border_crop"
      :alt="`Small image of ${card.name} within the header.`"
    />
    <img
      v-else-if="card.card_faces !== undefined"
      class="card-height"
      :src="card.card_faces[0].image_uris.border_crop"
      :alt="`Small image of ${card.name} within the header.`"
    />
  </div>
</template>

<script>
export default {
  name: 'CardImg',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.card)
  }
}
</script>

<style scoped>
.card-height {
  max-height: 204px;
}
</style>
