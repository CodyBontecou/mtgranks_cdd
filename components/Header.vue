<template>
  <div
    class="flex flex-col justify-between w-full notch"
    :class="{
      'fixed top-0 bg-ash text-white': page === 'mtgSet',
      'text-white': page === 'premium',
    }"
  >
    <!--  Top bar mtgSet -->
    <div v-if="page === 'mtgSet'" class="flex flex-col m-20 order-1">
      <div class="flex justify-between">
        <div v-if="card" class="cursor-pointer" @click="removeCard">
          <CloseIcon />
        </div>
        <div v-else class="font-bold text-24">mtgranks</div>
        <Login />
      </div>
    </div>

    <!--  Top bar PREMIUM -->
    <div v-if="page === 'premium'" class="flex justify-between items-center">
      <NuxtLink v-if="card === null" to="/">
        <ThinLeftArrow />
      </NuxtLink>
      <div class="font-bold text-36 leading-42">mtgranks</div>
      <ThreeVerticalDots />
    </div>

    <!--  Set Name -->
    <div class="order-last">
      <!--  Search Bar -->
      <div
        class="flex justify-center mt-3"
        :class="{
          'mt-4': !card,
        }"
      >
        <SearchInput :cards="cards" class="-mb-20 text-black" />
      </div>
    </div>

    <!--  Card  -->
    <div
      v-if="card"
      class="mx-20 z-40 flex flex-col order-2 justify-center"
      :class="{
        'items-center': expanded,
        'justify-center': !expanded,
      }"
    >
      <div class="flex" :class="{ 'flex-col': expanded }">
        <CardImg
          :card="card"
          class="flex-shrink-0"
          :class="{ 'mr-8': !expanded }"
        />
        <HorizontalReview v-if="expanded" :rating="rating" class="mt-4" />
        <VerticalReview v-else :rating="rating" />
      </div>
      <client-only>
        <Disqus v-show="showComments" class="m-4 self-col" />
      </client-only>
      <!--      <button @click="showComments = !showComments">show comments</button>-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Header',
  props: {
    page: {
      type: String,
      default: 'mtgSet',
      required: true,
    },
  },
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
    ...mapGetters({
      expanded: 'expanded',
      cards: 'cards',
      currentUser: 'user/currentUser',
    }),
    ...mapState({
      isLoggedIn: (state) => state.user.currentUser,
    }),
    card: {
      get() {
        return this.$store.state.card
      },
      set(value) {
        this.$store.commit('setCard', value)
      },
    },
  },
  methods: {
    removeCard() {
      this.card = null
      this.removeQuery()
    },
    removeQuery() {
      this.$router.replace({ query: null })
    },
  },
}
</script>

<style scoped>
.opaque-logo {
  right: 20px;
  opacity: 0.1;
  font-size: 60px;
  line-height: 71px;
}
.small-screen {
  top: 100px;
}
.medium-screen {
  top: 220px;
}
.large-circle {
  height: 200px;
  width: 200px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.05);
}
.small-circle {
  height: 100px;
  width: 100px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: absolute;
  right: 0;
  top: 185px;
  background: rgba(255, 255, 255, 0.05);
}
.notch {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
.divider {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
</style>
