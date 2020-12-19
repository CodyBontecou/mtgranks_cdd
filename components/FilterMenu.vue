<template>
  <div class="font-medium text-xs">
    <div
      class="relative rounded p-2 flex flex-col-reverse bg-white items-center justify-center group bg-white shadow-lg hover:shadow-2xl border border-ash border-opacity-25 hover:border-opacity-50 cursor-pointer"
    >
      <button
        class="flex items-center justify-between w-full focus:outline-none opacity-50 hover:opacity-75"
        :class="{
          'opacity-100': filters.isExpanded,
        }"
        @click="filters.isExpanded = !filters.isExpanded"
      >
        {{ $t('filters') }}
        <RightArrow
          class="h-4 w-4 ml-1 -mr-1 transform transition-transform duration-150 ease-in-out"
          :class="filters.isExpanded ? 'rotate-90' : 'rotate-0'"
        />
      </button>
      <div v-if="filters.isExpanded" class="mb-2 focus:outline-none">
        <div
          v-for="(child, childIndex) in filters.children"
          :key="`child-${childIndex + 1}`"
          class="flex flex-col-reverse"
        >
          <button
            class="flex items-center justify-between opacity-50 hover:opacity-75 focus:outline-none"
            :class="{
              'opacity-100': child.isExpanded,
            }"
            @click="child.isExpanded = !child.isExpanded"
          >
            {{ child.name }}
            <RightArrow
              class="h-4 w-4 ml-1 -mr-1 transform transition-transform duration-150 ease-in-out opacity-50 hover:opacity-75"
              :class="child.isExpanded ? 'rotate-90' : 'rotate-0'"
            />
          </button>
          <div v-if="child.isExpanded" class="flex flex-col">
            <label
              v-for="(option, optionIndex) in child.options"
              :key="`child-${childIndex + 1}-option-${optionIndex + 1}`"
              class="flex mb-3 items-center justify-between cursor-pointer font-normal"
            >
              <span
                class="mr-4 hover:opacity-75"
                :class="{
                  'opacity-50': option.isChecked === true,
                  'opacity-25': option.isChecked === false,
                }"
              >
                {{ option.label }}
              </span>
              <input
                v-model="option.isChecked"
                type="checkbox"
                class="flex-shrink-0 cursor-pointer form-checkbox text-charcoal opacity-75"
                @click="$emit('colorToggled', option)"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
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
              { label: 'Colorless', isChecked: true },
              { label: 'Multi', isChecked: true },
              { label: 'Lands', isChecked: true },
            ],
          },
        ],
      },
    }
  },
}
</script>
