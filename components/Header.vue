<template>
  <div class="flex flex-col justify-between h-40 w-full bg-charcoal">
    <!--  Top bar -->
    <div class="flex justify-between">
      <ThinLeftArrow />
      <div class="text-white font-bold text-24">mtgranks</div>
      <ThreeVerticalDots />
      <!--    <div class="circle1"></div>-->
      <!--    <div class="circle2"></div>-->
    </div>

    <div v-if="set">
      <!--  Set Name -->
      <div class="font-bold text-24 leading-29 text-white opacity-75">
        {{ set.name }}
      </div>

      <!--  Search Bar -->
      <div class="flex justify-center">
        <SearchInput class="-mb-20 mt-3" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    set: {
      type: Object,
      default: null,
      required: false,
    },
  },
}
</script>

<style scoped>
.circle1 {
  position: absolute;
  left: 62.45%;
  right: 16.8%;
  top: 56.9%;
  bottom: 8.62%;
  border-radius: 100%;

  background: rgba(255, 255, 255, 0.05);
}
.circle2 {
  position: absolute;
  left: 43.15%;
  right: 15.35%;
  top: 0%;
  bottom: 31.03%;
  border-radius: 100%;

  background: rgba(255, 255, 255, 0.05);
}
</style>
