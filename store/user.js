export const state = () => ({
  currentUser: null,
})

export const mutations = {
  SET_USER(state, currentUser) {
    state.currentUser = currentUser
  },
}

export const actions = {
  setUser: ({ commit }, payload) => {
    commit('SET_USER', payload)
  },
}
