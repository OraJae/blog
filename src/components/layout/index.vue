<template>
  <div class="wrapper">
    <sideBar></sideBar>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import sideBar from './sideBar'
export default {
  components: {
    sideBar
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  width: 100%;
  min-height: 100%;
  display: flex;
  background-color: #f5f5f5;
  .layout-nav {
    height: 100%;
  }
}

#content {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 16px;
  margin-left: 196px;
  /* background-color: #fff; */
}
</style>
