<template>
  <div
    class="flex flex-col justify-between w-full notch"
    :class="{
      'fixed top-0 bg-ash text-white': page === 'mtgSet',
      'text-white': page === 'premium',
      'h-screen overflow-y-hidden': card,
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

    <!--  Card  -->
    <CardDetails />

    <!--    <button @click="showComments = !showComments">show comments</button>-->
    <client-only>
      <Disqus v-show="showComments" class="m-4 self-col" />
    </client-only>

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
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

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
.notch {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
</style>
