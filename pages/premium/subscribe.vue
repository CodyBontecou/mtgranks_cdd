<template>
  <div class="flex flex-col max-w-md mx-auto justify-between">
    <div class="m-20">
      <Header page="premium"></Header>
      <div class="flex flex-col justify-between">
        <div class="mt-6 text-white">
          <h2 class="font-bold text-44">Coming soon...</h2>
          <h3 class="mt-2 font-medium text-18 opacity-30">
            Thank you for your interest. These features are currently being
            developed but will be released when they are stable and believed to
            be of quality.
          </h3>
        </div>
        <div class="mt-6 text-white">
          <h2 class="font-bold text-44">Get notified</h2>
          <h3 class="mt-2 font-medium text-18 opacity-30">
            You're welcome to join our newsletter to be notified when premium is
            out, alongside other new features worth mentioning.
          </h3>
        </div>
        <form
          action=""
          name="newsletter"
          method="POST"
          data-netlify="true"
          class="mt-12 flex"
        >
          <label for="singleFormField"> </label>
          <input
            id="singleFormField"
            class="appearance-none border rounded-lg h-12 p-6 text-black focus:outline-none font-normal text-18"
            placeholder="Email address"
            @input="$emit('input', $event.target.value)"
          />
          <input
            class="ml-4 px-2 rounded-lg bg-white text-black text-16 font-medium"
            type="submit"
            name="submit"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'premium',
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
