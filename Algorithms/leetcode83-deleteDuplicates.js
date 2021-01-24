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
 * 删除排序链表中重复的元素
 * 由于链表是排序的，所以重复元素的位置一定是连在一起的
 */
var deleteDuplicates = function(head) {
  // 遍历节点，如果当前节点与下一个节点值相同，则删除下一节点
  let cur = head
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    }
    else {
      cur = cur.next
    }
  }
  return head
}
