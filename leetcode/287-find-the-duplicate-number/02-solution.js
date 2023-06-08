// array
// utilize the concept of tortoise and hare algorithm with two pointers

// if two pointers meet, it means there is a loop/cycle! (move by 2 steps in linked list)
// after finding the loop/cycle, find the start of the loop/cycle, which is the duplicate number (move by 1 step in linked list)

// idx  =  0, 1, 2, 3, 4,
// nums = [1, 3, 4, 2, 2]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // 1. find a loop/cycle => use two pointers
  // => use the concept of linked list cycle and two pointers
  let slow = 0;
  let fast = 0;
  while (true) {
    // idx(value)
    slow = nums[slow];
    // num[0] = 1
    // num[1] = 3
    // num[3] = 2
    // num[2] = 4 // meeting point => find that there is a loop
    // num[4] = 2
    // num[2] = 4

    fast = nums[nums[fast]];
    // num[num[0]] = num[1] = 3
    // num[num[3]] = num[2] = 4
    // num[num[4]] = num[2] = 4
    // num[num[4]] = num[2] = 4 // meeting point => find that there is a loop

    console.log(slow, fast);

    // if slow and fast pointers meet, then there is a loop
    // console.log(`slow: ${slow}, fast: ${fast}`); // 5, 5 ===> 1, 1
    if (slow === fast) break;
  }

  // 2. find the entrance/intersection of the loop (cycle) => duplicated number
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2

// time complexity: O(n)
// space complexity: O(1)
