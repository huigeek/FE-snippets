/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 
 * 在一个单链表里，只给了当前节点，如何删除当前节点呢
 * 一般我们可以在单链表里顺着当前节点往后遍历，却不能往前找
 * 如果想删除当前节点，可以换种思路，把下个节点的值赋值当前节点，直接删除下个节点
 * 
 * 时间复杂度：没有循环，所以为O(1)
 * 空间复杂度：没有任何数组或矩阵，所以为O(1)
 */
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
}
