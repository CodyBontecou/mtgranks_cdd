<template>
  <div class="font-medium text-xs w-24">
    <div
      class="relative rounded p-2 flex flex-col-reverse bg-white items-center justify-center bg-white shadow-lg hover:shadow-2xl border border-ash border-opacity-25 hover:border-opacity-50 cursor-pointer"
    >
      <button
        class="flex items-center justify-between w-full focus:outline-none hover:opacity-75 opacity-50"
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
      <div v-if="filters.isExpanded" class="mb-2 w-full focus:outline-none">
        <div
          v-for="(child, childIndex) in filters.children"
          :key="`child-${childIndex + 1}`"
          class="flex flex-col-reverse"
        >
          <button
            class="flex items-center justify-between hover:opacity-75 opacity-50 focus:outline-none"
            :class="{
              'opacity-100': child.isExpanded,
            }"
            @click="child.isExpanded = !child.isExpanded"
          >
            {{ child.name }}
            <RightArrow
              class="h-4 w-4 ml-1 -mr-1 transform transition-transform duration-150 ease-in-out hover:opacity-75 opacity-50"
              :class="{
                'opacity-100 rotate-90': child.isExpanded,
                'rotate-0': !child.isExpanded,
              }"
            />
          </button>
          <div v-if="child.isExpanded" class="flex flex-col">
            <label
              v-for="(option, optionIndex) in child.options"
              :key="`child-${childIndex + 1}-option-${optionIndex + 1}`"
              class="flex items-center justify-between cursor-pointer font-normal hover:opacity-100 opacity-75"
              :class="{
                'mb-3': optionIndex !== child.options.length - 1,
                'opacity-50': option.isChecked === false,
              }"
            >
              <span
                class=""
                :class="{
                  'opacity-50': option.isChecked === false,
                }"
              >
                {{ option.label }}
              </span>
              <input
                v-model="option.isChecked"
                type="checkbox"
                class="flex-shrink-0 cursor-pointer form-checkbox text-charcoal border-charcoal hover:opacity-75 opacity-50"
                @click="$emit('colorToggled', option)"
              />
            </label>
            <div
              class="my-2 -mx-2 border-t border-ash rounded opacity-25"
            ></div>
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
            ],
          },
        ],
      },
    }
  },
}
</script>
