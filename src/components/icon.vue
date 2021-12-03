<template>
  <i :class="iconClassName"></i>
</template>
<script>
export default {
  props: {
    type: String
  },
  computed: {
    iconClassName () {
      return `iconfont icon-${this.type}`
    }
  }
}
</script>
<style lang="scss">
// @import "@styles/fonts.css";
</style>
