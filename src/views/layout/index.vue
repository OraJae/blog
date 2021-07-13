<template>
  <el-container class="wrapper">
    <!-- <el-aside width="200px" class="layout-nav">Aside</el-aside> -->
    <sideBar></sideBar>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import sideBar from './sideBar'
export default {
  components: {
    sideBar
  },
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  .layout-nav {
    height: 100vh;
  }
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
