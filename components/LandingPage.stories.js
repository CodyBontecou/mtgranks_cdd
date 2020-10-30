export default {
  title: 'Landing Page',
}

export const Set = () => ({
  data() {
    return {
      set: {
        name: 'Theros Beyond Death',
        code: 'THB',
        icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
      },
    }
  },
  template: '<Set :set="set"/>',
})
