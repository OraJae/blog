<template>
  <div class="wrapper">
    <sideBar></sideBar>
    <div class="content" id="content">
      <div class="continer">
        <transition name="el-fade-in-linear">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import sideBar from './sideBar'
  export default {
    components: {
      sideBar,
    },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }
      return {
        tableData: Array(20).fill(item),
      }
    },
  }
</script>

<style lang="postcss" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #f5f5f5;
    .layout-nav {
      height: 100%;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
    /* background-color: #000; */
    overflow-y: auto;
  }
  .continer {
    /* background-color: #fff; */
    background-color: #f5f5d5;
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
  }
</style>
