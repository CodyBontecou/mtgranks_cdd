<template>
  <nuxt-link to="" class="flex items-end hover:shadow rounded">
    <RatingBubble :rating="card.rating" />
    <span class="cardName pl-6 mb-2 justify-self-end">{{ cardName }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardRow',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cardName() {
      if (this.card.name.length > 19) {
        return this.card.name.substring(0, 16) + '...'
      } else {
        return this.card.name
      }
    },
  },
}
</script>

<style scoped>
.rating {
  margin-left: 0.65rem;
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
}

.cardName {
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
}
</style>
