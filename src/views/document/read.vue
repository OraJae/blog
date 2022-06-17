<template>
  <el-card class="p-r">
    <div id="preview"></div>
    <div id="outline"></div>
    <!-- <fixedMenu :tableData="tableData"></fixedMenu> -->
  </el-card>
</template>

<script>
// import fixedMenu from '@/components/fixedMenu'
import axios from 'axios'
import { marked } from 'marked'
import Vditor from 'vditor'
export default {
  name: '',
  mixins: [],
  components: {
    // fixedMenu
  },
  data() {
    return {
      contentEditor: null,
      markedStr: ''
    }
  },
  props: {},
  computed: {},
  watch: {},
  created() {
    this.readMD()
  },
  beforeDestroy() {},
  methods: {
    readMD() {
      axios.get('/markdown/array.md').then((res) => {
        this.markedStr = res.data
        this.renderVditor()
      })
    },
    renderVditor() {
      // this.contentEditor = new Vditor('preview', {
      //   value: this.markedStr,
      //   cache: {
      //     enable: false
      //   },
      // })
      const outlineElement = document.getElementById('outline')
      const previewElement = document.getElementById('preview')
      Vditor.preview(previewElement, this.markedStr, {
        markdown: {
          toc: true
        },
        speech: {
          enable: true
        },
        anchor: 1,
        after() {
          if (window.innerWidth <= 768) {
            return
          }
          Vditor.outlineRender(previewElement, outlineElement)
          if (outlineElement.innerText.trim() !== '') {
            outlineElement.style.display = 'block'
          }
        },
        lazyLoadImage: 'https://unpkg.com/vditor/dist/images/img-loading.svg',
        renderers: {
          renderHeading: (node, entering) => {
            const id = Lute.GetHeadingID(node)
            if (entering) {
              return [
                `<h${node.__internal_object__.HeadingLevel} id="${id}" class="vditor__heading"><span class="prefix"></span><span>`,
                Lute.WalkContinue
              ]
            } else {
              return [
                `</span><a id="vditorAnchor-${id}" class="vditor-anchor" href="#${id}"><svg viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a></h${node.__internal_object__.HeadingLevel}>`,
                Lute.WalkContinue
              ]
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.el-card {
  height: 100%;
}
>>> #preview {
  width: 1000px;
  /* margin: 60px auto; */
  /* background-color: #f5f5d5; */
  .vditor-reset {
    padding: 40px 343px !important;
  }
}
#outline {
  display: none;
  position: fixed;
  width: 186px;
  top: 64px;
  right: 20px;
  bottom: 20px;
  overflow: auto;
  font-size: 16px;
  border-left: 1px solid var(--border-color);
  border-right: 0;
  z-index: 10;
  --border-color: #eee;
  --toolbar-icon-hover-color: #4285f4;
  --textarea-text-color: #616161;
  --hover-background-color: #f6f8fa;
}
</style>
