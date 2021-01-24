/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(), curry = 0
  let first = l3
  while (l1 || l2 || curry) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    const v3 = v1 + v2 + curry

    curry = Math.floor(v3 / 10)

    l3.next = new ListNode(v3 % 10)
    l3 = l3.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return first.next
}
