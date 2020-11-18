<template>
  <div
    class="flex flex-col justify-between w-full"
    :class="{
      'h-40 bg-charcoal text-white': page === 'mtgSet',
      'bg-transparent text-black': page === 'home',
    }"
  >
    <!--  Top bar mtgSet -->
    <div v-if="page === 'mtgSet'" class="flex justify-between">
      <ThinLeftArrow />
      <div class="font-bold text-24">mtgranks</div>
      <ThreeVerticalDots />
    </div>

    <!--  Top bar HOME -->
    <div v-if="page === 'home'" class="flex justify-center items-start">
      <div class="font-bold text-36">mtgranks</div>
      <div class="absolute mr-20 right-0 flex">
        <GlobeIcon />
        <DownArrow class="ml-1" />
      </div>
    </div>

    <div v-if="page === 'mtgSet'" class="large-circle"></div>
    <div v-if="page === 'mtgSet'" class="small-circle"></div>

    <div v-if="card" class="">
      {{ card }}
    </div>

    <span
      v-if="page === 'mtgSet'"
      class="opaque-logo absolute text-white font-bold"
    >
      mtgranks
    </span>

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
import GlobeIcon from '@/components/GlobeIcon'
export default {
  name: 'Header',
  components: { GlobeIcon },
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
    page: {
      type: String,
      default: 'mtgSet',
      required: true,
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
