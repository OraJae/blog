<template>
  <div>
    <h2>1、shift()</h2>

    <blockquote>
      <p>
        删除数组的第一个元素<br />返回值为被删除的元素<br />改变原数组
        <br />无需传参
      </p>
    </blockquote>

    <p>
      <code>js var a = [1, 2, 3] a.shift() // 1 console.log(a) // [2, 3] </code>
    </p>

    <el-divider></el-divider>

    <p>&lt;a id=&#39;2&#39;&gt;&lt;/a&gt;</p>

    <h4>2、<code>pop()</code></h4>

    <blockquote>
      <p>
        删除数组中最后一个元素 <br />返回值被删除的值<br />改变原数组
        <br />无需传参
      </p>
    </blockquote>

    <p>
      <code
        >js var a = [1, 2, 3, 4] a.pop() // 4 console.log(a) // [1, 2, 3]
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;3&#39;&gt;&lt;/a&gt;</p>

    <h4>3、<code>unshift()</code></h4>

    <blockquote>
      <p>
        在数组开头增加一个或多个元素<br />返回新数组的长度<br />改变原数组
        <br />需传入要添加的元素
      </p>
    </blockquote>

    <p>
      <code
        >js var a = [1, 2, 3] a.unshift(0,7,9) // 6 console.log(a) // [0,7,9, 1,
        2, 3]
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;4&#39;&gt;&lt;/a&gt;</p>

    <h4>4、<code>push()</code></h4>

    <blockquote>
      <p>
        在数组末尾增加一个或多个元素<br />返回新数组的长度<br />改变原数组
        <br />需传入要添加的元素
      </p>
    </blockquote>

    <p>
      <code
        >js var a = [] a.push(1, 2, 3) // 返回新组长度 console.log(a) // [1, 2,
        3]
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;5&#39;&gt;&lt;/a&gt;</p>

    <h4>5、<code>splice()</code></h4>

    <blockquote>
      <p>
        在任意的位置给数组添加或删除任意个元素 <br />返回数组格式的被删元素
        <br />改变原数组 <br />需传参
      </p>
    </blockquote>

    <p>
      <code
        >js array.splice(start,howmany,item1,.....,itemX) =&gt;
        参数start，必需，表示从何处开始修改元素 =&gt;
        参数howmany，必需，表示要删除的元素个数，如为0则不删除，如未规定则从start位置一直删到最后
        =&gt; 参数item，可选，需添加的元素
      </code>
    </p>

    <p>
      <code
        >js var fruits = [&quot;Banana&quot;, &quot;Orange&quot;,
        &quot;Apple&quot;, &quot;Mango&quot;];
        fruits.splice(2,1,&quot;Lemon&quot;,&quot;Kiwi&quot;); // fruits
        输出结果： // Banana,Orange,Lemon,Kiwi,Mango
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;6&#39;&gt;&lt;/a&gt;</p>

    <h4>6、<code>slice()</code></h4>

    <blockquote>
      <p>
        从已有的数组中提取一段元素
        <br />返回新的数组，需用变量保存<br />原数组不变 <br />需传参
        <br />该方法可用于字符串
      </p>
    </blockquote>

    <p>
      <img
        alt="slice.jpg"
        src="https://upload-images.jianshu.io/upload_images/18186705-dfdc4c3a9312e66e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
      />
    </p>

    <p>
      <code
        >js var a = [1, 2, 3, 4, 5] a.slice(0, 3) // [1, 2, 3]
        第一个参数是索引,第二个参数为正数n,代表截取n个 a.slice(3) // [4, 5]
        只传一个参数m,代表从索引从m开始截取,到最后 a.slice(1, -1) // [2, 3, 4]
        如果第二个参数为负数-n,则代表从截取到倒数n+1个
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;7&#39;&gt;&lt;/a&gt;</p>

    <h4>7、<code>sort()</code></h4>

    <blockquote>
      <p>
        对数组的元素进行排序<br />返回改变后的原数组<br />改变原数组
        可传参，只能传入函数
      </p>
    </blockquote>

    <p>
      <code
        >js var points = [40,100,1,5,25,10]; points.sort(function(a,b){return
        a-b});//return值 [1,5,10,25,40,100] // points输出结果： //
        [1,5,10,25,40,100]
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;8&#39;&gt;&lt;/a&gt;</p>

    <h4>8、<code>reverse()</code></h4>

    <blockquote>
      <p>翻转数组排列顺序<br />返回改变后的原数组<br />改变原数组 无需传参</p>
    </blockquote>

    <hr />

    <p>&lt;a id=&#39;9&#39;&gt;&lt;/a&gt;</p>

    <h4>9、<code>join()</code></h4>

    <blockquote>
      <p>
        把数组中的所有元素拼接成一个字符串 <br />返回字符串 原数组不变
        可传参，传入分隔符，未传则默认为逗号分隔
      </p>
    </blockquote>

    <p>
      <code
        >js var fruits = [&quot;Banana&quot;, &quot;Orange&quot;,
        &quot;Apple&quot;, &quot;Mango&quot;]; var energy = fruits.join(&#39;
        and &#39;); // energy输出结果： // Banana and Orange and Apple and Mango
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;10&#39;&gt;&lt;/a&gt;</p>

    <h4>10、<code>some()</code></h4>

    <blockquote>
      <p>
        对数组中的每个元素执行一次回调函数<br />必需传参，传入回调函数
        <br />返回值:若有一个元素满足条件则返回true，反之为false
        只要有一个满足条件，return true，就停止循环遍历
      </p>
    </blockquote>

    <p>
      <code
        >js var arr = [4, 9, 16, 25] var sign = null
        arr.some(function(value,index){ if(value == 16) { sign = index return
        true } }) console.log(sign)
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;11&#39;&gt;&lt;/a&gt;</p>

    <h4>11、<code>every()</code></h4>

    <blockquote>
      <p>
        检验数组中的每个元素是否都满足测试函数 <br />返回true或则false
        原数组不变 <br />必需传参，传入验证的函数
      </p>
    </blockquote>

    <p>
      <code
        >js var a = [1, 2, 3, 4, 5] var b = a.every(function(item){ return item
        &lt; 10 }) console.log(b) // true
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;12&#39;&gt;&lt;/a&gt;</p>

    <h4>12、<code>filter()</code></h4>

    <blockquote>
      <p>
        检查指定数组中符合条件的所有元素 <br />返回符合条件的所有元素
        <br />原数组不变 <br />必需传参，传入验证的函数
      </p>
    </blockquote>

    <p>
      <code
        >js var ages = [32, 33, 16, 40]; function checkAdult(age) { return age
        &gt;= 18; } function myFunction() {
        document.getElementById(&quot;demo&quot;).innerHTML =
        ages.filter(checkAdult); } 输出结果为: 32,33,40
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;13&#39;&gt;&lt;/a&gt;</p>

    <h4>13、<code>concat()</code></h4>

    <blockquote>
      <p>
        合并两个或多个数组 <br />返回一个新数组 <br />原数组不变
        <br />必需传参，传入要合并的数组
      </p>
    </blockquote>

    <p>
      <code
        >js var arr1 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]; var arr2 =
        [&#39;d&#39;, &#39;e&#39;, &#39;f&#39;]; var arr3 = [&#39;f&#39;]; var
        arr4 = arr1.concat(arr2,arr3); // arr4 is a new array [ &quot;a&quot;,
        &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;,
        &quot;f&quot;, &quot;f&quot; ]
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;14&#39;&gt;&lt;/a&gt;</p>

    <h4>14、<code>forEach()</code></h4>

    <blockquote>
      <p>
        对数组中的每个元素执行一次回调函数 <br />必需传参，传入回调函数
        <br />返回值为undefined
      </p>
    </blockquote>

    <p>
      <code
        >js var arr = [4, 9, 16, 25] var sum = 0 arr.forEach(function(item){ sum
        += item }) console.log(sum) //结果为：54
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;15&#39;&gt;&lt;/a&gt;</p>

    <h4>15、<code>map()</code></h4>

    <blockquote>
      <p>
        对数组中的每个元素执行一次回调函数<br />必需传参，传入回调函数
        <br />原数组发生改变 返回值为调用函数处理过的数组
      </p>
    </blockquote>

    <p>
      <code
        >js var arr = [4, 9, 16, 25] arr.map(function(value,index){ return value
        * value }) console.log(arr) //结果为: [16, 81, 256, 625]
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;16&#39;&gt;&lt;/a&gt;</p>

    <h4>16、<code>indexOf()</code></h4>

    <blockquote>
      <p>
        查找某个指定内容在数组中首次出现的位置
        <br />返回数组中第一个与指定值相等的元素的索引, 如果找不到这样的元素,
        则返回-1<br />原数组不变 <br />必需传参，传入需检测的内容
      </p>
    </blockquote>

    <p>
      <code
        >js var a = [0, 1, 2, 1, 0] var b = a.indexOf(1) console.log(b) //
        结果为：1
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;17&#39;&gt;&lt;/a&gt;</p>

    <h4>17、<code>find()</code></h4>

    <blockquote>
      <p>
        为数组中的每个元素都调用一次函数执行<br />返回通过测试（函数内判断）的数组的第一个元素的值
        <br />原数组不变 <br />必需传参，传入回调函数
      </p>
    </blockquote>

    <p>
      <code
        >js var ages = [3, 10, 18, 20]; var result =
        ages.find(function(item,index){ return item &gt; 18 })
        console.log(result) // 结果为：20
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;18&#39;&gt;&lt;/a&gt;</p>

    <h4>18、<code>findIndex()</code></h4>

    <blockquote>
      <p>
        为数组中的每个元素都调用一次函数执行<br />返回通过测试（函数内判断）的数组的第一个元素的索引
        <br />原数组不变 <br />必需传参，传入回调函数
      </p>
    </blockquote>

    <p>
      <code
        >js var ages = [3, 10, 18, 20]; var result =
        ages.findIndex(function(item,index){ return item &gt; 18 })
        console.log(result) // 结果为：3
      </code>
    </p>

    <hr />

    <p>&lt;a id=&#39;19&#39;&gt;&lt;/a&gt;</p>

    <h4>19、<code>indexOf()</code></h4>

    <hr />

    <p><a href="#top">返回顶部</a></p>
  </div>
</template>

<script>
export default {
  name: '',
  mixins: [],
  components: {},
  data () {
    return {}
  },
  props: {},
  computed: {},
  watch: {},
  created () { },
  methods: {},
}
</script>

<style lang="scss" scoped></style>
