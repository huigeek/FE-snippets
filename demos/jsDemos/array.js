// 创建数组
var a = []
var b = [1, 3]
var c = new Array(3)
c.push(1)
c.push(3)

// 字符串转化为数组
var d = 'abcdef'
var e = d.split('')
var f = Array.from(d)

// 伪数组
var f = function (a, b, c) {
  console.log(arguments)
  console.log(Array.from(arguments))
}

f(1, 3, 8)

// 合并两个数组
var g = [8, 7]
var h = [10, 13]
var i = [].concat(g, h)
var j = g.concat(h)

// 截取数组
var k = [13, 53, 25]
var l = k.slice(1)

// 删除数组元素
var m = k.splice(1, 1)
var n = k.shift()
var o = k.pop()

// 查看数组元素
// Object.keys(arr)
// Object.values(arr)
// for in
// for
// forEach
// arr.indexOf(item)
// find, findIndex

for (let v of k) {
  console.log(v)
}

// 增加数组中的元素
// push, unshift, splice

k.push(31)
