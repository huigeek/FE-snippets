Function.prototype.myCall = function (context) {
  context = context || window
  const temp = Symbol('call')
  context[temp] = this
  const args = [...arguments].slice(1)
  const result = context[temp](...args)
  delete context[temp]
  return result
}

Function.prototype.myApply = function (context, args) {
  context = context || window
  const temp = Symbol('apply')
  context[temp] = this
  const result = context[temp](args)
  delete context[temp]
  return result
}

Function.prototype.myBind = function () {
  let that = this,
      thatArgs = arguments[0],
      args = [...arguments].slice(1)

  if (typeof that !== 'function') {
    throw new TypeError('myBind callback is not a function')
  }

  return function () {
    return that.apply(thatArgs, args)
  }
}

// let a = {
//   xx: 13
// }

// let b = {
//   xx: 14
// }

// let c = function () {
//   console.log(this.xx)
// }

// c.call(a)
// c.apply(b)

// c.myBind(a).myBind(b)()
