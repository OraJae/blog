class Snake {
  constructor(position) {
    position = position || {}
    // 蛇节
    this.width = position.width || 30
    this.height = position.height || 30
    this.direction = position.direction || 'right'
    this.borderRadius = position.borderRadius || 10
    // 蛇body
    this.body = [
      { x: 8, y: 2, class: 'snake-head' },
      { x: 7, y: 2, class: 'snake-body' },
      { x: 6, y: 2, class: 'snake-body' },
      { x: 5, y: 2, class: 'snake-body' },
      { x: 4, y: 2, class: 'snake-body' }
    ]
    this.arr = []
  }
  render(map) {
    this.remove()
    var position = 'absolute'
    for (var i = 0; i < this.body.length; i++) {
      var object = this.body[i]
      var div = document.createElement('div')
      map.appendChild(div)
      this.arr.push(div)
      div.style.width = this.width + 'px'
      div.style.height = this.height + 'px'
      div.style.left = object.x * this.width + 'px'
      div.style.top = object.y * this.height + 'px'
      div.style.borderRadius = this.borderRadius + 'px'
      div.style.position = position
      //   div.style.background = object.background
      div.classList.add(object.class)
    }
  }
  remove() {
    for (var i = this.arr.length - 1; i >= 0; i--) {
      this.arr[i].parentNode.removeChild(this.arr[i])
      this.arr.splice(i, 1)
    }
  }
  move(food, map) {
    // 蛇节移动到前一部分的位置
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x
      this.body[i].y = this.body[i - 1].y
    }
    var head = this.body[0]
    switch (this.direction) {
      case 'right':
        head.x += 1
        break
      case 'left':
        head.x -= 1
        break
      case 'top':
        head.y -= 1
        break
      case 'bottom':
        head.y += 1
    }
    var headX = head.x * this.width
    var headY = head.y * this.height

    if (headX === food.x && headY === food.y) {
      var last = this.body[this.body.length - 1]
      this.body.push({
        x: last.x,
        y: last.y,
        class: last.class
      })
      food.render(map)
    }
  }
}

export default Snake
