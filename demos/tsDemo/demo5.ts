var a = 100

function f(){
  var a = 10
  return function g() {
    var b = a + 1
    return b
  }
}

var g = f() // function g(){}, 闭包, 第当 g 被调用时，它都可以访问到 f 里的 a 变量.
console.log(g()) // 11

function f1() {
  var a = 1
  a = 2
  var b = g()
  a = 3
  return b
  function g(){
    return a
  }
}

console.log(f1()) // 2
