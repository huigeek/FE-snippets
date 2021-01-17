# Inheritance in JavaScript

```js
function A(){}
function B(){}
```

- 原型链继承
  - 将B的原型指向A的实例`B.prototype = new A()`，这样B的实例就可以访问A的构造函数的属性和方法。缺点，B的所有实例访问的是同一个原型对象。
- 构造函数继承
  - 在B的构造函数里，`A.call(this)`，A的所有代码绑定B的执行环境，并执行了一遍。因此A上所有属性和方法在B上也都生成了一份，但B访问不到A原型上的属性和方法。
- 组合继承
  - 原型链继承的缺点是子类所有实例都可以访问父类的原型对象，但共享父类构造函数；构造函数继承，可以独立拥有父类构造函数的所有属性和方法，但不能访问父类原型对象上的属性和方法。
  - 把两者结合就是组合继承。这里需要注意，`B.prototype = new A()`后，需要再执行`B.prototype.constructor = B`，把B原型上的构造器指针指回自己的构造函数。
- 原型式继承
- 寄生组合继承

`A.call(this)`和`B.prototype = new A()`会调用两次A。优化：`B.prototype = new A()` 改成 `B.prototype = Object.create(A.prototype)`

ES6中有了定义类的方式，继承使用extends，它是寄生组合式继承的语法糖。
