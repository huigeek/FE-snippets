// 自由变量的查找，是在函数定义的地方,
// 向上级作用域查找, 不是在执行的地方!!!

// 函数作为返回值
function create(){
  let a = 100
  return function(){
    console.log(a) // 自由变量a，在定义处查找，往上找一级，是100
  }
}
let fun = create()
let a = 200
fun() // 100


// 函数作为参数
function print(fn){
  let b = 200
  fn()
}

let b = 100
function fn() {
  console.log(b) // 自由变量b，在其定义处查找，往上找一级是b=100
}

print(fn) // 100
