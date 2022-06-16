<template>
  <div class="side-r">
    <div class="compare" :style="compareStyle" ref="compare">
      <div class="compare-stat" @click="showCompare = !showCompare">
        <icon :type="showCompare ? 'aRight' : 'aLeft'"></icon>
        <span>目录</span>
      </div>
      <div class="compare-con">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="func" label="方法"> </el-table-column>
          <el-table-column prop="desc" label="描述"> </el-table-column>
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
      showCompare: false
    }
  },
  props: {
    tableData: Array
  },
  computed: {
    compareStyle() {
      return this.showCompare ? { transform: 'translate(0, 0)' } : { transform: 'translate(242px, 0)' }
    }
  },
  mounted() {},
  methods: {}
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
  width: 300px;
  height: 42px;
  position: absolute;
  top: -74px;
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
    width: 242px;
    height: 400px;
    padding-bottom: 68px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.18);
    background-color: #fff;
    position: relative;
    box-sizing: border-box;
    .compare-tip {
      width: 160px;
      /* margin: 0 auto; */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .compare-item {
      padding: 16px 0;
      border-bottom: 1px solid #e7ebef;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title,
      .address {
        width: 180px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .title {
        color: #384047;
        font-size: 14px;
      }
      .address {
        color: #9fafc1;
        font-size: 12px;
      }
      .close {
        font-size: 12px;
        cursor: pointer;
      }
    }
    .compare-item:last-of-type {
      border-bottom: none;
    }
    .start-con {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 68px;
      padding: 16px 0;
      border-top: 1px solid #e7ebef;
      box-sizing: border-box;
      text-align: center;
      background-color: #fff;
    }
    .el-button--info {
      background-color: #9fafc1;
      border-color: #9fafc1;
    }
  }
}
</style>
