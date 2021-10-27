import * as sets from '../data/util/sets.json'

function generateCardSlug(card) {
  return card.name
    .replace(/[/:.,']/g, '')
    .replace(/ /g, '-')
    .replace(/--/g, '-')
    .toLowerCase()
}

export const state = () => ({
  sets: sets,
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
