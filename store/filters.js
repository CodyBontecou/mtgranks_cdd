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
      options: [
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
          filterType: 'sets',
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
          filterType: 'sets',
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
          filterType: 'sets',
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
          filterType: 'sets',
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
          filterType: 'sets',
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
          filterType: 'sets',
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
          filterType: 'sets',
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
          filterType: 'sets',
        },
      ],
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
    const s = state.filters[option.filterType].options.find(
      (elem) => elem.label === option.label
    )
    s.isChecked = boolean
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
