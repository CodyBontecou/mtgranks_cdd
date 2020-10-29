export default {
  title: 'Rator',
}

export const RatorBubble = () => ({
  data() {
    return {
      card: {
        rating: 'D',
      },
      rator: {
        name: 'Justlolaman',
      },
    }
  },
  template: '<RatorBubble :rating="card.rating" :rator="rator"/>',
})

export const VerticalReviewCard = () => '<VerticalReview />'
