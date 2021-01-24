/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 判断一个链表是否是回文链表
 */
var isPalindrome1 = function(head) {
  let arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  return arr.toString() === arr.reverse().toString()
}

// 将值复制到数组中后，使用双指针法
var isPalindrome1 = function(head) {
  let arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }
  return true
}

// 反转链表
const reverseList = head => {
  let prev = null
  let curr = head
  while (curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev
}

// 找到链表的后半段，利用快慢指针，快指针走到尾节点时，慢指针刚好走到一半
const endOfFirstHalf = head => {
  let fast = slow = head
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

var isPalindrome3 = function(head) {
  if (head === null) return true

  const firstHalfEnd = endOfFirstHalf(head)
  const secondHalfEnd = reverseList(firstHalfEnd.next)

  let p1 = head
  let p2 = secondHalfEnd
  let result = true
  while (result && p2) {
    if (p1.val !== p2.val) result = false
    p1 = p1.next
    p2 = p2.next
  }

  firstHalfEnd.next = reverseList(secondHalfEnd)
  return result
}
