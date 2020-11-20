<template>
  <div class="flex justify-center z-50">
    <form
      class="card-search py-2 px-8 flex items-center justify-center bg-white shadow-1 rounded-full"
    >
      <div class="flex justify-center">
        <SearchIcon class="mr-3" />
      </div>
      <label for="cardSearch"> </label>
      <input
        id="cardSearch"
        class="appearance-none focus:outline-none"
        type="text"
        placeholder="Search for a card"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
}
</script>

<style scoped>
.card-search {
  max-height: 40px;
  max-width: 300px;
}
</style>
