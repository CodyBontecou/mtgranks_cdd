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
          ref="form"
          action=""
          name="newsletter"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="mt-12 flex"
          @submit.prevent="submitForm"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p class="hidden">
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>
          <label for="emailForm"> </label>
          <input
            id="emailForm"
            v-model="email"
            name="email"
            class="appearance-none rounded-lg h-12 p-6 focus:outline-none font-normal text-18 bg-white focus:outline-none"
            :class="{
              'border-2 border-red-500 text-red-500 placeholder-text-red-500':
                requiredEmail || isEmail,
              'border-2 text-black': !requiredEmail && !isEmail,
            }"
            placeholder="Email address"
          />
          <button
            class="ml-4 px-2 rounded-lg bg-white text-black text-16 font-medium"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div v-if="requiredEmail" class="mt-2 text-red-500 text-18 font-medium">
          Email is required.
        </div>
        <div v-if="isEmail" class="mt-2 text-red-500 text-18 font-medium">
          Please input a valid email address.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators'

export default {
  layout: 'premium',
  data() {
    return {
      email: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  computed: {
    requiredEmail() {
      return !this.$v.email.required && this.$v.email.$dirty
    },
    isEmail() {
      return !this.$v.email.email && this.$v.email.$dirty
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$refs.form.submit()
      }
    },
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
