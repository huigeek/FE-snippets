// 柯里化函数

function add(a, b){
  return a + b
}

function curry(fn){
  let outerArgs = [...arguments].slice(1)
  return function(){
    let innerArgs = [...arguments]
    let allArgs = [...outerArgs, ...innerArgs]
    return fn.apply(null, allArgs)
  }
}

let curr = curry(add, 4)
console.log(curr(3)) // 7

const Introduce = name => age => school => {
  return `名字是${name}，年龄是${age}，学校是${school}`
}

console.log(Introduce('xx')('yy')('zz'))

const fn1 = num => num + 1
const fn2 = num => num * 2
const pipe = (...rest) => x => rest.reduce((data, fn) => fn(data), x) // f2(f1(2))
const result = pipe(fn1, fn2)(2)
console.log(result) // fn2(fn1(2))