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
