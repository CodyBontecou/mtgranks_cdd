<template>
  <div class="">
    <Header page="home"></Header>
    <h2 class="mt-6 font-bold text-22">Latest Sets</h2>
    <div class="mt-6 whitespace-no-wrap overflow-x-scroll">
      <NewSet
        v-for="(set, i) in sets"
        :key="i"
        class="mr-2 inline-block whitespace-normal text-left"
        :set="set"
        :color="set.color"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sets: [
        {
          name: 'Zendikar Rising',
          code: 'ZNR',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
          cardCount: '220',
          color: 'black-gold',
        },
        {
          name: 'Ikoria: Lair of Behemoths',
          code: 'IKO',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/iko.svg',
          cardCount: '264',
          color: 'orange-red',
        },
        {
          name: 'Core 2021',
          code: 'M21',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m21.svg',
          cardCount: '264',
          color: 'black-green',
        },
      ],
    }
  },
}
</script>
