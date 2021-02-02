<template>
  <div
    class="fixed bg-white mr-20 right-0 cursor-pointer p-1 rounded-full shadow-2xl hover:shadow-lg border border-opacity-25"
    :class="{
      'border-ash text-ash': !isLoggedIn,
      'border-blue-400 text-blue-400': isLoggedIn,
    }"
  >
    <User @click.native="triggerNetlifyIdentityAction('open')" />
    <!--    <button-->
    <!--      v-else-->
    <!--      class="text-black font-medium bg-white rounded p-2 items-center hover:shadow-2xl border border-ash border-opacity-25"-->
    <!--      @click="triggerNetlifyIdentityAction('login')"-->
    <!--    >-->
    <!--      <span class="opacity-75">Sign In</span>-->
    <!--    </button>-->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.user.currentUser,
    }),
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
    }),
    triggerNetlifyIdentityAction(action) {
      window.netlifyIdentity.on('signup', (user) => {
        console.log(user)
        this.setUser(user)
        window.netlifyIdentity.close()
      })
      window.netlifyIdentity.on('login', (user) => {
        console.log(user)
        this.setUser(user)
        window.netlifyIdentity.close()
      })
      try {
        if (action === 'login' || action === 'signup') {
          window.netlifyIdentity.open(action)
        } else if (action === 'open') {
          window.netlifyIdentity.open()
          window.netlifyIdentity.on('logout', () => {
            this.setUser(null)
            window.netlifyIdentity.close()
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped></style>
