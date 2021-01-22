/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let result = []
  let stack = [root]

  while (stack.length > 0) {
    let temp = stack.pop()
    if (temp === null) continue

    result.push(temp.val)

    // 栈的特性是后进先出，为了保证可以先访问左节点，再访问右节点
    // 这里要先把右节点压入栈中，再把左节点压入栈中
    stack.push(temp.right)
    stack.push(temp.left)
  }
  return result
};