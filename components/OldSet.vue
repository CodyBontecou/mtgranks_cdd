<template>
  <button class="w-full rounded-10 h-66 bg-gray-1">
    <NuxtLink
      :to="{ name: 'set___en', params: { set: set.slug, object: set } }"
    >
      <div class="flex justify-between">
        <div class="flex">
          <div
            class="flex items-center justify-center w-12 h-38 rounded ml-20 mr-3"
            :class="`bg-${color}`"
          >
            <img
              class="filter-white text-white h-8 w-6"
              :src="set.icon"
              :alt="`set.name set icon`"
            />
          </div>
          <div class="flex flex-col items-start">
            <div class="text-10 font-semibold">
              {{ set.code }}
            </div>
            <div class="text-18 font-semibold">{{ setName }}</div>
          </div>
        </div>
        <RightArrowCircle class="mr-20 self-center" />
      </div>
    </NuxtLink>
  </button>
</template>

<script>
export default {
  name: 'Set',
  props: {
    color: {
      type: String,
      required: true,
      default: 'charcoal',
    },
    set: {
      type: Object,
      required: true,
    },
  },
  computed: {
    setName() {
      if (this.set.name.length > 22) {
        return this.set.name.substring(0, 19) + '...'
      } else {
        return this.set.name
      }
    },
  },
}
</script>

<style scoped>
.filter-white {
  filter: brightness(0) invert(1);
}
</style>
