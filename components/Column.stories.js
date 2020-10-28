export default {
  title: 'Column',
}

export const Column = () => ({
  data() {
    return {
      color: 'Green',
      cards: [
        {
          name: 'Ashaya, Soul of the Wild',
          rating: 'A-',
        },
        {
          name: 'Adventure Awaits',
          rating: 'D+',
        },
        {
          name: 'Ashaya, Soul of the Wild',
          rating: 'A-',
        },
        {
          name: 'Adventure Awaits',
          rating: 'D+',
        },
        {
          name: 'Ashaya, Soul of the Wild',
          rating: 'A-',
        },
        {
          name: 'Adventure Awaits',
          rating: 'D+',
        },
        {
          name: 'Ashaya, Soul of the Wild',
          rating: 'A-',
        },
        {
          name: 'Adventure Awaits',
          rating: 'D+',
        },
        {
          name: 'Ashaya, Soul of the Wild',
          rating: 'A-',
        },
        {
          name: 'Adventure Awaits',
          rating: 'D+',
        },
        {
          name: 'Ashaya, Soul of the Wild',
          rating: 'A-',
        },
        {
          name: 'Adventure Awaits',
          rating: 'D+',
        },
        {
          name: 'Ashaya, Soul of the Wild',
          rating: 'A-',
        },
        {
          name: 'Adventure Awaits',
          rating: 'D+',
        },
      ],
    }
  },
  template: '<Column :color="color" :cards="cards"/>',
})
