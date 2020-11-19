<template>
  <div>
    <Header :set="set" page="mtgSet" />
    <div class="mx-20">
      <Column class="mt-10" :cards="cards" color="Green"></Column>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Id',
  layout: 'wideHeader',
  data: () => {
    return {
      cards: [],
      set: {
        name: 'Zendikar Rising',
      },
    }
  },
  mounted() {
    this.getCards()
  },
  methods: {
    async getCards() {
      const response = await this.$axios.$get(
        'https://api.scryfall.com/cards/search?q=set:iko+is:booster'
      )
      this.cards = response.data
    },
  },
}
</script>
