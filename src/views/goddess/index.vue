<template>
  <!-- <el-card>
    <el-image :src="goddness" style="width: 100%; height: 100%" :preview-src-list="[goddness]"> </el-image>
  </el-card> -->
  <img :src="goddness" alt="">
</template>

<script>
import goddness from '@/assets/goddess.jpg'
export default {
  name: '',
  mixins: [],
  components: {},
  data() {
    return {
      goddness
    }
  },
  props: {},
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang='less' scoped>
</style>
