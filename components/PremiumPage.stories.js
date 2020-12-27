export default {
  title: 'Premium Page',
}

export const PremiumFeature = () => ({
  data() {
    return {
      feature: {
        icon: {
          color: 'bg-gradient-black-gold',
          src: '',
        },
      },
    }
  },
  template: '<PremiumFeature :feature="feature"/>',
})

export const SubscriptionButton = () => '<SubscriptionButton />'
