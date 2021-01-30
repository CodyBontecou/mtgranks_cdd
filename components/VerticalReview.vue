<template>
  <div class="flex flex-col w-170">
    <div class="flex pb-4">
      <RatorBubble :rating="rating.rating" :name="rating.rator.name" />
    </div>
    <p class="text-12 text-white leading-160 font-medium">
      {{ rating.reason }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'VerticalReview',
  props: {
    rating: {
      type: Object,
      required: true,
    },
  },
}
</script>
