<template>
  <div class="mb-2 font-medium text-xs">
    <button
      class="absolute filter flex items-center px-2 py-1 opacity-50 hover:opacity-75 mb-2 focus:outline-none"
      @click="filters.isExpanded = !filters.isExpanded"
    >
      {{ $t('filters') }}
      <RightArrow
        class="h-4 w-4 ml-1 -mr-1 transform transition-transform duration-150 ease-in-out opacity-50 hover:opacity-75"
        :class="filters.isExpanded ? 'rotate-90' : 'rotate-0'"
      />
    </button>
    <div
      v-if="filters.isExpanded"
      class="mr-4 mb-4 absolute filter focus:outline-none"
    >
      <div
        v-for="(child, childIndex) in filters.children"
        :key="`child-${childIndex + 1}`"
      >
        <button
          class="mb-4 absolute filter flex items-center px-2 py-1 opacity-50 hover:opacity-75"
          @click="child.isExpanded = !child.isExpanded"
        >
          {{ child.name }}
          <RightArrow
            class="h-4 w-4 ml-1 -mr-1 transform transition-transform duration-150 ease-in-out opacity-50 hover:opacity-75"
            :class="child.isExpanded ? 'rotate-90' : 'rotate-0'"
          />
        </button>
        <div v-if="child.isExpanded" class="inline-flex flex-col mb-8">
          <label
            v-for="(option, optionIndex) in child.options"
            :key="`child-${childIndex + 1}-option-${optionIndex + 1}`"
            class="flex mb-3 items-center justify-between cursor-pointer font-normal"
          >
            <span
              class="ml-2 mr-4 hover:opacity-75"
              :class="{
                'opacity-100': option.isChecked === true,
                'opacity-50': option.isChecked === false,
              }"
            >
              {{ option.label }}
            </span>
            <input
              v-model="option.isChecked"
              type="checkbox"
              class="flex-shrink-0 cursor-pointer form-checkbox text-charcoal"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      filters: {
        isExpanded: false,
        children: [
          {
            name: 'Colors',
            isExpanded: false,
            options: [
              { label: 'Red', isChecked: true },
              { label: 'Green', isChecked: true },
              { label: 'Blue', isChecked: true },
              { label: 'Black', isChecked: true },
              { label: 'White', isChecked: true },
              { label: 'Multi', isChecked: true },
              { label: 'Colorless', isChecked: true },
              { label: 'Lands', isChecked: true },
            ],
          },
        ],
      },
    }
  },
  computed: {
    colorsList() {
      return this.$t('colorsList')
    },
  },
}
</script>

<style scoped>
.filter {
  bottom: 0;
  right: 0;
}
</style>
