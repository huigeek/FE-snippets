class Node{
  cosntructor(el){
    this.el = el
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor (){
    this.head = null
    this.tail = null
    this.length = 0
  }

  append(el){
    const node = new Node(el)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
  }

  insertAt(pos, el){
    if (pos < 0 || pos > this.length) return false
    const node = new Node(el)
    let current = this.head

    if (pos === 0) {
      if (this.head === null) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head.next = node
        this.head = node
      }
    } else if (pos === this.length) {
      current = this.tail
      current.next = node
      node.prev = current
      this.tail = node
    } else {
      let prev
      let idx = 0
      while (idx < pos) {
        prev = current
        current = current.next
        idx++
      }
      node.next = current
      prev.next = node
      current.prev = node
      node.prev = prev
    }
    this.length++
    return true
  }

  removeAt(pos){
    if (pos<0 || pos>this.length) return null
    let current = this.head
    if (pos === 0) {
      this.head = current.next
      if (this.length === 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (pos === this.length - 1) {
      current = this.tail
      this.tail = current.prev
      this.tail.next = null
    } else {
      let idx = 0
      let prev
      while (idx < pos) {
        prev = current
        current = current.next
        idx++
      }
      prev.next = current.next
      current.next.prev = prev
    }
    this.length--
    return current.el
  }

  isEmpty(){
    return this.length === 0
  }
  size(){
    return this.length
  }
  indexof(el){
    let current = this.head
    let idx = 0
    while (current) {
      if (current.el === el) {
        return idx
      }
      idx++
      current = current.next
    }
    return -1
  }
  getHead(){
    return this.head
  }
  getTail(){
    return this.tail
  }
}