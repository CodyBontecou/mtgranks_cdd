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
      class="expand-bubble bg-white opacity-75 hover:opacity-100 cursor-pointer"
      @click="onClickButton"
    >
      <ExpandIcon />
    </div>
    <div
      class="price-bubble text-black font-medium text-12 bg-white opacity-75 hover:opacity-100 cursor-pointer"
    >
      ${{ card.prices.usd }}
    </div>
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
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    onClickButton() {
      this.expanded = !this.expanded
      this.$emit('expand')
    },
  },
}
</script>

<style scoped>
.card-small {
  max-height: 204px;
}
.card-large {
  max-height: 475px;
}
.expand-bubble {
  position: absolute;
  bottom: 91px;
  left: 10px;
  border-radius: 999999px;
  padding: 8px;
}
.price-bubble {
  position: absolute;
  bottom: 91px;
  right: 10px;
  border-radius: 4px;
  padding: 4px;
}
</style>
