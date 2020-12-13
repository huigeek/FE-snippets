// 函数柯里化
// 把接受多个参数的函数转变成接受一个单一参数，返回接收余下的参数并且返回结果的新函数

// 应用
// 1. 参数复用
// 2. 提前返回
// 3. 延迟计算/运行

function currying(fn){
  var _args = Array.prototype.slice(arguments, 1)
  return function(){
    _innerArgs = Array.prototype.slice(arguments)
    return fn.apply(null, [].concat(_args, _innerArgs))
  }
}

// 通用实现
function currying2(fn, ...rest1){
  return function(...rest2){
    return fn.apply(null, rest1.concat(rest2))
  }
}

// 用它将一个sayHello函数柯里化试试：
function sayHello(name, age, fruit){
  console.log(`我叫${name}，我${age}岁了，我喜欢吃${fruit}`)
}

const curryingShowMsg1 = currying2(sayHello, '小明')
curryingShowMsg1(22, '苹果')

const curryingShowMsg2 = currying2(sayHello)
curryingShowMsg2('小花', 18, '西瓜')

// 如果要多层的柯里化呢？希望经过柯里化的函数只传递一个或者多个参数

// 例如
// const betterShowMsg = curryingHelper(sayHello)
// betterShowMsg('小明', 22, '西瓜')
// betterShowMsg('小花', 20)('苹果')
// betterShowMsg('小明')(18, '橘子')
// betterShowMsg('小明')(16)('橙子')

// 为了实现上面的，构造一个curryingHelper，使得柯里化一个函数的时候可以不用嵌套currying2
// 把currying2放在curryingHelper里调用

function curryingHelper(fn, l){
  let len = l || fn.length
  return function(){
    let innerArgs = [...arguments]
    return innerArgs.length < len ? curryingHelper(currying2.apply(this, [fn].concat(innerArgs)), len - innerArgs.length)
                                  : fn.apply(this, innerArgs)
  }
}

const betterShowMsg = curryingHelper(sayHello)
betterShowMsg('小明', 22, '西瓜')
betterShowMsg('小花', 20)('苹果')
betterShowMsg('小明')(18, '橘子')
betterShowMsg('小明')(16)('橙子')
