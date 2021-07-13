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
<style>
@import "@app/theme/styles/fonts.css";
</style>
