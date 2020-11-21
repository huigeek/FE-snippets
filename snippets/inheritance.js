// 现在有一个函数A和函数B，请你实现B继承A

// 原型继承
function A(){}
function B(){}
B.prototype = new A()
B.prototype.constructor = B


// 构造函数继承
function A(){}
function B(){
  A.call(this)
}

// 组合继承
function A(){}
function B(){
  A.call(this)
}

B.prototype = new A()
