<template>
  <div class="font-medium text-xs">
    <div
      class="relative rounded-r py-4 px-1 bg-white items-center justify-center bg-white shadow-lg hover:shadow-2xl border border-ash border-opacity-25 hover:border-opacity-50 cursor-pointer"
    >
      <button
        class="flex items-center justify-between w-full focus:outline-none opacity-50 hover:opacity-75"
        :class="{
          'opacity-100': filters.isExpanded,
        }"
        @click="filters.isExpanded = !filters.isExpanded"
      >
        <RightArrow
          class="h-4 w-4 mr-1 transform transition-transform duration-150 ease-in-out"
          :class="filters.isExpanded ? 'rotate-180' : 'rotate-0'"
        />
      </button>
      <div
        v-if="filters.isExpanded"
        class="h-full h-screen bg-yellow-400 w-drawer"
      ></div>
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
