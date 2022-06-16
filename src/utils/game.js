import Food from './food'
import Snake from './snake'
class Game {
  constructor(map) {
    this.food = new Food()
    this.snake = new Snake()
    this.map = map
    //  记录当前方向对应的keycode值，开始默认方向为right，即39
    this.sign = 39
    // 定时器初始值
    this.speed = 200
    // 第一次蛇加速时，蛇的长度
    this.k = 8
  }
  controlSnake() {
    document.addEventListener(
      'keydown',
      (e) => {
        setTimeout(() => {
          if (
            e.keyCode !== this.sign &&
            Math.abs(e.keyCode - this.sign) !== 2
          ) {
            switch (e.keyCode) {
              case 37:
                this.snake.direction = 'left'
                break
              case 38:
                this.snake.direction = 'top'
                break
              case 39:
                this.snake.direction = 'right'
                break
              case 40:
                this.snake.direction = 'bottom'
            }
            this.sign = e.keyCode
          }
        }, this.speed)
      },
      false
    )
  }
  runSnake() {
    var timerId = setInterval(() => {
      this.snake.move(this.food, this.map)
      // 蛇撞墙后，游戏结束
      // 先判断是否越过边界，如已越界便return不再渲染移动后的蛇
      var maxX = Math.floor(this.map.offsetWidth / this.snake.width)
      var maxY = Math.floor(this.map.offsetHeight / this.snake.height)
      var headX = this.snake.body[0].x
      var headY = this.snake.body[0].y
      if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
        alert('Game Over')
        clearInterval(timerId)
        return
      }

      // 蛇头与蛇身部分重叠，游戏结束
      // 先判断是否碰到身体，如已碰到便return不再渲染移动后的蛇
      for (
        var i = 1, bd = this.snake.body[i];
        i < this.snake.body.length;
        i++
      ) {
        var bd = this.snake.body[i]
        if (headX == bd.x && headY == bd.y) {
          alert('Game Over')
          clearInterval(timerId)
          return
        }
      }

      // 当蛇总长度达到K时，移动速度加快
      if (this.snake.body.length >= this.k) {
        this.speed *= 0.8
        this.k += 5
        clearInterval(timerId)
        this.runSnake()
      }

      this.snake.render(this.map)
      // console.dir(this.food);

      for (var i = 0; i < this.snake.body.length; i++) {
        var sn = this.snake.body[i]
        while (this.food.x == sn.x && this.food.y == sn.y) {
          this.food.render(this.map)
        }
      }
    }, this.speed)
  }
  start(speed) {
    console.log(speed)
    this.food.render(this.map)
    this.snake.render(this.map)
    this.speed = speed
    this.runSnake()
    this.controlSnake()
  }
}

export default Game
