/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 反转链表
 * 两个节点时，如何反转：把当前节点的下个节点的next指向当前节点
 * 多个节点时，如何反转：使用双指针一前一后遍历链表，遍历的过程中不断反转双指针
 */
var reverseList1 = function(head) {
  if (head == null) return null
  let p1 = head, p2 = null
  while (p1.next) {
    const temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  p1.next = p2
  return p1
}

var reverseList2 = function(head) {
  let p1 = head, p2 = null
  while (p1) {
    const temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  return p2
}

