// 函数柯里化
// 把接受多个参数的函数转变成接受一个单一参数，返回接收余下的参数并且返回结果的新函数

function currying(fn){
  var _args = Array.prototype.slice(arguments, 1)
  return function(){
    _innerArgs = Array.prototype.slice(arguments)
    return fn.apply(null, [].concat(_args, _innerArgs))
  }
}
