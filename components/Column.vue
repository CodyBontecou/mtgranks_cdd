<template>
  <div class="mt-20">
    <h1 class="column-title mb-4 font-semibold">{{ prettifyColor }}</h1>
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
  computed: {
    prettifyColor() {
      const color = this.color.map((c) => {
        return c.replace(' ', '')
      })
      if (JSON.stringify(color) === JSON.stringify([])) {
        return 'Colorless'
      } else if (JSON.stringify(color) === JSON.stringify(['B'])) {
        return 'Black'
      } else if (JSON.stringify(color) === JSON.stringify(['G'])) {
        return 'Green'
      } else if (JSON.stringify(color) === JSON.stringify(['R'])) {
        return 'Red'
      } else if (JSON.stringify(color) === JSON.stringify(['U'])) {
        return 'Blue'
      } else if (JSON.stringify(color) === JSON.stringify(['W'])) {
        return 'White'
      } else if (JSON.stringify(color) === JSON.stringify(['R', 'W'])) {
        return 'Boros'
      } else if (JSON.stringify(color) === JSON.stringify(['U', 'W'])) {
        return 'Azorius'
      } else if (JSON.stringify(color) === JSON.stringify(['B', 'U'])) {
        return 'Dimir'
      } else if (JSON.stringify(color) === JSON.stringify(['B', 'G'])) {
        return 'Golgari'
      } else if (JSON.stringify(color) === JSON.stringify(['G', 'R'])) {
        return 'Gruul'
      } else if (JSON.stringify(color) === JSON.stringify(['R', 'U'])) {
        return 'Izzet'
      } else if (JSON.stringify(color) === JSON.stringify(['B', 'W'])) {
        return 'Orzhov'
      } else if (JSON.stringify(color) === JSON.stringify(['B', 'R'])) {
        return 'Rakdos'
      } else if (JSON.stringify(color) === JSON.stringify(['G', 'W'])) {
        return 'Selesnya'
      } else if (JSON.stringify(color) === JSON.stringify(['G', 'U'])) {
        return 'Simic'
      } else if (JSON.stringify(color) === JSON.stringify(['W', 'B', 'G'])) {
        return 'Abzan'
      } else if (JSON.stringify(color) === JSON.stringify(['G', 'U', 'W'])) {
        return 'Bant'
      } else if (JSON.stringify(color) === JSON.stringify(['B', 'U', 'W'])) {
        return 'Esper'
      } else if (JSON.stringify(color) === JSON.stringify(['U', 'B', 'R'])) {
        return 'Grixis'
      } else if (JSON.stringify(color) === JSON.stringify(['R', 'U', 'W'])) {
        return 'Jeskai'
      } else if (JSON.stringify(color) === JSON.stringify(['B', 'G', 'R'])) {
        return 'Jund'
      } else if (JSON.stringify(color) === JSON.stringify(['B', 'R', 'W'])) {
        return 'Mardu'
      } else if (JSON.stringify(color) === JSON.stringify(['G', 'R', 'W'])) {
        return 'Naya'
      } else if (JSON.stringify(color) === JSON.stringify(['B', 'G', 'U'])) {
        return 'Sultai'
      } else if (JSON.stringify(color) === JSON.stringify(['G', 'R', 'U'])) {
        return 'Temur'
      } else if (
        JSON.stringify(color) === JSON.stringify(['B', 'G', 'R', 'U'])
      ) {
        return 'Glint'
      } else if (
        JSON.stringify(color) === JSON.stringify(['B', 'G', 'R', 'W'])
      ) {
        return 'Dune'
      } else if (
        JSON.stringify(color) === JSON.stringify(['G', 'R', 'U', 'W'])
      ) {
        return 'Ink'
      } else if (
        JSON.stringify(color) === JSON.stringify(['B', 'G', 'U', 'W'])
      ) {
        return 'Witch'
      } else if (
        JSON.stringify(color) === JSON.stringify(['B', 'R', 'U', 'W'])
      ) {
        return 'Yore'
      } else {
        return this.color
      }
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
