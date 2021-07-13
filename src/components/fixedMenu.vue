<template>
  <div class="side-r">
    <div class="compare" :style="compareStyle" ref="compare">
      <div class="compare-stat" @click="showCompare = !showCompare">
        <icon :type="showCompare ? 'aRight' : 'aLeft'"></icon>
        <span>目录</span>
      </div>
      <div class="compare-con">
        <el-table :data="tableData" style="width: 100%">
          <!-- <el-table-column type="index" width="50"></el-table-column> -->
          <el-table-column prop="func" label="方法"> </el-table-column>
          <el-table-column prop="desc" label="描述" min-width="200"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  // import { contain } from '@xgj/utils/src/helpers/dom'
  export default {
    data() {
      return {
        showCompare: false,
      }
    },
    props: {
      tableData: Array,
    },
    computed: {
      compareStyle() {
        return this.showCompare
          ? { transform: 'translate(0, 0)' }
          : { transform: 'translate(342px, 0)' }
      },
    },
    mounted() {},
    methods: {},
  }
</script>

<style lang="postcss" scoped>
  .side-r {
    position: fixed;
    right: 0;
    top: 40%;
    z-index: 10000;
    transform: translate(0, -50%);
  }
  .compare {
    width: 400px;
    height: 42px;
    position: absolute;
    top: -274px;
    right: 0;
    display: flex;
    justify-content: flex-start;
    transition: transform 0.5s;
    z-index: 10002;
    .compare-stat {
      width: 61px;
      height: 42px;
      line-height: 42px;
      opacity: 0.6;
      color: #fff;
      background: rgba(26, 89, 255, 1);
      text-align: center;
      cursor: pointer;
      > span {
        vertical-align: top;
        margin-left: 3px;
      }
    }
    .compare-con {
      width: 342px;
      height: 600px;
      padding: 16px;
      box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.18);
      background-color: #fff;
      position: relative;
      box-sizing: border-box;
      overflow-y: auto;
    }
  }
</style>
