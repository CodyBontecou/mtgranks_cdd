<template>
  <div class="-mt-6 flex flex-row-reverse font-medium text-xs z-40">
    <SideDrawerToggle class="hidden md:block" />
    <transition name="slide">
      <div
        v-show="sideDrawerExpanded"
        class="fixed shadow-2xl top-0 left-0 h-full bg-charcoal text-white w-full md:w-4/5 md:max-w-drawer overflow-y-scroll"
      >
        <div class="flex mt-3">
          <SearchInput :cards="cards" class="text-black" />
        </div>

        <CardDetails class="mt-6" />

        <div class="mt-6 border-t border-gray-1 border-opacity-50"></div>

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
