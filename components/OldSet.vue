<template>
  <button class="w-full rounded-10 h-66 bg-gray-1">
    <div class="flex justify-between" @click="navigateToSet">
      <div class="flex">
        <div
          class="flex items-center justify-center w-12 h-38 rounded ml-20 mr-3"
          :class="{
            'bg-ash': color === 'ash',
            'bg-teal': color === 'teal',
            'bg-mandarin': color === 'mandarin',
            'bg-peach': color === 'peach',
          }"
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
  methods: {
    navigateToSet() {
      this.$router.push({
        name: 'set___en',
        params: { set: this.set.slug, object: this.set },
      })
    },
  },
}
</script>

<style scoped>
.filter-white {
  filter: brightness(0) invert(1);
}
</style>
