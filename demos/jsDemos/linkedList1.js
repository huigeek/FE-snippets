class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.root = null
    this.size = 0
  }
  push(val){
    // 遍历到最后，在链表尾部添加值
    let node = new Node(val)
    // 如果链表为空
    if (this.isEmpty()) this.head = node
    // 如果链表不为空
    else {
      let cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.size++
  }
  // 获取链表指定位置的值
  getElementAt(pos){
    // 从前往后遍历，找到位置，返回节点
    // 首先判断pos是否有效
    if (pos < 0 && pos > this.size) {
      return undefined
    }
    let curNode = this.head
    let curIndex = 0
    while (curIndex < pos) {
      curNode = curNode.next
      curIndex++
    }
    return curNode
  }
  // 向链表的特定位置插入一个新值
  insert(val, pos){
    // 需要判断pos是否是合法值，是否超过长度
    // pos: 0, 1, 2, ..., this.size - 1
    if (pos < 0 || pos > this.size){
      return false
    } else {
      let node = new Node(val)
      if (pos === 0) {
        let curNode = this.head
        node.next = curNode
        this.head = node
      } else {
        let prevNode = this.getElementAt(pos - 1)
        node.next = prevNode.next
        prevNode.next = node
      }
      this.size++
      return true
    }
  }
  // 从链表中移除一个元素
  remove(val) {
    const idx = this.indexOf(val)
    return this.removeAt(idx)
  }
  // 从链表的特定位置移除一个元素 
  removeAt(pos) {
    // 首先验证pos的有效性
    if (pos < 0 || pos >= this.size) {
      return undefined
    }
    let curNode = this.head
    // 如果移除是第一个元素
    if (pos === 0) {
      this.head = curNode.next
    }
    // 非第一项
    else {
      let prevNode = this.getElementAt(pos - 1)
      let curNode = prevNode.next
      prevNode.next = curNode.next
    }
    this.size--
    return curNode.val
  }
  // 返回一个值的位置
  indexOf(val){
    let curNode = this.head
    let curIndex = 0
    if (curNode.val === val) return curIndex
    while (curNode.next) {
      curNode = curNode.next
      curIndex++
      if (curNode.val === val) return curIndex
    }
    return -1
  }
  // 如果链表中不包含任何元素，返回true，如果链表长度大于0，则返回false
  isEmpty(){
    return this.size === 0
  }
  // 返回链表包含的元素个数
  size(){
    return this.size
  }
  getHead(){
    return this.head
  }
  // 返回表示整个链表的字符串
  toString(){
    // 遍历所有值，组合成字符串
    // 如果链表为空，则返回空字符串
    if (this.isEmpty()) return ''
    let result = ''
    let curNode = this.head
    result += curNode.val
    while (curNode.next) {
      curNode = curNode.next
      result += curNode.val
    }
    return result
  }
}

// const list = new LinkedList()
// list.push(15)
// list.push(10)
// list.removeAt(1)
// list.push(8)
// list.push(7)
// list.remove(8)
// const str = list.toString()
// console.log(str)
// list.indexOf(7)


