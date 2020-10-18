// implementation of instanceof function in JavaScript

// instanceof operator: object instanceof constructor
// if the prototype property of a constructor appears anywhere in the prototype chain ob an object

// myInstanceOf(obj, cstor) 等同于 obj instanceof cstor
const myInstanceOf = function (obj, cstor) { // (object, constructor)
  let proto = obj.__proto__
  while (proto !== null) {
    if (proto === cstor.prototype) {
      return true
    }
    proto = proto.__proto__
  }
  return false
}


// function Car(){}
// function Train () {}

// Car.prototype.xx = function(){}
// Train.prototype = new Car()

// const cc = new Car()
// const tt = new Train()

// console.log(cc instanceof Car)
// console.log(cc instanceof Train)
// console.log(cc instanceof Object)
// console.log(tt instanceof Car)
// console.log(tt instanceof Train)
// console.log(tt instanceof Object)

// console.log(myInstanceOf(cc, Car))
// console.log(myInstanceOf(cc, Train))
// console.log(myInstanceOf(cc, Object))
// console.log(myInstanceOf(tt, Car))
// console.log(myInstanceOf(tt, Train))
// console.log(myInstanceOf(tt, Object))