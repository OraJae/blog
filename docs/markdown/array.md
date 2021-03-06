### 1、shift

> 删除数组的第一个元素
> 返回值为被删除的元素
> 改变原数组
> 无需传参

```javascript
var a = [1, 2, 3]
a.shift() // 1
console.log(a) // [2, 3]
```

### 2、pop

> 删除数组中最后一个元素
> 返回值被删除的值
> 改变原数组
> 无需传参

```javascript
var a = [1, 2, 3]
a.unshift(0, 7, 9) // 6
console.log(a) // [0,7,9, 1, 2, 3]
```

### 3、unshift

> 在数组开头增加一个或多个元素
> 返回新数组的长度
> 改变原数组
> 需传入要添加的元素

```javascript
var a = [1, 2, 3]
a.unshift(0, 7, 9) // 6
console.log(a) // [0,7,9, 1, 2, 3]
```

### 4、push

> 在数组末尾增加一个或多个元素
> 返回新数组的长度
> 改变原数组
> 需传入要添加的元素

```javascript
var a = []
a.push(1, 2, 3) // 返回新组长度
console.log(a) // [1, 2, 3]
```

### 5、splice

> 在任意的位置给数组添加或删除任意个元素
> 返回数组格式的被删元素
> 改变原数组
> 需传参

```javascript
array.splice(start,howmany,item1,.....,itemX)
=> 参数start，必需，表示从何处开始修改元素
=> 参数howmany，必需，表示要删除的元素个数，如为0则不删除，如未规定则从start位置一直删到最后
=> 参数item，可选，需添加的元素
```

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(2, 1, 'Lemon', 'Kiwi')
// fruits 输出结果：
// Banana,Orange,Lemon,Kiwi,Mango
```

### 6、slice

> 从已有的数组中提取一段元素
> 返回新的数组，需用变量保存
> 原数组不变
> 需传参
> 该方法可用于字符串

![18186705-dfdc4c3a9312e66e.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/2543409/1641799425942-78e27023-1a40-4dd5-bebd-87c4c9247b04.jpeg#clientId=u7e8b6b04-2b54-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u4a40bd06&margin=%5Bobject%20Object%5D&name=18186705-dfdc4c3a9312e66e.jpg&originHeight=226&originWidth=627&originalType=binary&ratio=1&rotation=0&showTitle=false&size=10971&status=done&style=none&taskId=u6864ef03-f428-4e4a-86a9-5df6994413b&title=)

```javascript
var a = [1, 2, 3, 4, 5]
a.slice(0, 3) // [1, 2, 3] 第一个参数是索引,第二个参数为正数n,代表截取n个
a.slice(3) // [4, 5] 只传一个参数m,代表从索引从m开始截取,到最后
a.slice(1, -1) // [2, 3, 4] 如果第二个参数为负数-n,则代表从截取到倒数n+1个
```

### 7、sort

> 对数组的元素进行排序
> 返回改变后的原数组
> 改变原数组 可传参，只能传入函数

```javascript
var points = [40, 100, 1, 5, 25, 10]
points.sort(function(a, b) {
  return a - b
}) //return值 [1,5,10,25,40,100]
// points输出结果：
// [1,5,10,25,40,100]
```

### 8、reverse

> 翻转数组排列顺序
> 返回改变后的原数组
> 改变原数组 无需传参

### 9、join

> 把数组中的所有元素拼接成一个字符串
> 返回字符串 原数组不变 可传参，传入分隔符，未传则默认为逗号分隔

```javascript
var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
var energy = fruits.join(' and ')
// energy输出结果：
// Banana and Orange and Apple and Mango
```

### 10、some

> 对数组中的每个元素执行一次回调函数
> 必需传参，传入回调函数
> 返回值:若有一个元素满足条件则返回 true，反之为 false 只要有一个满足条件，return true，就停止循环遍历

```javascript
var arr = [4, 9, 16, 25]
var sign = null
arr.some(function(value, index) {
  if (value == 16) {
    sign = index
    return true
  }
})
console.log(sign) // 输出：2
```

### 11、every

> 检验数组中的每个元素是否都满足测试函数
> 返回 true 或则 false 原数组不变
> 必需传参，传入验证的函数

```javascript
var a = [1, 2, 3, 4, 5]
var b = a.every(function(item) {
  return item < 10
})
console.log(b) // true
```

### 12、filter

> 检查指定数组中符合条件的所有元素
> 返回符合条件的所有元素
> 原数组不变
> 必需传参，传入验证的函数

```javascript
var ages = [32, 33, 16, 40]
function checkAdult(age) {
  return age >= 18
}
function myFunction() {
  document.getElementById('demo').innerHTML = ages.filter(checkAdult)
}
// 输出结果为: 32,33,40
```

### 13、concat

> 合并两个或多个数组
> 返回一个新数组
> 原数组不变
> 必需传参，传入要合并的数组

```javascript
var arr1 = ['a', 'b', 'c']
var arr2 = ['d', 'e', 'f']
var arr3 = ['f']
var arr4 = arr1.concat(arr2, arr3)
// arr4 is a new array [ "a", "b", "c", "d", "e", "f", "f" ]
```

### 14、forEach

> 对数组中的每个元素执行一次回调函数
> 必需传参，传入回调函数
> 返回值为 undefined

```javascript
var arr = [4, 9, 16, 25]
var sum = 0
arr.forEach(function(item) {
  sum += item
})
console.log(sum) //结果为：54
```

### 15、map

> 对数组中的每个元素执行一次回调函数
> 必需传参，传入回调函数
> 原数组发生改变 返回值为调用函数处理过的数组

```javascript
var arr = [4, 9, 16, 25]
arr.map(function(value, index) {
  return value * value
})
console.log(arr) //结果为: [16, 81, 256, 625]
```

### 16、indexOf

> 查找某个指定内容在数组中首次出现的位置
> 返回数组中第一个与指定值相等的元素的索引, 如果找不到这样的元素, 则返回-1
> 原数组不变
> 必需传参，传入需检测的内容

```javascript
var a = [0, 1, 2, 1, 0]
var b = a.indexOf(1)
console.log(b) // 结果为：1
```

### 17、find

> 为数组中的每个元素都调用一次函数执行
> 返回通过测试（函数内判断）的数组的第一个元素的值
> 原数组不变
> 必需传参，传入回调函数

```javascript
var ages = [3, 10, 18, 20]
var result = ages.find(function(item, index) {
  return item > 18
})
console.log(result) // 结果为：20
```

### 18、findIndex

> 为数组中的每个元素都调用一次函数执行
> 返回通过测试（函数内判断）的数组的第一个元素的索引
> 原数组不变
> 必需传参，传入回调函数

```javascript
var ages = [3, 10, 18, 20]
var result = ages.findIndex(function(item, index) {
  return item > 18
})
console.log(result) // 结果为：3
```

### 19、includes

> 判断字符串是否包含指定的子字符串
> 使用 includes()比较字符串和字符时是区分大小写的

```javascript
const array1 = [1, 2, 3]

console.log(array1.includes(2))
// expected output: true

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat'))
// expected output: true

console.log(pets.includes('at'))
// expected output: false
```
