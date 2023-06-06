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
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // move slow pointer by 1
    fast = fast.next.next; // move fast pointer by 2
    // if slow and fast pointers meet, then there is a loop
    if (slow === fast) return true;
  }
  return false;
};

// time complexity: O(n)
