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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['newSets', 'oldSets']),
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
