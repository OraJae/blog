<template>
  <div id="map">
    <div id="shadow">
      <ul id="level">
        <li id="easy">简单</li>
        <li id="general">一般</li>
        <li id="hard">困难</li>
      </ul>
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
    return {}
  },
  props: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    init() {
      var speed = 200
      var shadow = document.getElementById('shadow')
      var level = document.getElementById('level')
      var easy = document.getElementById('easy')
      var general = document.getElementById('general')
      var hard = document.getElementById('hard') // 循环绑定事件

      for (var i = 0; i < level.children.length; i++) {
        var li = level.children[i]
        li.onmouseenter = function () {
          this.style.backgroundColor = 'rgb(107, 74, 12)'
          this.style.cursor = 'pointer'
        }
        li.onmouseleave = function () {
          this.style.backgroundColor = 'rgb(68, 47, 8)'
        }

        // 点击按钮，根据选择设置初始速度值
        li.onclick = () => {
          switch (this.id) {
            case 'easy':
              speed = 200
              break
            case 'general':
              speed = 120
              break
            case 'hard':
              speed = 70
              break
          }
          console.log(speed)
          // 延时0.3秒隐藏难度选择框，并开启游戏
          setTimeout(function () {
            shadow.classList.add('hide')
            var map = document.getElementById('map')
            var game = new Game(map)
            game.start(speed)
          }, 300)
        }
      }
    },
    startGame() {
      var map = document.getElementById('map')
      var game = new Game(map)
      game.start()
    }
  }
}
</script>

<style lang='postcss'>
.hide {
  display: none;
}

#map {
  margin: 15px auto;
  width: 1200px;
  height: 600px;
  position: relative;
  background-image: url('~@/assets/timg.png');
}

#shadow {
  width: 1200px;
  height: 600px;
  position: absolute;
  background: url('~@/assets/250378.jpg') center center;
}

#level {
  position: absolute;
  top: 150px;
  left: 500px;
  width: 250px;
  height: 300px;
  /* background-color: rgb(107, 74, 12); */
  background-image: url('~@/assets/tree.png');
  background-size: 250px 300px;
  border-radius: 5%;
  text-align: center;
}

#level li {
  margin: 25px auto 0;
  /* padding: 10px 0; */
  height: 30px;
  width: 120px;
  font-size: 22px;
  line-height: 30px;
  border-radius: 15%;
  background-color: rgb(68, 47, 8);
}

#level #easy {
  margin-top: 80px;
}
.snake-head {
  background: url('~@/assets/head30.png') center center;
}
.snake-body {
  background: url('~@/assets/body.png') center center;
}
.apple {
  background: url('~@/assets/apple30.png') center center;
}
</style>
