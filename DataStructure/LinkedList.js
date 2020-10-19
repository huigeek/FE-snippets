class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.length = 0
    this.head = null
  }

  // 增
  append (element) {
    const node = new Node(element)

    if (this.head === null) {
      this.head = node
    }
    else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  // 在某一位置处增加
  insert (pos, element) {
    // 检查是否越界，越界时返回false
    if (pos > this.length - 1 || pos < 0) return false

    let node = new Node(element),
        idx = 0,
        current = this.head,
        prev

    if (pos === 0) {
      node.next = current
      this.head = node
    }
    else {
      while (idx++ < pos) {
        prev = current
        current = current.next
      }
      node.next = current
      prev.next = node
    }
    this.length++
    return true
  }

  // 删某一位置处节点
  removeAt (pos) {
    // 检查是否越界
    if (pos > this.length - 1 || pos < 0) return null

    let idx = 0,
        current = this.head,
        prev
    
    if (pos === 0) {
      this.head = current.next
    }
    else {
      while (idx++ < pos) {
        prev = current
        current = current.next
      }
      prev.next = current.next
    }
    this.length--
    return current.element
  }

  // 查节点的位置
  indexOf (element) {
    let idx = 0,
        current = this.head
    
    while (current) {
      if (current.element === element) {
        return idx
      }
      idx++
      current = current.next
    }

    return -1
  }

  // 长度
  size () {
    return this.length
  }

  // 是否为空
  isEmpty () {
    return this.length === 0
  }

  // 返回头节点
  getHead () {
    return this.head
  }

}

// let list = new LinkedList()
// list.append(10)
// list.append(13)
// console.log(list)
// list.insert(1, 20)
// list.removeAt(1)
// console.log(list)

// export default { LinkedList }
