<template>
  <div>
    <h2>1、shift()</h2>

    <menu>
      <p>删除数组的第一个元素</p>
      <p>返回值为被删除的元素</p>
      <p>改变原数组</p>
      <p>无需传参</p>
    </menu>

    <code> 1241241 </code>

    <blockquote>
      <p>var a = [1, 2, 3]</p>
      <p>a.shift() // 1</p>
      <p>console.log(a) // [2, 3]</p>
    </blockquote>

    <section>
      <strong>412214</strong>
    </section>

    <hr />
  </div>
</template>

<script>
  export default {}
</script>

<style lang="postcss" scoped>
  code {
    padding: 5px 8px;
    color: #24292e;
    background-color: #e1e3e6b5;
    display: inline-block;
    font-family: Helvetica Neue;
    font-size: 13px;
    margin: 1em 0;
    border-radius: 6px;
  }
  blockquote {
    background-color: #f5f2f0;
    padding: 1em;
    margin: 1em 0;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
    -moz-border-radius: 1em;
    -webkit-border-radius: 1em;
    border-radius: 1em;
    font-family: Consolas, Monaco, 'Andale Mono', monospace;
    border-width: 0.3em;
    border-color: #e0dfcc;
    border-style: solid;
    text-shadow: 0 1px white;
    overflow: auto;
  }
  menu {
    border-left: 4px solid #cecece;
    margin-left: 6px;
    padding-left: 16px;
    margin: 1.5em 0 1.5em 6px;
  }
  hr {
    margin: 12px 0;
    background-color: #d3d3d3;
    height: 1px;
    border: none;
  }
  section {
    margin: 1.5em 0;
  }
  strong {
    padding: 3px 5px;
    border-radius: 5px;
    background-color: pink;
  }
</style>
