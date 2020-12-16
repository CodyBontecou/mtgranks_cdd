<template>
  <button
    class="new-set-container outline-none focus:outline-none"
    :class="`bg-gradient-${color}`"
  >
    <NuxtLink
      :to="{ name: 'setSlug___en', params: { setSlug: set.slug } }"
      class="flex h-full w-full py-20 px-3"
    >
      <div class="flex flex-col justify-between">
        <div class="flex flex-col justify-start items-start text-white">
          <div class="text-8 font-normal">{{ set.code }}</div>
          <div class="text-14 font-semibold">{{ set.name }}</div>
        </div>
        <div class="flex justify-between items-end text-white">
          <div class="text-8 font-normal">{{ set.cardCount }} cards</div>
          <img
            class="filter-white text-white h-8 w-auto"
            :src="set.icon"
            :alt="`set.name set icon`"
          />
        </div>
      </div>
    </NuxtLink>
  </button>
</template>

<script>
export default {
  name: 'NewSet',
  props: {
    color: {
      type: String,
      required: true,
    },
    set: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.filter-white {
  filter: brightness(0) invert(1);
}
.new-set-container {
  height: 160px;
  width: 142px;
  border-radius: 20px;
}
</style>
