<template>
  <div>
    <Header :set="set" :card="card" page="mtgSet" />
    <div class="mx-20">
      <Column
        v-for="(color, i) in colors"
        :key="i"
        class="mt-10"
        :cards="cardsByColor(color)"
        :color="color"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'wideHeader',
  asyncData({ payload }) {
    if (payload) {
      return {
        card: payload.card,
        cards: payload.cards,
        set: payload.set,
        sets: payload.sets,
      }
    }
  },
  computed: {
    colors() {
      const temp = []
      this.cards.forEach((card) => {
        if (!this.isArrayInArray(temp, card.colors)) {
          temp.push(card.colors)
        }
      })
      return temp.filter((element) => {
        return element !== undefined
      })
    },
  },
  methods: {
    cardsByColor(color) {
      return this.cards.filter(
        (card) => JSON.stringify(card.colors) === JSON.stringify(color)
      )
    },
    isArrayInArray(arr, item) {
      const itemAsString = JSON.stringify(item)

      return arr.some((ele) => {
        return JSON.stringify(ele) === itemAsString
      })
    },
  },
  head() {
    return {
      title: `${this.card.name} | Mtgranks | MTG: Arena Card Rankings for Magic The Gathering | Rating Review`,
      link: [{ rel: 'icon', type: 'image/x-icon', href: `${this.set.icon}` }],
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
    }
  },
}
</script>
