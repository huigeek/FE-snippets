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

