<template>
  <div
    class="flex items-center justify-center rounded-md bg-gray-2 min-h-80 max-h-80 min-w-80 max-w-80"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PremiumFeature',
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
