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

    stack.push(temp.right)
    stack.push(temp.left)
  }
  return result
};