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

export const NewSet = () => ({
  data() {
    return {
      set: {
        name: 'Zendikar Rising',
        code: 'ZNR',
        icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
        cardCount: '220',
      },
    }
  },
  template: '<NewSet :set="set" color="black-gold"/>',
})
