<template>
  <el-card style="height: 100%">
    <el-row :gutter="20">
      <el-col :span="3">
        <el-card class="box-card" @click.native="routerTo">
          <el-popover
            placement="bottom-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <span slot="reference">数组方法</span>
          </el-popover>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: '',
  mixins: [],
  components: {},
  data() {
    return {}
  },
  props: {},
  computed: {},
  watch: {},
  created() {},
  methods: {
    routerTo() {
      this.$router.push('/document/read')
    }
  }
}
</script>

<style lang="postcss" scoped>
.box-card {
  cursor: pointer;
  /* background-color: #183a65; */
  /* color: #fff; */
  &:hover {
    opacity: 0.6;
  }
}
</style>
