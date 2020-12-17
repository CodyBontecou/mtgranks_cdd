<template>
  <div class="mt-20">
    <h1 class="column-title mb-4 font-semibold">{{ color }}</h1>
    <CardRow v-for="card in cards" :key="card.id" :card="card" class="mb-2" />
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    cards: {
      type: Array,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.column-title {
  font-style: normal;
  font-size: 17px;
  line-height: 130%;
}
</style>
