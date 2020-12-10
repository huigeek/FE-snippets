class Stack{
  constructor(){
    this.items = {}
    this.count = 0
  }
  push(v){
    this.items[this.count] = v
    this.count++
  }
  pop(){
    if (this.isEmpty()) return undefined
    let res = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return res
  }
  peek(){
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }
  isEmpty(){
    return this.count === 0
  }
  size(){
    return this.count
  }
  clear(){
    this.items = {}
    this.count = 0
  }
  toString(){
    if (this.isEmpty()) return ''
    let res = this.items[0] + ''
    for (let i = 1; i < this.count; i++) {
      res += `,${this.items[i]}`
    }
    return res
  }
}

// let stack = new Stack()
// stack.push(3)
// stack.push(21)
// stack.push(1)
// console.log(stack.pop())
// stack.push(40)
// console.log(stack.toString())
