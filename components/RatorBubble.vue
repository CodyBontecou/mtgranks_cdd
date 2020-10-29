<template>
  <div class="flex flex-col pr-2">
    <RatingBubble :rating="rating" class="self-center mb-2" />
    <span class="self-center text-white font-medium text-xs leading-12">
      {{ rator.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'RatorBubble',
  props: {
    rating: {
      type: String,
      required: true,
    },
    rator: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      rating: 'D',
      rator: {
        name: 'Justlolaman',
      },
    }
  },
}
</script>

<style scoped>
/* Justlolaman */

/*position: static;*/
/*width: 53px;*/
/*height: 12px;*/
/*left: 0px;*/
/*top: 42px;*/

/*font-family: SF Pro Text;*/
/*font-style: normal;*/
/*font-weight: 500;*/
/*font-size: 9px;*/
/*line-height: 130%;*/
/*!* identical to box height, or 12px *!*/

/*!* White *!*/
/*color: #FFFFFF;*/

/*!* Inside Auto Layout *!*/
/*flex: none;*/
/*order: 1;*/
/*align-self: flex-start;*/
/*flex-grow: 0;*/
/*margin: 0px 10px;*/
</style>
