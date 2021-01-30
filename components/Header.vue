<template>
  <div
    class="flex flex-col justify-between md:justify-start w-full notch"
    :class="{
      'fixed top-0 h-40 bg-charcoal text-white md:w-divider md:h-screen md:fixed divider':
        page === 'mtgSet' && card === null,
      'fixed top-0 h-auto bg-charcoal text-white md:w-divider md:h-screen md:fixed divider':
        page === 'mtgSet' && card !== null,
      'bg-transparent text-black': page === 'home',
      'text-white': page === 'premium',
    }"
  >
    <!--  Top bar mtgSet -->
    <div v-if="page === 'mtgSet'" class="flex flex-col m-20 order-1 md:order-1">
      <div class="flex justify-between">
        <NuxtLink v-if="card === null" to="/">
          <ThinLeftArrow />
        </NuxtLink>
        <div v-if="card" class="cursor-pointer" @click="removeCard">
          <CloseIcon />
        </div>
        <NuxtLink to="/">
          <div class="font-bold text-24">mtgranks</div>
        </NuxtLink>
        <ThreeVerticalDots />
      </div>
    </div>

    <!--  Top bar HOME -->
    <div v-if="page === 'home'" class="flex justify-center items-center">
      <div class="absolute ml-20 left-0">
        <User
          v-if="isLoggedIn"
          @click.native="triggerNetlifyIdentityAction('open')"
        />
        <User v-else @click.native="triggerNetlifyIdentityAction('login')" />
      </div>
      <div class="font-bold text-36 leading-42">mtgranks</div>
      <div class="absolute mr-20 right-0 flex">
        <GlobeIcon class="fill-current text-earth" />
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

    <!--  Set Name -->
    <div v-if="set !== null" class="order-last md:order-2">
      <div class="font-bold text-20 leading-29 opacity-75 ml-20">
        {{ set.name }}
      </div>

      <!--  Search Bar -->
      <div class="flex justify-center mt-3 md:mt-4">
        <SearchInput :cards="cards" class="-mb-20 md:mb-0 text-black" />
      </div>
    </div>

    <!--  Card  -->
    <div
      v-if="card"
      class="m-20 z-40 flex md:flex-col md:items-center order-2 md:order-3"
      :class="{
        'flex-col items-center': expanded,
        'justify-center': !expanded,
      }"
    >
      <CardImg :card="card" />
      <HorizontalReview v-if="expanded" :rating="rating" class="mt-4" />
      <VerticalReview v-else :rating="rating" class="ml-8 md:ml-0 md:mt-4" />
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
      set: 'set',
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
    ...mapActions({
      setUser: 'user/setUser',
    }),
    triggerNetlifyIdentityAction(action) {
      try {
        if (action === 'login' || action === 'signup') {
          window.netlifyIdentity.open(action)
          window.netlifyIdentity.on(action, (user) => {
            this.setUser(user)
            window.netlifyIdentity.close()
          })
        } else if (action === 'open') {
          window.netlifyIdentity.open()
          window.netlifyIdentity.on('logout', () => {
            window.netlifyIdentity.close()
          })
        }
      } catch (error) {
        this.$sentry.captureException(error)
      }
    },
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
.divider {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
</style>
