<template>
  <div
    class="relative w-full h-66 px-8 py-4 flex justify-between rounded-full bg-black"
  >
    <PersonOutline class="cursor-pointer" />
    <SearchIcon class="cursor-pointer" />
    <BulletedList class="cursor-pointer" />
    <div></div>
    <BaseCircle
      class="absolute cursor-pointer right-0 top-0 w-66 h-66"
      color="gradient-black-green"
    >
      <LightingFillIcon />
    </BaseCircle>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
}
</script>

<style scoped></style>
