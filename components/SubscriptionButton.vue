<template>
  <NuxtLink to="/premium/subscribe">
    <div
      class="py-5 flex items-center justify-center w-full rounded-lg bg-white cursor-pointer"
    >
      <span class="text-black text-22 font-bold leading-26">
        Subscribe for $0.99
      </span>
      <span class="text-black text-12 leading-12 opacity-30"> / month</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'SubscriptionButton',
}
</script>

<style scoped></style>
