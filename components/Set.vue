<template>
  <div
    class="flex items-center justify-between w-full rounded-10 h-66 bg-gray-1"
  >
    <div class="flex items-center">
      <div
        class="flex items-center justify-center bg-charcoal w-12 h-38 rounded ml-20 mr-3"
      >
        <img
          class="filter-white text-white h-8 w-6"
          :src="set.icon"
          :alt="`set.name set icon`"
        />
      </div>
      <div class="flex flex-col">
        <div class="text-10 font-semibold">
          {{ set.code }}
        </div>
        <div class="text-18 font-semibold">{{ set.name }}</div>
      </div>
    </div>
    <RightArrowCircle class="mr-20" />
  </div>
</template>

<script>
export default {
  name: 'Set',
  props: {
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
</style>
