<template>
  <button
    class="new-set-container outline-none focus:outline-none"
    :class="`bg-gradient-${color}`"
    @click="navigateToSet"
  >
    <div class="flex h-full w-full py-20 px-3">
      <div class="flex flex-col justify-between">
        <div class="flex flex-col justify-start items-start text-white">
          <div class="text-8 font-normal">{{ set.code }}</div>
          <div class="text-14 font-semibold">{{ set.name }}</div>
        </div>
        <div class="flex justify-between items-end text-white">
          <div class="text-8 font-normal">{{ set.cardCount }} cards</div>
          <img
            class="filter-white text-white h-8 w-auto"
            :src="set.icon"
            :alt="`set.name set icon`"
          />
        </div>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'NewSet',
  props: {
    color: {
      type: String,
      required: true,
    },
    set: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToSet() {
      this.$router.push({
        name: 'set___en',
        params: { set: this.set.slug, object: this.set },
      })
    },
  },
}
</script>

<style scoped>
.filter-white {
  filter: brightness(0) invert(1);
}
.new-set-container {
  height: 160px;
  width: 142px;
  border-radius: 20px;
}
/*.new-set-dropshadow {*/
/*  filter: drop-shadow(0px 0.892729px 2.67819px rgba(0, 0, 0, 0.05))*/
/*    drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15));*/
/*}*/
</style>
