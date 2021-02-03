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
      name: 'Kaldheim',
      code: 'KHM',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/khm.svg',
      cardCount: '220',
      color: 'black-gold',
      type: 'new',
      slug: 'kaldheim',
      isChecked: true,
      label: 'KHM',
      filterType: 'set',
      retrieved: false,
    },
    {
      name: 'Zendikar Rising',
      code: 'ZNR',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
      cardCount: '220',
      color: 'black-gold',
      type: 'new',
      slug: 'zendikar-rising',
      isChecked: false,
      label: 'ZNR',
      filterType: 'set',
      retrieved: false,
    },
    {
      name: 'Ikoria: Lair of Behemoths',
      code: 'IKO',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/iko.svg',
      cardCount: '264',
      color: 'orange-red',
      type: 'new',
      slug: 'ikoria-lair-of-behemoths',
      isChecked: false,
      label: 'IKO',
      filterType: 'set',
      retrieved: false,
    },
    {
      name: 'Core 2021',
      code: 'M21',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m21.svg',
      cardCount: '264',
      color: 'black-green',
      type: 'new',
      slug: 'core-2021',
      isChecked: false,
      label: 'M21',
      filterType: 'set',
      retrieved: false,
    },
    {
      name: 'Theros Beyond Death',
      code: 'THB',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/thb.svg',
      cardCount: '220',
      color: 'ash',
      type: 'old',
      slug: 'theros-beyond-death',
      isChecked: false,
      label: 'THB',
      filterType: 'set',
      retrieved: false,
    },
    {
      name: 'Throne of Eldraine',
      code: 'ELD',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/eld.svg',
      cardCount: '264',
      color: 'teal',
      type: 'old',
      slug: 'throne-of-eldraine',
      isChecked: false,
      label: 'ELD',
      filterType: 'set',
      retrieved: false,
    },
    {
      name: 'Core 2020',
      code: 'M20',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/m20.svg',
      cardCount: '264',
      color: 'mandarin',
      type: 'old',
      slug: 'core-2020',
      isChecked: false,
      label: 'M20',
      filterType: 'set',
      retrieved: false,
    },
    {
      name: 'War of the Spark',
      code: 'WAR',
      icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/war.svg',
      cardCount: '264',
      color: 'peach',
      type: 'old',
      slug: 'war-of-the-spark',
      isChecked: false,
      label: 'WAR',
      filterType: 'set',
      retrieved: false,
    },
  ],
  cards: [],
  set: null,
  card: null,
  expanded: false,
  sideDrawerExpanded: false,
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
  async getCards({ commit, dispatch }, setCode) {
    const url = `https://api.scryfall.com/cards/search?q=set:${setCode}+is:booster`
    try {
      const response = await this.$axios.$get(url)
      let data = response.data
      if (response.has_more) {
        const additionalData = await dispatch(
          'getPaginatedCards',
          response.next_page
        )
        data = data.concat(additionalData)
      }
      data.forEach((card) => (card.slug = generateCardSlug(card)))
      commit('setCards', data)
    } catch (e) {
      console.log(e)
    }
  },

  async _getCards({ commit, dispatch, state }) {
    let url
    let data = []

    for (const set of state.sets) {
      if (set.isChecked && !set.retrieved) {
        url = `https://api.scryfall.com/cards/search?q=set:${set.code}+is:booster`
        try {
          const response = await this.$axios.$get(url)
          data = data.concat(response.data)
          if (response.has_more) {
            const additionalData = await dispatch(
              'getPaginatedCards',
              response.next_page
            )
            data = data.concat(additionalData)
          }
          set.retrieved = true
        } catch (e) {
          console.log(e)
        }
      }
    }

    if (data.length > 0) {
      data.forEach((card) => (card.slug = generateCardSlug(card)))
      commit('updateCards', data)
    }
  },

  async getPaginatedCards({ dispatch }, url) {
    const response = await this.$axios.$get(url)
    let data = response.data
    if (response.has_more) {
      const additionalData = await dispatch(
        'getPaginatedCards',
        response.next_page
      )
      data = data.concat(additionalData)
    } else {
      return data
    }
  },
  toggleSideDrawerExpanded: ({ commit }, payload) => {
    commit('TOGGLE_EXPANDED', payload)
  },
  setSideDrawerExpanded: ({ commit }, payload) => {
    commit('SET_EXPANDED', payload)
  },
  toggleExpandedImage: ({ commit }) => {
    commit('TOGGLE_EXPANDED_IMAGE')
  },
}

export const mutations = {
  setCard(state, card) {
    state.card = card
  },
  setCards(state, cards) {
    state.cards = cards
  },
  updateCards(state, cards) {
    state.cards = state.cards.concat(cards)
  },
  setSet(state, set) {
    state.set = set
  },
  TOGGLE_EXPANDED(state) {
    state.sideDrawerExpanded = !state.sideDrawerExpanded
  },
  SET_EXPANDED(state, bool) {
    state.sideDrawerExpanded = bool
  },
  TOGGLE_EXPANDED_IMAGE(state) {
    state.expanded = !state.expanded
  },
  toggleColor(state, { color, boolean }) {
    const c = state.colors.find((elem) => elem.label === color.label)
    c.isChecked = boolean
  },
  toggleSet(state, { set, boolean }) {
    const s = state.sets.find((elem) => elem.label === set.label)
    s.isChecked = boolean
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
  sideDrawerExpanded(state) {
    return state.sideDrawerExpanded
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
    if (state.card) {
      return state.card.name
    } else {
      return 'Search Mtgranks'
    }
  },
  colors(state) {
    return state.colors
  },
  colorLabels(state) {
    return state.colorLabels
  },
  tcgPriceLink(state) {
    return state.card.purchase_uris.tcgplayer.replace('scryfall', 'mtgranks')
  },
}
