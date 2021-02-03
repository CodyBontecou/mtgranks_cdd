<template>
  <div class="-mt-6 flex flex-row-reverse font-medium text-xs">
    <SideDrawerToggle />
    <transition name="slide">
      <div
        v-show="sideDrawerExpanded"
        class="fixed shadow-2xl top-0 left-0 h-full bg-charcoal text-white w-4/5 max-w-drawer overflow-y-scroll"
      >
        <div class="flex justify-center mt-3 md:mt-4">
          <SearchInput :cards="cards" class="-mb-20 md:mb-0 text-black" />
        </div>

        <CardDetails />

        <client-only>
          <Disqus class="m-4 self-col" />
        </client-only>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      rating: {
        rator: {
          name: 'Justlolaman',
        },
        rating: 'A-',
        reason:
          'Best cards in the format. Bombs. Completely changes the game in your\n' +
          '      favor. Will almost single handedly win you the game.',
      },
    }
  },
  computed: {
    ...mapGetters(['card', 'cards', 'sideDrawerExpanded']),
  },
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
