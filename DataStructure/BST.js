class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Queue {
  constructor() {
    this.queue = []
    this.size = 0
  }
  enqueue(value){
    this.queue.push(value)
    this.size++
  }
  dequeue(){
    if (!this.isEmpty) {
      const r = this.queue.shift()
      this.size--
      return r
    }
  }
  isEmpty(){
    return this.size === 0
  }
}

class BST {
  constructor(){
    this.root = null
    this.size = 0
  }
  getSize(){
    return this.size
  }
  isEmpty() {
    return this.root === null
  }
  addNode(v) {
    this.root = this._addNode(this.root, v)
  }
  _addNode(node, v) {
    if (!node) {
      this.size++
      return new Node(v)
    }
    let n = new Node(v)
    v > node.value ? this._addNode(node.right, v) : this._addNode(node.left, v)
    return node
  }

  // 先序遍历可用于打印树的结构
  preTraversal() {
    this._pre(this.root)
  }
  _pre(node) {
    console.log(node.value)
    this._pre(node.left)
    this._pre(node.right)
  }

  // 中序遍历可用于排序
  // 对于 BST 来说，中序遍历可以实现一次遍历就得到有序的值
  midTraversal() {
    this._mid(this.root)
  }
  _mid(node) {
    this._mid(node.left)
    console.log(node.value)
    this._mid(node.right)
  }

  // 后序遍历可用于先操作子节点，再操作父节点的场景
  backTraversal() {
    this._back(this.root)
  }
  _back(node) {
    this._back(node.left)
    this._back(node.right)
    console.log(node.value)
  }

  // 广度遍历
  breadthTraversal() {
    if (!this.root) return null
    let q = new Queue()
    // 将根节点入队
    q.enqueue(this.root)
    // 循环判断队列是否为空，为空，代表树遍历完毕
    while(!q.isEmpty) {
      const n = q.dequeue()
      console.log(n.value)
      n.left && q.enqueue(n.left)
      n.right && q.enqueue(n.right)
    }
  }
  // 获取最小值
  getMin(){
    return this._getMin(this.root).value
  }
  _getMin(node) {
    if (!node.left) return node
    return this._getMin(node.left)
  }

  // 获取最大值
  getMax(){
    return this._getMax(this.root).value
  }
  _getMax(node) {
    if (!node.right) return node
    return this._getMax(node.right)
  }

  // 向下取整
  floor(v) {
    let node = this._floor(this.root, v)
    return node ? node.value : null
  }
  _floor(node, v) {
    if (!node) return null
    if (node.value === v) return node
    // 向下取整，如果当前节点值比需要的值大，就继续递归
    if (node.value > v) {
      return this._floor(n.left, v)
    }
    // 判断当前节点是否拥有右子树
    let right = this._floor(node.right, v)
    if (right) return right
    return node
  }

  ceil(v) {
    return this._ceil(this.root, v)
  }
  _ceil(node, v) {
    if (!node) return null
    if (node.value === v) return node
    // 向上取整，如果当前值比需要的要小，就继续递归
    if (node.value < v) {
      return _ceil(node.right, value)
    }
    // 判断当前节点是否拥有左子树
    let left = this._ceil(node.left, v)
    if (left) return left
    return node
  }

}
