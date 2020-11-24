<template>
  <NuxtLink
    :to="{ name: 'set-card___en', params: { card: card.slug, set: set.slug } }"
    class="flex items-end hover:text-gray-600"
  >
    <!--    <RatingBubble :rating="card.rating" />-->
    <div class="flex items-end hover:text-gray-600">
      <RatingBubble :rating="randomizedRating" />
      <span class="cardName pl-6 mb-2 justify-self-end">{{ cardName }}</span>
    </div>
  </NuxtLink>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CardRow',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      active: false,
      ratings: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'],
    }
  },
  computed: {
    ...mapGetters(['cards', 'sets', 'set']),
    set() {
      const sets = [
        {
          name: 'Zendikar Rising',
          code: 'ZNR',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
          cardCount: '220',
          color: 'black-gold',
          type: 'new',
          slug: 'zendikar-rising',
        },
        {
          name: 'Ikoria: Lair of Behemoths',
          code: 'IKO',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/iko.svg',
          cardCount: '264',
          color: 'orange-red',
          type: 'new',
          slug: 'ikoria-lair-of-behemoths',
        },
        {
          name: 'Core 2021',
          code: 'M21',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m21.svg',
          cardCount: '264',
          color: 'black-green',
          type: 'new',
          slug: 'core-2021',
        },
        {
          name: 'Theros Beyond Death',
          code: 'THB',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
          cardCount: '220',
          color: 'ash',
          type: 'old',
          slug: 'theros-beyond-death',
        },
        {
          name: 'Throne of Eldraine',
          code: 'ELD',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/eld.svg',
          cardCount: '264',
          color: 'teal',
          type: 'old',
          slug: 'throne-of-eldraine',
        },
        {
          name: 'Core 2020',
          code: 'M20',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m20.svg',
          cardCount: '264',
          color: 'mandarin',
          type: 'old',
          slug: 'core-2020',
        },
        {
          name: 'War of the Spark',
          code: 'WAR',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/war.svg',
          cardCount: '264',
          color: 'peach',
          type: 'old',
          slug: 'war-of-the-spark',
        },
      ]
      return sets.find((set) => set.slug === this.$route.params.set)
    },
    cardName() {
      if (this.card.name.length > 19) {
        return this.card.name.substring(0, 16) + '...'
      } else {
        return this.card.name
      }
    },
    randomizedRating() {
      return this.ratings[Math.floor(Math.random() * this.ratings.length)]
    },
  },
  watch: {
    active() {
      this.$store.commit('setCard', this.card)
      this.$router.push({
        name: 'set-card___en',
        params: { card: this.card, set: this.set },
      })
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
