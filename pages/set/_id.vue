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
  head: {
    meta: [
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#264653',
      },
      {
        hid: 'msapplication-navbutton-color',
        name: 'msapplication-navbutton-color',
        content: '#264653',
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#264653',
      },
    ],
  },
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
