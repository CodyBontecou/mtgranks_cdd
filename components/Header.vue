<template>
  <div
    class="flex flex-col justify-between w-full"
    :class="{
      'h-40 bg-charcoal text-white notch': page === 'mtgSet' && card === null,
      'h-auto bg-charcoal text-white notch': page === 'mtgSet' && card !== null,
      'bg-transparent text-black': page === 'home',
    }"
  >
    <!--  Top bar mtgSet -->
    <div v-if="page === 'mtgSet'" class="flex flex-col m-20">
      <div class="flex justify-between">
        <NuxtLink to="/">
          <ThinLeftArrow />
        </NuxtLink>
        <NuxtLink to="/">
          <div class="font-bold text-24">mtgranks</div>
        </NuxtLink>
        <ThreeVerticalDots />
      </div>
      <div v-if="card" class="flex mt-20 z-50" style="max-height: 204px">
        <img
          :src="card.image_uris.border_crop"
          :alt="`Small image of ${card.name} within the header.`"
        />
        <VerticalReview class="ml-4" />
      </div>
    </div>

    <!--  Top bar HOME -->
    <div v-if="page === 'home'" class="flex justify-center items-center">
      <div class="font-bold text-36 leading-42">mtgranks</div>
      <div class="absolute mr-20 right-0 flex">
        <GlobeIcon />
        <DownArrow class="ml-1" />
      </div>
    </div>

    <div v-if="page === 'mtgSet'" class="large-circle"></div>
    <div v-if="page === 'mtgSet'" class="small-circle"></div>
    <span
      v-if="page === 'mtgSet'"
      class="opaque-logo absolute text-white font-bold"
    >
      mtgranks
    </span>

    <div v-if="set">
      <!--  Set Name -->
      <div
        v-if="card === null"
        class="font-bold text-24 leading-29 opacity-75 ml-20"
      >
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

.notch {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
</style>
