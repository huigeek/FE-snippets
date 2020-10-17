// // 内部是栈，实现队列的效果
// class Queue {
//     constructor () {
//         this.stack1 = []
//         this.stack2 = []
//         // stack （栈） 只能push和pop
//     }
//     enqueue (item) {
        
//     }
//     dequeue () {
        
//     }
// }

class Stack {
  constructor () {
    this.stack = []
  }
  push (item) {
    this.stack.push(item)
  }
  pop () {
    return this.stack.pop()
  }
  size () {
    return this.stack.length
  }
}

/**
 * A Two Stack Queue
 * stackIn: 入队时，始终保证 stackIn 的顺序
 * 遍历 stackIn 执行出栈, 同时 stackOut 入栈。保证 stackOut 的出栈顺序是正确的出队。
 */
class Queue {
  constructor () {
    this.stackIn = new Stack()
    this.stackOut = new Stack()
  }
  enqueue (item) {
    this.stackIn.push(item)
  }
  dequeue () {
    if (!this.stackOut.size()) {
      while(this.stackIn.size()) {
        this.stackOut.push(this.stackIn.pop())
      }
    }
    return this.stackOut.pop()
  }
}

// let queue = new Queue()
// queue.enqueue(3)
// queue.enqueue(5)
// queue.enqueue(6)
// queue.dequeue()
// console.log(queue)
// queue.enqueue(9)
// queue.dequeue()
// console.log(queue)
