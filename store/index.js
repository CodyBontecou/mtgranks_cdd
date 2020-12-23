function generateCardSlug(card) {
  return card.name
    .replace(/[/:.,']/g, '')
    .replace(/ /g, '-')
    .replace(/--/g, '-')
    .toLowerCase()
}

export const state = () => ({
  sets: [
    {
      name: 'Zendikar Rising',
      code: 'ZNR',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
      cardCount: '220',
      color: 'black-gold',
      type: 'new',
      slug: 'zendikar-rising',
    },
    {
      name: 'Ikoria: Lair of Behemoths',
      code: 'IKO',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/iko.svg',
      cardCount: '264',
      color: 'orange-red',
      type: 'new',
      slug: 'ikoria-lair-of-behemoths',
    },
    {
      name: 'Core 2021',
      code: 'M21',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m21.svg',
      cardCount: '264',
      color: 'black-green',
      type: 'new',
      slug: 'core-2021',
    },
    {
      name: 'Theros Beyond Death',
      code: 'THB',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
      cardCount: '220',
      color: 'ash',
      type: 'old',
      slug: 'theros-beyond-death',
    },
    {
      name: 'Throne of Eldraine',
      code: 'ELD',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/eld.svg',
      cardCount: '264',
      color: 'teal',
      type: 'old',
      slug: 'throne-of-eldraine',
    },
    {
      name: 'Core 2020',
      code: 'M20',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m20.svg',
      cardCount: '264',
      color: 'mandarin',
      type: 'old',
      slug: 'core-2020',
    },
    {
      name: 'War of the Spark',
      code: 'WAR',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/war.svg',
      cardCount: '264',
      color: 'peach',
      type: 'old',
      slug: 'war-of-the-spark',
    },
  ],
  cards: [],
  set: null,
  card: null,
  expanded: false,
  colorLabels: [
    { Colorless: '' },
    { Black: 'B' },
    { Blue: 'U' },
    { Red: 'R' },
    { White: 'W' },
    { Green: 'G' },
    { Boros: 'RW' },
    { Azorius: 'UW' },
    { Dimir: 'BU' },
    { Golgari: 'BG' },
    { Gruul: 'GR' },
    { Izzet: 'RU' },
    { Orzhov: 'BW' },
    { Rakdos: 'BR' },
    { Selesnya: 'GW' },
    { Simic: 'GU' },
    { Abzan: 'WBG' },
    { Bant: 'GUW' },
    { Esper: 'BUW' },
    { Grixis: 'UBR' },
    { Jeskai: 'RUW' },
    { Jund: 'BGR' },
    { Mardu: 'BRW' },
    { Naya: 'GRW' },
    { Sultai: 'BGU' },
    { Temur: 'BRU' },
    { Glint: 'BGRU' },
    { Dune: 'BGRW' },
    { Ink: 'GRUW' },
    { Yore: 'BRUW' },
  ],
  colors: [
    { raw: '', isChecked: true, label: 'Colorless' },
    { raw: 'R', isChecked: true, label: 'Red' },
    { raw: 'G', isChecked: true, label: 'Green' },
    { raw: 'U', isChecked: true, label: 'Blue' },
    { raw: 'B', isChecked: true, label: 'Black' },
    { raw: 'W', isChecked: true, label: 'White' },
    { raw: null, isChecked: true, label: 'Multi' },
  ],
})

export const actions = {
  async getCards({ commit }, setCode) {
    try {
      const { data } = await this.$axios.$get(
        `https://api.scryfall.com/cards/search?q=set:${setCode}+is:booster`
      )
      data.forEach((card) => (card.slug = generateCardSlug(card)))
      commit('setCards', data)
    } catch (e) {
      console.log(e)
    }
  },
}

export const mutations = {
  setCard(state, card) {
    state.card = card
  },
  setCards(state, cards) {
    state.cards = cards
  },
  setSet(state, set) {
    state.set = set
  },
  setExpanded(state, expanded) {
    state.expanded = expanded
  },
  toggleColor(state, { color, boolean }) {
    const c = state.colors.find((elem) => elem.label === color.label)
    c.isChecked = boolean
  },
}

export const getters = {
  card(state) {
    return state.card
  },
  cards(state) {
    return state.cards
  },
  set(state) {
    return state.set
  },
  sets(state) {
    return state.sets
  },
  expanded(state) {
    return state.expanded
  },
  filters(state) {
    return state.filters
  },
  newSets(state) {
    return state.sets.filter((set) => set.type === 'new')
  },
  oldSets(state) {
    return state.sets.filter((set) => set.type === 'old')
  },
  inputPlaceholderText(state) {
    if (state.card === null || state.cards.length === 0) {
      return 'Search for a card'
    } else {
      return state.card.name
    }
  },
  colors(state) {
    return state.colors
  },
  colorLabels(state) {
    return state.colorLabels
  },
}
