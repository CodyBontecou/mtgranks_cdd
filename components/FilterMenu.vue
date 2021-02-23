<template>
  <div class="font-medium text-xs">
    <div
      class="relative rounded p-2 flex flex-row-reverse bg-white items-center justify-center shadow-2xl hover:shadow-lg border border-ash border-opacity-25 cursor-pointer"
    >
      <div class="self-end" @click="toggleFilters">
        <button
          class="flex items-center justify-between focus:outline-none hover:opacity-75 opacity-50"
          :class="{
            'opacity-100': filters.isExpanded,
          }"
        >
          {{ $t('filters') }}
          <RightArrow
            class="h-4 w-4 ml-1 transform transition-transform duration-150 ease-in-out"
            :class="{
              'rotate-90': filters.isExpanded,
              'rotate-0': !filters.isExpanded,
            }"
          />
        </button>
      </div>

      <div v-if="filters.isExpanded" class="focus:outline-none flex">
        <div
          v-for="(filter, childIndex) in filterSet"
          :key="`child-${childIndex + 1}`"
          class="mr-6 flex flex-col-reverse"
        >
          <button
            class="flex items-center justify-between hover:opacity-75 opacity-50 focus:outline-none"
            :class="{
              'opacity-100': filter.isExpanded,
            }"
            @click="toggleFilter(filter)"
          >
            {{ filter.name }}
            <RightArrow
              class="h-4 w-4 ml-1 -mr-1 transform transition-transform duration-150 ease-in-out hover:opacity-75 opacity-50"
              :class="{
                'opacity-100 -rotate-90': filter.isExpanded,
                'rotate-0': !filter.isExpanded,
              }"
            />
          </button>
          <div v-if="filter.isExpanded" class="flex flex-col">
            <label
              v-for="(option, optionIndex) in filter.options"
              :key="`child-${childIndex + 1}-option-${optionIndex + 1}`"
              class="flex items-center justify-between cursor-pointer font-normal hover:opacity-100 opacity-75"
              :class="{
                'mb-3': optionIndex !== filter.options.length - 1,
                'opacity-50': !option.isChecked,
              }"
            >
              <span
                class="mr-2"
                :class="{
                  'opacity-50': !option.isChecked,
                }"
              >
                {{ option.label }}
              </span>
              <input
                :checked="option.isChecked"
                type="checkbox"
                class="flex-shrink-0 cursor-pointer form-checkbox text-charcoal border-charcoal hover:opacity-75 opacity-50"
                @click="handleOptionClick(option)"
              />
            </label>
            <div class="my-2 border-t border-ash rounded opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import RightArrow from '~/components/RightArrow'

export default {
  components: {
    RightArrow: RightArrow,
  },
  computed: {
    ...mapGetters({
      filters: 'filters/filters',
      filterSet: 'filters/filterSet',
    }),
  },
  methods: {
    ...mapActions({
      toggleFilters: 'filters/toggleFilters',
      toggleFilter: 'filters/toggleFilter',
      toggleOption: 'filters/toggleOption',
    }),
    handleOptionClick(option) {
      const boolean = !option.isChecked
      this.toggleOption({ option, boolean })
      this.$emit('filterToggled', option)
    },
  },
}
</script>
