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
  template: '<RatorBubble :rating="card.rating" :name="rator.name"/>',
})

export const VerticalReviewCard = () => '<VerticalReview />'
export const HorizontalReviewCard = () => '<HorizontalReview />'
