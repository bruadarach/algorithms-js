/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  // move fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // if fast pointer reaches the end, it means the nth node from the end is the head node
  if (!fast) return head.next; // fast === null

  // move slow and fast pointers until fast pointer reaches the end
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // slow.next is the nth node from the end, so remove it
  slow.next = slow.next.next;

  return head;
};

// console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)); // [1, 2, 3, 5]
// console.log(removeNthFromEnd([1], 1)); // []
// console.log(removeNthFromEnd([1, 2], 1)); // [1]

// time complexity: O(n)
// space complexity: O(1)
