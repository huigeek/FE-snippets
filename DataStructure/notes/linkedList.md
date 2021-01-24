## 链表

### 链表是什么
- 多个元素组成的列表
- 元素存储不连续，由next指针连在一起

### 数组 vs 链表
数组：增删非首尾元素时需要移动元素
链表：增删非首尾元素时不需要移动元素，只需要修改next指针。但如果要查找一个元素，需要从头开始查起。

js中没有链表这种数据结构，可以用object来模拟链表

生活中使用场景：康加舞队，寻宝游戏，火车车厢

```js
// LinkedList骨架
class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }
  // 尾部添加
  push(val){}
  // 在特定位置插入
  insert(val, pos){}
  // 返回特定位置值
  getElementAt(index){}
  // 从链表中移除一个值
  remove(val){}
  // 返回值在链表中的索引
  indexOf(val){}
  // 从链表中特定位置移除值
  removeAt(pos){}
  // 链表是否为空
  isEmpty(){}
  // 返回链表长度
  size(){}
  // 返回链表的字符串表示
  toString(){}
}
```

## 前端与链表，原型链

原型链本质是就是一个链表，链表用next指针相连接，原型链用__proto__指针相连接

我们用new关键字实例化一个对象时，会将实例对象的__proto__指向构造函数的原型对象，而构造函数的原型对象又是其他构造函数的实例对象，它本身也有__proto__指向它的构造函数的原型对象。最后会找到Object.Prototype上，而Object.Prototype的__proto__会指向null。链表里最后的属节点的next属性指向null，而原型链里最后的尾节点的__proto__指也向null。

js里有很多内置对象，Function, Array, Object, Date, RegExp等等

这些内置对象都有各自的原型对象，Function.prototype, Array.prototype, Object.prototype, Date.prototype, RegExp.prototype等等。

```js
obj -> Object.prototype -> null
func -> Function.prototype -> Object.prototype -> null
arr -> Array.prototype -> Object.prototype -> null
```

如果A沿着原型链能找到B.prototype，那么 A instanceof B 为true

如果在A对象上没有找到x属性，会沿着原型链往上继续寻找x属性。

除了对象，其他内置对象，都是先指向自己的原型对象，再指向对象的原型对象。

[Practical Data Structures for Frontend Applications: When to use Linked Lists](https://itnext.io/practical-data-structures-for-frontend-applications-when-to-use-linked-lists-8ef9826a745)

