/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 判断链表是否有环
 * 一快一慢两个指针，如果链表里环，那它们一定会相遇
 */
var hasCycle = function(head) {
  let p1 = p2 = head
  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    // 如果指针相遇，即指向同一个对象，说明有环
    if (p1 === p2) {
      return true
    }
  }
  return false
}