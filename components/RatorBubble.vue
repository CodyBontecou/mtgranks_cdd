<template>
  <div class="flex flex-col pr-2">
    <RatingBubble :rating="rating" class="self-center mb-2" />
    <span class="self-center text-white font-medium text-2xs leading-130">
      {{ name }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'RatorBubble',
  props: {
    rating: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
