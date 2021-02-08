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
      isChecked: false,
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

  async _getCards({ commit, dispatch, rootGetters }) {
    let url
    let data = []

    for (const set of rootGetters['filters/checkedSets']) {
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
          commit('filters/SET_RETRIEVED', set)
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
  _setCard: ({ commit }, payload) => {
    commit('SET_CARD', payload)
  },
  setActiveSets: ({ commit }, payload) => {
    commit('SET_ACTIVE_SETS', payload)
  },
}

export const mutations = {
  setCard(state, card) {
    state.card = card
  },
  SET_CARD(state, card) {
    state.card = card
  },
  setCards(state, cards) {
    state.cards = cards
  },
  updateCards(state, cards) {
    state.cards = state.cards
      .concat(cards)
      .sort((a, b) => a.name.localeCompare(b.name))
  },
  setSet(state, set) {
    state.set = set
  },
  SET_ACTIVE_SETS(state, setSlug) {
    const setObject = state.sets.find((s) => s.slug === setSlug)
    if (setObject) {
      setObject.isChecked = true
    }
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
}

export const getters = {
  card: (state) => state.card,
  cards: (state) => state.cards,
  set: (state) => state.set,
  sets: (state) => state.sets,
  expanded: (state) => state.expanded,
  sideDrawerExpanded: (state) => state.sideDrawerExpanded,
  tcgPriceLink: (state) =>
    state.card.purchase_uris.tcgplayer.replace('scryfall', 'mtgranks'),
}
