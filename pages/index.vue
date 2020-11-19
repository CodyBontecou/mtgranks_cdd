<template>
  <div class="flex flex-col justify-between h-full">
    <div class="">
      <Header page="home"></Header>
      <h2 class="mt-6 font-bold text-22">Latest Sets</h2>
      <div
        class="mt-6 -mx-20 whitespace-no-wrap overflow-x-scroll no-scrollbar"
      >
        <NewSet
          v-for="(set, i) in newSets"
          :key="i"
          class="mr-2 inline-block whitespace-normal text-left"
          :class="{
            'ml-20': i === 0,
            'mr-20': i === 2,
          }"
          :set="set"
          :color="set.color"
        />
      </div>

      <h2 class="mt-8 font-bold text-22">Older Sets</h2>
      <div class="mt-4">
        <OldSet
          v-for="(set, i) in oldSets"
          :key="i"
          class="whitespace-no-wrap"
          :class="{
            'mt-4': i !== 0,
          }"
          :set="set"
          :color="set.color"
        />
      </div>
    </div>

    <BottomNav class="mt-10" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSets: [
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
      oldSets: [
        {
          name: 'Theros Beyond Death',
          code: 'THB',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
          cardCount: '220',
          color: 'ash',
        },
        {
          name: 'Throne of Eldraine',
          code: 'ELD',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/eld.svg',
          cardCount: '264',
          color: 'teal',
        },
        {
          name: 'Core 2020',
          code: 'M20',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m20.svg',
          cardCount: '264',
          color: 'mandarin',
        },
        {
          name: 'War of the Spark',
          code: 'WAR',
          icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/war.svg',
          cardCount: '264',
          color: 'peach',
        },
      ],
    }
  },
  head: {
    meta: [
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        hid: 'msapplication-navbutton-color',
        name: 'msapplication-navbutton-color',
        content: '#ffffff',
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#ffffff',
      },
    ],
  },
}
</script>

<style scoped>
/* Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
