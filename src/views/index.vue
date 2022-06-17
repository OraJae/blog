<template>
  <div class="i-container">
    <section v-for="(section, index) in config" :key="index">
      <div class="subtitle">
        <span>{{ section.subtitleA }}&nbsp;&nbsp;/&nbsp;</span>
        {{ section.subtitleB }}
      </div>
      <div class="describe">{{ section.describe }}</div>
      <div class="content-box">
        <div
          class="content-item"
          v-for="(item, index) in section.list"
          :key="index"
          :style="'backgroundColor:' + getColor()"
          @click="routerTo(item.path)"
        >
          <!-- <i :class="item.icon"></i> -->
          <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#icon-6c981cdb176e012c)">
              <path
                d="M35.7853 39.0837L38.6137 36.2553C40.9569 33.9121 40.9569 30.1131 38.6137 27.77V27.77C36.2706 25.4268 32.4716 25.4268 30.1285 27.77L27.667 30.2314"
                stroke="#fff"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M17.4008 23.5265L24.4719 16.4555C26.815 14.1123 26.815 10.3133 24.4719 7.97018V7.97018C22.1287 5.62703 18.3298 5.62703 15.9866 7.97018L8.91554 15.0412"
                stroke="#fff"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M18.2825 22.6461L9.62235 31.3063C7.2792 33.6494 7.2792 37.4484 9.62235 39.7915V39.7915C11.9655 42.1347 15.7645 42.1347 18.1076 39.7915L28.0071 29.892"
                stroke="#fff"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M14.9998 9H6.99976"
                stroke="#fff"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="icon-6c981cdb176e012c"><rect width="48" height="48" fill="#fff" /></clipPath>
            </defs>
          </svg>
          <h3>{{ item.letter }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: '',
  mixins: [],
  components: {},
  data() {
    return {
      colors: this.$C.CARD_BACKGROUND_COLORS,
      config: [
        {
          subtitleA: 'Study',
          subtitleB: '学习',
          describe: '快来充会儿电吧',
          list: [
            {
              icon: 'el-icon-attract',
              letter: 'Note',
              text: '笔记',
              path: '/document'
            }
          ]
        },
        {
          subtitleA: 'Relax',
          subtitleB: '休息',
          describe: '劳逸结合，放松一下',
          list: [
            {
              icon: 'el-icon-attract',
              letter: 'Snack',
              text: '贪吃蛇',
              path: '/snake'
            },
            {
              icon: 'el-icon-attract',
              letter: 'Sleep Music',
              text: '催眠曲',
              path: '/sleep'
            },
            {
              icon: 'el-icon-attract',
              letter: 'Goddess or Tomboy',
              text: '女神 || 女汉子',
              path: '/goddess'
            }
          ]
        }
      ]
    }
  },
  props: {},
  computed: {},
  watch: {},
  created() {
    console.log(this.$help.isMobile())
  },
  methods: {
    getColor() {
      return this.colors[this.$help.getRandomInt(0, this.colors.length)]
    },
    routerTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang='postcss' scoped>
.i-container {
  max-width: 1100px;
  margin: 0 auto;
  /* background-color: #48e0b0; */
}
.subtitle {
  text-align: center;
  font-weight: normal;
  font-size: 26px;
  margin: 20px 0 8px 0;
  span {
    font-family: Segoe UI Light, Microsoft YaHei, Arial, Helvetica, sans-serif;
  }
}
.describe {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}
.content-box {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 180px;
  grid-gap: 30px 20px;
}
.content-item {
  text-align: center;
  padding: 20px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  color: #fff;
  position: relative;
  /* &::after {
    content: '';
    cursor: pointer;
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: -webkit-linear-gradient(0deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.5), hsla(0, 0%, 100%, 0));
    transform: skewx(-25deg);
    z-index: 10;
  } */
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 40px -24px rgb(0 36 100 / 50%);
    &::after {
      left: 100%;
    }
  }

  i[class^='el-icon'] {
    font-size: 60px;
    line-height: 60px;
  }
  h3 {
    margin: 12px 0 10px;
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
}
</style>
