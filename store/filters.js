import setsData from '../data/util/sets.json'

export const state = () => ({
  filtersList: ['colors', 'sets'],
  filters: {
    isExpanded: false,
    colors: {
      name: 'Colors',
      isExpanded: false,
      options: [
        { raw: 'R', label: 'Red', isChecked: true, filterType: 'colors' },
        { raw: 'G', label: 'Green', isChecked: true, filterType: 'colors' },
        { raw: 'U', label: 'Blue', isChecked: true, filterType: 'colors' },
        { raw: 'B', label: 'Black', isChecked: true, filterType: 'colors' },
        { raw: 'W', label: 'White', isChecked: true, filterType: 'colors' },
        { raw: '', label: 'Colorless', isChecked: true, filterType: 'colors' },
        { raw: null, label: 'Multi', isChecked: true, filterType: 'colors' },
      ],
    },
    sets: {
      name: 'Sets',
      isExpanded: false,
      options: setsData,
    },
  },
})

export const actions = {
  setFilters: ({ commit }, payload) => {
    commit('SET_FILTERS', payload)
  },
  toggleFilters: ({ commit }) => {
    commit('TOGGLE_FILTERS')
  },
  toggleFilter: ({ commit }, payload) => {
    commit('TOGGLE_FILTER', payload)
  },
  toggleOption: ({ commit }, payload) => {
    commit('TOGGLE_OPTION', payload)
  },
  setRetrieved: ({ commit }, payload) => {
    commit('SET_RETRIEVED', payload)
  },
}

export const mutations = {
  SET_FILTERS(state, filters) {
    state.filters = filters
  },
  TOGGLE_FILTERS(state) {
    state.filters.isExpanded = !state.filters.isExpanded
  },
  TOGGLE_FILTER(state, filter) {
    const key = filter.name.toLowerCase()
    state.filters[key].isExpanded = !state.filters[key].isExpanded
  },
  TOGGLE_OPTION(state, { option, boolean }) {
    // const s = state.filters[option.filterType].options.find(
    //   (elem) => elem.label === option.label
    // )
    if (option.filterType === 'sets') {
      state.filters.sets.options.forEach((set) => (set.isChecked = false))
    }
    option.isChecked = boolean
  },
  SET_RETRIEVED: (state, set) =>
    (state.filters.sets.options.find((s) => s === set).retrieved = true),
}

export const getters = {
  filters: (state) => state.filters,
  filterSet: (state) =>
    state.filtersList.map((filterId) => state.filters[filterId]),
  checkedSets: (state) =>
    state.filters.sets.options.filter((set) => set.isChecked),
  checkedColors: (state) =>
    state.filters.colors.options.filter((color) => color.isChecked),
}
