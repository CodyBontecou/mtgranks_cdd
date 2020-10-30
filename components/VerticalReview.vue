<template>
  <div class="flex flex-col w-170">
    <div class="flex pb-4">
      <RatorBubble
        v-for="(rating, i) in ratings"
        :key="i"
        :rating="rating.rating"
        :name="rating.rator.name"
      />
    </div>
    <p class="text-12 text-white leading-160 font-medium">
      {{ ratings[0].reason }}
    </p>
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
