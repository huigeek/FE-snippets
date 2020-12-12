// 创建一个名为splat的函数，它接受一个函数fun, 并返回另一个函数，该函数接受一个数组并用apply来执行fun。
// 简单讲就是收集参数，收集完，执行某些操作
function splat(fun){
  return function(array){
    return fun.apply(null, array)
  }
}

const addArrayElements = splat((x, y) => x + y)
console.log(addArrayElements([3, 5]))

// 创建一个与splat功能相反的函数unsplat，它接受一个函数fun，
// 并返回另一个接受做任意多个参数的函数，将参数转为数组传入fun并调用它

function unsplat(fun){
  return function(){
    return fun.call(null, [...arguments])
  }
}

const joinElements = unsplat(function(array){return array.join(' ')})
console.log(joinElements(1, 2))
console.log(joinElements('-', '$', '/', '!', ':', '(', ')'))
