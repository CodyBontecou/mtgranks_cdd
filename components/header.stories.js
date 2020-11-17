export default {
  title: 'Header',
}

export const Header = () => '<Header />'
export const HeaderWithSet = () => ({
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
  template: '<Header :set="set"/>',
})
