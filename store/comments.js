export const state = () => ({
  pageConfig: {
    identifier: '',
  },
  identifier: '',
})

export const mutations = {
  SET_CONFIG(state, config) {
    state.pageConfig = config
  },
  SET_IDENTIFIER(state, identifier) {
    state.identifier = identifier
  },
}

export const actions = {
  setConfig: ({ commit }, payload) => {
    commit('SET_CONFIG', payload)
  },
  setIdentifier: ({ commit }, payload) => {
    commit('SET_IDENTIFIER', payload)
  },
}

export const getters = {
  pageConfig: (state) => state.pageConfig,
  identifier: (state) => state.identifier,
}
