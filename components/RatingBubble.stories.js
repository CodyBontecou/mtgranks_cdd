export default {
  title: 'Rating Bubble',
}

export const LowRating = () => ({
  data() {
    return {
      card: {
        rating: 'D',
      },
    }
  },
  template: '<RatingBubble :rating="card.rating"/>',
})

export const HighRating = () => ({
  data() {
    return {
      card: {
        rating: 'A',
      },
    }
  },
  template: '<RatingBubble :rating="card.rating"/>',
})

export const WithPlus = () => ({
  data() {
    return {
      card: {
        rating: 'D+',
      },
    }
  },
  template: '<RatingBubble :rating="card.rating"/>',
})

export const WithMinus = () => ({
  data() {
    return {
      card: {
        rating: 'D-',
      },
    }
  },
  template: '<RatingBubble :rating="card.rating"/>',
})
