<template>
  <div class="flex items-center">
    <p class="text-sm text-white leading-160 font-medium">
      {{ rating.reason }}
    </p>
    <div class="flex">
      <RatorBubble :rating="rating.rating" :name="rating.rator.name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalReview',
  props: {
    rating: {
      type: Object,
      required: true,
    },
  },
}
</script>
