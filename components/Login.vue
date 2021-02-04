<template>
  <div
    class="fixed bg-white mr-20 right-0 top-0 mt-20 cursor-pointer rounded-full shadow-2xl hover:shadow-lg border border-opacity-25"
    :class="{
      'border-ash text-ash': !isLoggedIn,
      'border-blue-400 text-blue-400': isLoggedIn,
    }"
  >
    <User
      class="w-6 h-6"
      @click.native="triggerNetlifyIdentityAction('open')"
    />
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
        this.setUser(user)
        window.netlifyIdentity.close()
      })
      window.netlifyIdentity.on('login', (user) => {
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
