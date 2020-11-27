// implement new function
function _new (fn, ...params) {
  let _newObj = Object.create(fn.prototype)
  let result = fn.apply(_newObj, params)
  return result instanceof Object ? result : _newObj
}

// function Person (name, age) {
//   this.name = name
//   this.age = age
// }

// Person.prototype = {
//   xx: '22'
// }

// let p1 = new Person('xx', 22)
// let p2 = _new(Person, 'xx', 22)

// console.log(p1.__proto__)
// console.log(p2.__proto__)

function _new (func) {
  let obj = Object.create(null)
  (func.prototype !== null) && (obj.__proto__ = func.prototype)
  const o = func.apply(obj, Array.prototype.slice.call(arguments, 1))
  return o instanceof Object || o instanceof Function ? o : obj
}

function _new () {
  const cstor = [].shift.call(arguments)
  const obj = Object.create(cstor.prototype)
  const result = cstor.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}
