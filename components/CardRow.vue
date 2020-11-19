<template>
  <nuxt-link :to="cardRoute" class="flex items-end hover:text-gray-600">
    <!--    <RatingBubble :rating="card.rating" />-->
    <RatingBubble rating="A+" />
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
    cardRoute() {
      return this.card.name
        .replaceAll(' ', '-')
        .replaceAll(':', '')
        .replaceAll(',', '')
        .replaceAll("'", '')
        .toLowerCase()
    },
  },
}
</script>

<style scoped>
.cardName {
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
}
</style>
