<template>
  <div class="fixed mr-20 right-0 cursor-pointer">
    <User
      v-if="isLoggedIn"
      @click.native="triggerNetlifyIdentityAction('open')"
    />
    <button
      v-else
      class="font-medium bg-white rounded p-2 items-center hover:shadow-2xl border border-ash border-opacity-25"
      @click="triggerNetlifyIdentityAction('login')"
    >
      <span class="opacity-75">Sign In</span>
    </button>
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
