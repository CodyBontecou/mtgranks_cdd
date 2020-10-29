<template>
  <div class="flex flex-col w-56">
    <div class="flex pb-4">
      <RatorBubble :rating="ratings[0]" :rator="rators[0]" />
      <RatorBubble :rating="ratings[1]" :rator="rators[1]" />
      <RatorBubble :rating="ratings[2]" :rator="rators[2]" />
    </div>
    <p class="text-sm text-white leading-18 font-medium">
      Best cards in the format. Bombs. Completely changes the game in your
      favor. Will almost single handedly win you the game.
    </p>
  </div>
</template>

<script>
export default {
  name: 'VerticalReview',
  data() {
    return {
      ratings: ['A-', 'A-', 'A-'],
      rators: [
        {
          name: 'Justlolaman',
        },
        {
          name: 'M0bius',
        },
        {
          name: 'Scottynada',
        },
      ],
    }
  },
}
</script>

<style scoped>
/*position: static;*/
/*width: 170px;*/
/*height: 90px;*/
/*left: 0px;*/
/*top: 0px;*/

/*font-family: SF Pro Text;*/
/*font-style: normal;*/
/*font-weight: 500;*/
/*font-size: 11.32px;*/
/*line-height: 160%;*/
/*!* or 18px *!*/
</style>
