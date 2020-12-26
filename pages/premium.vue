<template>
  <div class="flex flex-col max-w-md mx-auto justify-between">
    <div class="m-20">
      <Header page="premium"></Header>
      <div class="">
        <h2 class="mt-6 font-bold text-44">Pro Features</h2>
        <h3 class="mt-2 font-medium text-22 opacity-30">
          Support the content creation
        </h3>
        <div class="flex mt-6 -mr-20 overflow-hidden">
          <div class="flex flex-col mr-8">
            <PremiumFeature><DoubleDotsIcon /></PremiumFeature>
            <PremiumFeature class="mt-6"><WisdomEyeIcon /></PremiumFeature>
            <PremiumFeature class="mt-6"><MultipleUserIcon /></PremiumFeature>
          </div>
          <img
            class="rounded-md"
            src="https://c1.scryfall.com/file/scryfall-cards/art_crop/front/0/b/0b4c7268-60c6-4038-8ce9-d9d51bed4577.jpg?1604195154"
            alt="Zulaport Duelist, a blue footed kicking Human Rogue"
          />
        </div>
        <div>
          <h3 class="mt-8 font-medium text-24 text-white">Overview</h3>
          <div
            id="wrapper"
            class="mt-8 font-medium text-22 opacity-30 leading-26 overflow-scroll"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              consequuntur dicta dolorem ducimus eaque esse fugiat modi
              necessitatibus neque nobis officia possimus recusandae reiciendis
              repellat saepe similique totam, ullam velit! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. A consequuntur dicta dolorem
              ducimus eaque esse fugiat modi necessitatibus neque nobis officia
              possimus recusandae reiciendis repellat saepe similique totam,
              ullam velit!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'premium',
  data() {
    return {
      features: [
        {
          icon: {
            color: 'bg-gradient-black-gold',
            src: 'doubledotsicon',
          },
        },
        {
          icon: {
            color: 'bg-gradient-black-gold',
            src: 'doubledotsicon',
          },
        },
        {
          icon: {
            color: 'bg-gradient-black-gold',
            src: 'doubledotsicon',
          },
        },
      ],
    }
  },
  head: {
    bodyAttrs: {
      class: 'min-h-full bg-black',
    },
    meta: [
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#000000',
      },
      {
        hid: 'msapplication-navbutton-color',
        name: 'msapplication-navbutton-color',
        content: '#000000',
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#000000',
      },
    ],
  },
}
</script>

<style>
#wrapper {
  height: 20vh;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left 20%,
    left bottom,
    from(black),
    to(rgba(0, 0, 0, 0))
  );
}
</style>
