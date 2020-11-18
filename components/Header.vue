<template>
  <div class="flex flex-col justify-between h-40 w-full bg-charcoal text-white">
    <!--  Top bar -->
    <div class="flex justify-between">
      <ThinLeftArrow />
      <div class="font-bold text-24">mtgranks</div>
      <ThreeVerticalDots />
    </div>

    <div class="large-circle"></div>
    <div class="small-circle"></div>

    <div v-if="card" class="">
      {{ card }}
    </div>

    <span class="opaque-logo absolute text-white font-bold"> mtgranks </span>

    <div v-if="set">
      <!--  Set Name -->
      <div class="font-bold text-24 leading-29 opacity-75">
        {{ set.name }}
      </div>

      <!--  Search Bar -->
      <div class="flex justify-center">
        <SearchInput class="-mb-20 mt-3 text-black" />
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
    card: {
      type: Object,
      default: null,
      required: false,
    },
  },
}
</script>

<style scoped>
.opaque-logo {
  top: 100px;
  right: 20px;
  opacity: 0.1;
  font-size: 60px;
  line-height: 71px;
}

.large-circle {
  height: 200px;
  width: 200px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: absolute;
  right: -20px;
  top: -120px;
  background: rgba(255, 255, 255, 0.05);
}

.small-circle {
  height: 100px;
  width: 100px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  position: absolute;
  right: -10px;
  top: 55px;
  background: rgba(255, 255, 255, 0.05);
}
</style>
