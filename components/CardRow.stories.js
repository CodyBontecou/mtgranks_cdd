export default {
  title: 'Card Row',
}

export const Card = () => ({
  data() {
    return {
      card: {
        name: 'Adventure Awaits',
        rating: 'D',
      },
    }
  },
  template: '<CardRow :card="card"/>',
})

export const LongNamedHighRatedCard = () => ({
  data() {
    return {
      card: {
        name: 'Ashaya, Soul of the Wild',
        rating: 'A-',
      },
    }
  },
  template: '<CardRow :card="card"/>',
})
