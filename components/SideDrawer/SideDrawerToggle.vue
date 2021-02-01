<template>
  <div
    class="z-10 fixed top-0 mt-6 h-12 w-6 py-4 bg-white rounded-r items-center justify-center bg-white shadow-lg hover:shadow-2xl border border-ash border-opacity-25 hover:border-opacity-50 cursor-pointer"
    :class="{
      'left-0': !expanded,
      'left-drawer': expanded,
    }"
    @click="toggleExpanded"
  >
    <button
      class="flex items-center justify-between focus:outline-none opacity-50 hover:opacity-75"
    >
      <RightArrow
        class="h-4 w-4 transform transition-transform duration-150 ease-in-out"
        :class="{
          'rotate-180 ml-1': expanded,
          'rotate-0 mr-1': !expanded,
        }"
      />
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['expanded']),
  },
  methods: {
    ...mapActions(['toggleExpanded']),
  },
}
</script>

<style scoped></style>
