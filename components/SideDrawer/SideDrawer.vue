<template>
  <div class="-mt-6 flex flex-row-reverse font-medium text-xs">
    <SideDrawerToggle />
    <transition name="slide">
      <div
        v-show="sideDrawerExpanded"
        class="fixed shadow-2xl top-0 left-0 h-full bg-charcoal text-white w-drawer overflow-y-scroll"
      >
        <div class="flex justify-center mt-3 md:mt-4">
          <SearchInput :cards="cards" class="-mb-20 md:mb-0 text-black" />
        </div>
        <div
          v-if="card"
          class="m-20 z-40 flex md:flex-col md:items-center order-2 md:order-3"
          :class="{
            'flex-col items-center': sideDrawerExpanded,
            'justify-center': !sideDrawerExpanded,
          }"
        >
          <CardImg :card="card" />
          <HorizontalReview
            v-if="sideDrawerExpanded"
            :rating="rating"
            class="mt-4"
          />
          <VerticalReview
            v-else
            :rating="rating"
            class="ml-8 md:ml-0 md:mt-4"
          />
        </div>
        <client-only>
          <Disqus v-show="showComments" class="m-4 self-col" />
        </client-only>
        <button @click="showComments = !showComments">show comments</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showComments: false,
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
