export default {
  title: 'Landing Page',
}

export const OldSet = () => ({
  data() {
    return {
      set: {
        name: 'Theros Beyond Death',
        code: 'THB',
        icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
      },
    }
  },
  template: '<OldSet :set="set"/>',
})


