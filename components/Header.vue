<template>
  <div
    class="flex flex-col justify-between w-full"
    :class="{
      'fixed top-0 h-40 bg-charcoal text-white notch':
        page === 'mtgSet' && card === null,
      'fixed top-0 h-auto bg-charcoal text-white notch':
        page === 'mtgSet' && card !== null,
      'bg-transparent text-black': page === 'home',
    }"
  >
    <!--  Top bar mtgSet -->
    <div v-if="page === 'mtgSet'" class="flex flex-col m-20">
      <div class="flex justify-between">
        <NuxtLink v-if="card === null" to="/">
          <ThinLeftArrow />
        </NuxtLink>
        <div v-if="card" @click="removeCard">
          <CloseIcon />
        </div>
        <NuxtLink to="/">
          <div class="font-bold text-24">mtgranks</div>
        </NuxtLink>
        <ThreeVerticalDots />
      </div>
      <div
        v-if="card"
        class="flex mt-20 z-40"
        :class="{
          'flex-col items-center': expanded,
          'justify-between': !expanded,
        }"
      >
        <CardImg :card="card" />
        <HorizontalReview v-if="expanded" class="mt-4" />
        <VerticalReview v-else />
      </div>
    </div>

    <!--  Top bar HOME -->
    <div v-if="page === 'home'" class="flex justify-center items-center">
      <div class="font-bold text-36 leading-42">mtgranks</div>
      <div class="absolute mr-20 right-0 flex">
        <GlobeIcon />
        <DownArrow class="ml-1" />
      </div>
    </div>

    <!--  Bubbles and opaque Mtgranks logo  -->
    <div v-if="page === 'mtgSet'" class="large-circle"></div>
    <div v-if="page === 'mtgSet'" class="small-circle"></div>
    <span
      v-if="page === 'mtgSet'"
      class="opaque-logo absolute text-white font-bold"
      :class="{
        'small-screen': card === null,
        'medium-screen': card !== null,
      }"
    >
      mtgranks
    </span>

    <div v-if="set !== null">
      <!--  Set Name -->
      <div
        v-if="card === null"
        class="font-bold text-24 leading-29 opacity-75 ml-20"
      >
        {{ set.name }}
      </div>

      <!--  Search Bar -->
      <div class="flex justify-center">
        <SearchInput class="-mb-20 mt-3 text-black" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  props: {
    page: {
      type: String,
      default: 'mtgSet',
      required: true,
    },
  },
  computed: {
    ...mapGetters(['set', 'expanded']),
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
    shrinkCard() {
      this.$store.commit('setExpanded', false)
    },
    removeCard() {
      this.card = null
      this.shrinkCard()
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
</style>
