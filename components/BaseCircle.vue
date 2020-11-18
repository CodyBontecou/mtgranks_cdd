<template>
  <div
    class="flex items-center justify-center rounded-full h-8 w-8 min-h-8 min-w-8"
    :class="`bg-${color}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCircle',
  props: {
    color: {
      type: String,
      required: true,
      default: 'black',
    },
  },
}
</script>

<style scoped></style>
