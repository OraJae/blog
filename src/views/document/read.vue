<template>
  <div>
    <div id="markBox"></div>
    <fixedMenu :tableData="tableData"></fixedMenu>
  </div>
</template>

<script>
import fixedMenu from '@/components/fixedMenu'
import axios from 'axios'
import { marked } from 'marked'
import Vditor from 'vditor'
export default {
  name: '',
  mixins: [],
  components: {
    fixedMenu
  },
  data() {
    return {
      contentEditor: null,
      markedStr: '',
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
    this.readMD()
  },
  beforeDestroy() {
    this.contentEditor.destroy()
  },
  methods: {
    readMD() {
      axios.get('/markdown/数组方法.md').then((res) => {
        // this.markedStr = marked.parse(res.data)
        this.markedStr = res.data
        this.renderVditor()
      })
    },
    renderVditor() {
      this.contentEditor = new Vditor('markBox', {
        value: this.markedStr,
        toolbarConfig: {
          hide: true
        },
        cache: {
          enable: false
        },
        preview: {
          markdown: {
            toc: true,
            mark: true,
            footnotes: true,
            autoSpace: true
          }
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
>>> #markBox {
  width: 1000px;
  /* margin: 60px auto; */
  /* background-color: #f5f5d5; */
  .vditor-reset {
    padding: 40px 443px !important;
  }
}
</style>
