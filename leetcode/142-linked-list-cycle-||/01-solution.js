/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 1. find a loop (cycle) using two pointers
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    // move by 2 steps
    fast = fast.next.next;

    // if slow and fast pointers meet, then there is a loop
    // 2. find the entrance of the loop (cycle)
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        //
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};

// time complexity: O(n)
