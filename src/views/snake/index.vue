<template>
  <div style="height: 100%; overflow: hidden">
    <div id="map">
      <div id="shadow">
        <ul class="level">
          <li v-for="(item, index) in levelList" :key="index" @click="selectDifficulty(item.speed)">{{ item.text }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Game from '@/utils/game'
export default {
  name: '',
  mixins: [],
  components: {},
  data() {
    return {
      levelList: [
        {
          text: '简单',
          level: 1,
          speed: 200
        },
        {
          text: '一般',
          level: 2,
          speed: 120
        },
        {
          text: '困难',
          level: 3,
          speed: 70
        }
      ]
    }
  },
  props: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // this.init()
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    // 点击按钮，根据选择设置初始速度值
    selectDifficulty(speed) {
      var shadow = document.getElementById('shadow')
      // 延时0.3秒隐藏难度选择框，并开启游戏
      setTimeout(function () {
        shadow.classList.add('hide')
        var map = document.getElementById('map')
        var game = new Game(map)
        game.start(speed)
        setTimeout(() => {
          console.log(game)
        }, 1000)
      }, 300)
    }
  }
}
</script>

<style lang='postcss'>
* {
  margin: 0;
  padding: 0;
}
.hide {
  display: none;
}

#map {
  margin: 16px;
  overflow: hidden;
  /* width: 1200px; */
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  position: relative;
  background: url('~@/assets/snake/timg.png') no-repeat;
  background-size: cover;
}

#shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url('~@/assets/snake/250378.jpg') center center no-repeat;
  background-size: cover;
}

.level {
  padding-top: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 300px;
  background: url('~@/assets/snake/tree.png') no-repeat;
  background-size: 250px 300px;
  border-radius: 5%;
  text-align: center;
  li {
    margin: 25px auto 0;
    height: 30px;
    width: 120px;
    font-size: 20px;
    line-height: 30px;
    border-radius: 15%;
    background-color: rgb(68, 47, 8);
    cursor: pointer;
    color: #fff;
    &:hover {
      background-color: rgb(107, 74, 12);
    }
  }
}
.snake-head {
  background: url('~@/assets/snake/head30.png') center center;
}
.snake-body {
  background: url('~@/assets/snake/body.png') center center;
}
.apple {
  background: url('~@/assets/snake/apple30.png') center center;
}
</style>
