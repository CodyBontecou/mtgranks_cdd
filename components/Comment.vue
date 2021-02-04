<template>
  <div class="m-4">
    <div v-if="isMsgVisible">
      Comments can't be loaded.<br />
      Please make sure that you have access to
      <a href="https://disqus.com" target="_blank">disqus.com</a> in your area.
    </div>

    <client-only>
      <Disqus :identifier="identifier" :url="url" :language="language" />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: 'en',
      isMsgVisible: false,
    }
  },
  computed: {
    identifier() {
      return this.$route.fullPath
    },
    url() {
      return 'https://mtgranks.netlify.app' + this.$route.path
    },
  },
  watch: {
    identifier() {
      this.$nextTick(
        window.DISQUS &&
          window.DISQUS.reset({
            reload: true,
            config() {
              this.page.identifier = this.identifier
              this.page.url = this.url
              this.page.title = this.title
              this.language = this.language
            },
          })
      )
    },
  },
  // mounted() {
  //   setTimeout(() => {
  //     if (!window.DISQUS) {
  //       this.isMsgVisible = true
  //     }
  //   }, 8000)
  // },
}
</script>
