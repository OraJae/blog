<template>
  <div>
    <div class="read-content">
      <!-- <array></array> -->
      <div id="preview"></div>
    </div>
    <!-- <fixedMenu :tableData="tableData"></fixedMenu> -->
  </div>
</template>

<script>
// import markdownText from './item/index.md'
import Vditor from 'vditor'
// import fixedMenu from '@/components/fixedMenu'
const fs = require('fs')
export default {
  name: '',
  mixins: [],
  components: {
    // fixedMenu
  },
  data() {
    return {
      vditor: null,
      contentEditor: null,
      tableData: [
        {
          func: 'shift()',
          desc: '删除数组的第一个元素'
        },
        {
          func: 'pop()',
          desc: '删除数组中最后一个元素'
        },
        {
          func: 'unshift()',
          desc: '在数组开头增加一个或多个元素'
        },
        {
          func: 'push()',
          desc: '在数组末尾增加一个或多个元素'
        },
        {
          func: 'splice()',
          desc: '在任意的位置给数组添加或删除任意个元素'
        },
        {
          func: 'slice()',
          desc: '	从已有的数组中提取一段元素'
        },
        {
          func: 'sort()',
          desc: '对数组的元素进行排序'
        },
        {
          func: 'reverse()',
          desc: '翻转数组排列顺序'
        },
        {
          func: 'join()',
          desc: '把数组中的所有元素拼接成一个字符串'
        },
        {
          func: 'some()',
          desc: '检验数组中的每个元素是否都满足测试函数，只要有一个返回ture就停止循环'
        },
        {
          func: 'every()',
          desc: '检验数组中的每个元素是否都满足测试函数'
        },
        {
          func: 'filter()',
          desc: '检查指定数组中符合条件的所有元素'
        }
      ]
    }
  },
  props: {},
  computed: {},
  watch: {},
  created() {
    let fileRead = new FileReader()
    // const vue = fileRead.readAsText('./item/数组方法.vue')
    // console.log(vue)
  },
  mounted() {
    console.log(123)
    window.vditor = new Vditor('preview', {
      value: '### 娇娇是个大傻得儿',
      placeholder: 'Hello, Vditor!',
      // after: () => {
      //   vditor.setValue('Vue Composition API + Vditor + TypeScript Minimal Example')
      // }
    })
    // fetch('markdown/zh_CN.md')
    //   .then((response) => response.text())
    //   .then((markdown) => {
    //     this.contentEditor = new Vditor('vditor', {
    //       width: '100%',
    //       height: 360,
    //       toolbarConfig: {
    //         pin: true
    //       },
    //       cache: {
    //         enable: false
    //       },
    //       after: () => {
    //         this.contentEditor.setValue(markdownText)
    //       }
    //     })
    //   })
  },
  methods: {
    initVditorContent() {
      fetch('/docs/index.md')
        .then((response) => {
          console.log(response)
          return response.text()
        })
        .then((markdown) => {
          console.log(markdown)
          Vditor.preview(document.getElementById('preview'), markdown, {
            speech: {
              enable: true
            },
            anchor: 1,
            after() {
              // if (window.innerWidth <= 768) {
              //   return
              // }
              // const outlineElement = document.getElementById('outline')
              // Vditor.outlineRender(document.getElementById('preview'), outlineElement)
              // if (outlineElement.innerText.trim() !== '') {
              //   outlineElement.style.display = 'block'
              //   initOutline()
              // }
            }
          })
        })
    }
  }
}
</script>

<style lang="postcss" scoped>
.read-content {
  /* width: 1000px; */
  margin: 0 auto;
  /* background-color: #f5f5d5; */
}
</style>

<style lang="scss">
@import '@styles/theme1.scss';
</style>