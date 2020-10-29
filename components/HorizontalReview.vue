<template>
  <div class="flex flex-row items-center">
    <p class="text-sm text-white leading-160 font-medium w-56">
      {{ ratings[0].reason }}
    </p>
    <div class="flex">
      <RatorBubble v-for="rating in ratings" :rating="rating.rating" :name="rating.rator.name"  />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalReview',
  data() {
    return {
      ratings: [
        {
          rator: {
            name: 'Justlolaman',
          },
          rating: 'A-',
          reason:
            'Best cards in the format. Bombs. Completely changes the game in your\n' +
            '      favor. Will almost single handedly win you the game.',
        },
        {
          rator: {
            name: 'M0bius',
          },
          rating: 'A-',
          reason:
            'Best cards in the format. Bombs. Completely changes the game in your\n' +
            '      favor. Will almost single handedly win you the game.',
        },
        {
          rator: {
            name: 'Scottynada',
          },
          rating: 'A-',
          reason:
            'Best cards in the format. Bombs. Completely changes the game in your\n' +
            '      favor. Will almost single handedly win you the game.',
        },
      ],
    }
  },
}
</script>
