// 树的最大深度

// leetcode 104. 二叉树的最大深度

class Node{
  constructor(val){
    this.value = val
    this.left = null
    this.right = null
  }
}

class BST{
  constructor(){
    this.root = null
  }
  addNode(v){
    if (this.root === null) {
      this.root = new Node(v)
    }
    else {
      this._addChild(this.root, v)
    }
  }
  _addChild(node, v){
    if (v < node.value){
      if (node.left === null) {
        node.left = new Node(v)
      }
      else {
        this._addChild(node.left, v)
      }
    }
    else {
      if (node.right === null) {
        node.right = new Node(v)
      }
      else {
        this._addChild(node.right, v)
      }
    }
  }
}

// DFS, 深度优先搜索
// 时间复杂度：O(n)
const maxDepth = function(node) {
  // 没有节点，返回0
  if (node === null) return 0
  // 递归一次，加一
  const left = maxDepth(node.left)
  const right = maxDepth(node.right)
  return Math.max(left, right) + 1
}

let tree = new BST()
tree.addNode(3)
tree.addNode(9)
tree.addNode(20)
tree.addNode(2)
tree.addNode(1)
tree.addNode(15)
tree.addNode(7)

console.log(maxDepth(tree.root)) // 4



