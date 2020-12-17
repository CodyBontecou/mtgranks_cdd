<template>
  <div class="flex items-center">
    <p class="text-sm text-white leading-160 font-medium">
      {{ ratings[0].reason }}
    </p>
    <div class="flex">
      <RatorBubble
        v-for="(rating, i) in ratings"
        :key="i"
        :rating="rating.rating"
        :name="rating.rator.name"
      />
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
