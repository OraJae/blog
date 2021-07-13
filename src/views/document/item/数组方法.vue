<template>
  <div>
    <h2>1、shift()</h2>

    <blockquote>
      <p>
        删除数组的第一个元素<br />返回值为被删除的元素<br />改变原数组
        <br />无需传参
      </p>
    </blockquote>

    <p><code>js var a = [1, 2, 3] a.shift() // 1 console.log(a) // [2, 3]</code></p>

    <el-divider></el-divider>
  </div>
</template>

<script>
// import showdown from 'showdown';
// import readme from '../../../../README.md'
export default {
  components: {
    // showdown
  },
  created () {
    // let converter = new showdown.Converter();
  }
}
</script>

<style lang="postcss" scoped>
code {
  padding: 5px 8px;
  color: #c7254e;
  background-color: #f2f2f2;
}
</style>
