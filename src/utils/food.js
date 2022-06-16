import { getRandomInt } from '@/utils/help'

class Food {
  constructor(opsition) {
    opsition = opsition || {}
    this.x = opsition.x || 0
    this.y = opsition.y || 0
    this.width = opsition.width || 30
    this.height = opsition.height || 30
    // this.backgroundColor = opsition.color || 'purple'
    this.background = opsition.background || 'url(~@/assets/apple30.png)'
    this.arr = []
    // this.map = map
  }
  render(map) {
    var position = 'absolute'
    this.remove()
    var div = document.createElement('div')
    map.appendChild(div)
    this.arr.push(div)
    this.x = getRandomInt(0, map.offsetWidth / this.width - 1) * this.width
    this.y = getRandomInt(0, map.offsetHeight / this.height - 1) * this.height

    div.style.left = this.x + 'px'
    div.style.top = this.y + 'px'
    div.style.width = this.width + 'px'
    div.style.height = this.height + 'px'
    // div.style.backgroundColor = this.backgroundColor
    div.style.position = position
    // div.style.background = this.background
    div.classList.add('apple')
  }
  remove() {
    if (this.arr.length !== 0) {
      this.arr[0].parentNode.removeChild(this.arr[0])
      this.arr.splice(0, 1)
    }
  }
}

export default Food
