<template>
  <div class="flex justify-center z-50">
    <form
      class="card-search py-2 px-8 flex items-center justify-center bg-white shadow-1 rounded-full"
    >
      <div class="flex justify-center">
        <SearchIcon class="mr-3 fill-current text-black w-6 h-6" />
      </div>
      <label for="cardSearch"> </label>
      <!-- TODO: Change placeholder text when a card exists  -->
      <input
        id="cardSearch"
        class="appearance-none focus:outline-none placeholder-black"
        type="text"
        :placeholder="inputPlaceholderText"
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SearchInput',
  computed: {
    ...mapGetters(['inputPlaceholderText']),
  },
}
</script>

<style scoped>
.card-search {
  max-height: 40px;
  max-width: 300px;
}
</style>
