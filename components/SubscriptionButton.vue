<template>
  <!--  <NuxtLink to="/premium/subscribe">-->
  <div
    class="py-5 flex items-center justify-center w-full rounded-lg bg-white cursor-pointer"
    @click="handlePremium"
  >
    <span class="text-black text-22 font-bold leading-26">
      Subscribe for $0.99
    </span>
    <span class="text-black text-12 leading-12 opacity-30"> / month</span>
  </div>
  <!--  </NuxtLink>-->
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SubscriptionButton',
  computed: {
    ...mapGetters({ currentUser: 'user/currentUser' }),
    ...mapState({
      isPremium: (state) =>
        state.user.currentUser?.app_metadata.roles.includes('premium'),
    }),
  },
  methods: {
    handlePremium() {
      const token = this.currentUser.token.access_token
      this.$axios
        .post(
          'https://mtgranks.netlify.app/.netlify/functions/create-manage-link',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          window.netlifyIdentity.logout()
          window.location.href = response.data
        })
        .catch((err) => console.error(err))
    },
  },
}
</script>

<style scoped></style>
