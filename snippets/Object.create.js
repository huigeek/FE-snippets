// let obj = Object.create(XX)

function objectCreate(prototypeObject) {
  function F(){}
  F.prototype = prototypeObject
  return new F()
}