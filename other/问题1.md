## var 和 let const 的区别

var是es5的语法，会使代码在编译阶段将声明提升到当前作用域的最上面。执行阶段再在原来位置赋值。
let和const是es6提出的，以let声明的变量可以修改，const用于声明常量，不可修改。而且let和const声明的变量不会提升。es6提出块作用域，它们是以大括号为一个块作用域。在块作用域开始处到声明之前的区域叫做暂时性死区，这里不能对变量进行访问。

## typeof 返回那些类型

值类型除了null返回object，其他正常返回undefined, boolean, string, number, symbol. 
函数返回function.
null和数组以及其他对象返回object.

## 列举强制类型转换和隐式类型转换

parseInt, parseFloat, toString和toNumber会进行强制类型转换
if和while判断语句, 逻辑运算，==，字符串拼接里会进行隐式类型转换

## 手写深度比较，模拟lodash isEqual

值类型时，全等
引用类型时，递归比较每一项

## split()和join()的区别

split()是字符串原型方法，将字符串以某些字符串分割成数组
join()是数组原型方法，将数组以某些字符串拼接成字符串

## 数组的push, pop, unshift, shift分别是什么

- 功能是什么
- 返回值是什么
- 是否会对原数组造成影响

arr.push(element1[, ...[, elementN]])
arr.pop()
arr.unshift(element1[, ...[, elementN]])
arr.shift()

pop、shift返回移除值，push、unshift返回length
push,pop,unshift,shift都会对原数组造成影响，concat不会对原数组造成影响

## 数组API中有那些是纯函数

纯函数：1.不改变源数组（没有副作用）2.返回数组

concat,map,filter,slice

## 数组slice和splice的区别

## [10,20,30].map(parseInt)返回结果是什么

## ajax请求get和post的区别

## 函数call和applly的区别

## 事件代理（委托）是什么

## 闭包是什么，有什么特性? 有什么负面影响

作用域和自由变量

闭包的应用场景：作为参数被传入？作为返回值被返回

自由变量的查找，要在函数定义的地方(而非执行的地方)

## 如何阻止事件冒泡和默认行为？

## 查找、添加、删除、移动DOM节点的方法

## 如何减少DOM操作

- 缓存DOM查询的结果
- 多次DOM操作, 合并到一次插入

创建文档片段，`document.createDocumentFragment()`, 此时文档片段只在内存里，还没有插入到DOM结构中，把操作在文档片段里增删改查，所有都完成后，再一次插入到DOM结构中。

## 解释jsonp的原理，为何它不是真正的ajax?
ajax的核心是XMLHttpRequest，jsonp的本质是利用script标签进行跨域

## document load和ready的区别
```
window.addEventListener('load', function(){
  // 页面全部资源都加载完才会执行，包括图片、视频等
})
window.addEventListener('DOMContentLoaded', function(){
  // DOM渲染完即可执行，此时图片、视频还可能没有加载完
})
```

## ==和===的区别

## 函数声明和函数表达式的区别

## new Object()和Object.create()的区别

{}等同于new Object(), 原型是Object.prototype

Object.create(null)没有原型
Object.create({...})可指定原型

## 关于this的场景题

## 关于作用域和自由变量的场景题1,2

```js
let a = 100
function test(){
  console.log('111', a) // 100
  a = 10
  console.log('222', a) // 10
}
test()
console.log('333', a) // 10
```

```js
let a = 100
function testa(){
  console.log('111a', a) // 100
  a = 10
  console.log('222a', a) // 10
}
testa()
console.log('333a', a) // 10

let b = 100
function testb(){
  console.log('111b', b) // undefined
  var b = 10
  console.log('222b', b) // 10
}
testb()
console.log('333b', b) // 100

let c = 100
function testc(){
  // console.log('111c', c) // 报错
  let c = 10
  console.log('222c', c) // 10
}
testc()
console.log('333c', c) // 100
```

## 判断字符串以字母开头,后面字母数字下划线，长度6~30

`/^[a-zA-Z]\w{5,29}$/`

## 手写字符串trim方法，保证浏览器兼容性
`String.prototype.trim = function() {return this.replace(/^\s+/, '').replace(/\s+$/, '')}`

## 如何获取多个数字中的最大值
snippets里max.js

## 如何用js实现继承
- class
- prototype

## 如何捕获JS程序中的异常
- 手动捕获
  ```js
  try {
    // do sth
  } catch (ex) {
    // do sth
  } finally {
    /// do sth
  }
  ```
- 自动捕获
  ```js
  window.onerror = function(message, source, lineNum, colNum, error){
    // 1. 对于跨域的js，如CDN的，不会有详细的报错信息
    // 2. 对于压缩的js，还要配合sourceMap反查到未压缩代码的行、列
  }
  ```
## 什么是json
- json是一种数组格式，本质是一段字符串
- json格式和js对象结构一致，对js语言更友好
- window.JSON是一个全局对象：JSON.stringify(), JSON.parse()

## 获取当前页面url的参数
- 传统方式，window.location.search
- 新API，URLSearchParams

## 将url参数解析为JS对象

## 手写数组flatten,考虑多层级

## 数组去重

## 手写深拷贝

## 介绍一下RAF requestAnimationFrame
  要想动画流畅，更新频率要60帧/s, 即16.67ms更新一次视图

## 前端性能如何优化？一般从那几个方法考虑
- 原则: 多使用内存、缓存，减少计算、减少网络请求
- 方向：加载页面、页面渲染、页面操作流畅度