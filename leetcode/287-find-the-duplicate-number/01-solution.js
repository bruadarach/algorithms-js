// array
// utilize the concept of tortoise and hare algorithm with two pointers

// if two pointers meet, it means there is a loop/cycle! (move by 2 steps in linked list)
// after finding the loop/cycle, find the start of the loop/cycle, which is the duplicate number (move by 1 step in linked list)

// idx  =  0, 1, 2, 3, 4, 5, 6
// nums = [2, 6, 4, 1, 3, 1, 5]

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
    // num[0] = 2
    // num[2] = 4
    // num[4] = 3
    // num[3] = 1
    // num[1] = 6
    // num[6] = 5 // meeting point => find that there is a loop
    // num[5] = 1
    // num[1] = 6
    // num[6] = 5
    // num[5] = 1

    // Node { 2 -> 4 -> 3 -> 1 -> 6 -> 5 -> 1 ... }

    fast = nums[nums[fast]];
    // num[num[0]] = num[2] = 4
    // num[num[4]] = num[3] = 1
    // num[num[1]] = num[6] = 5
    // num[num[5]] = num[1] = 6
    // num[num[6]] = num[5] = 1
    // num[num[1]] = num[6] = 5 // meeting point => find that there is a loop
    // num[num[5]] = num[1] = 6
    // num[num[6]] = num[5] = 1

    console.log(slow, fast);
    // 2 4
    // 4 1
    // 3 5
    // 1 6
    // 6 1
    // 5 5

    // if slow and fast pointers meet, then there is a loop
    // console.log(`slow: ${slow}, fast: ${fast}`); // 5, 5 ===> 1, 1
    if (slow === fast) break;
  }

  // 2. find the entrance/intersection of the loop (cycle) => duplicated number
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    // slow = nums[0] = 2
    // slow = nums[2] = 4
    // slow = nums[4] = 3
    // slow = nums[3] = 1

    fast = nums[fast];
    // fast = nums[5] = 1
    // fast = nums[1] = 6
    // fast = nums[6] = 5
    // fast = nums[5] = 1

    // console.log(slow, fast);
    // 2 1
    // 4 6
    // 3 5
    // 1 1
  }
  return slow;
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
console.log(findDuplicate([2, 6, 4, 1, 3, 1, 5])); // 1

// time complexity: O(n)
// space complexity: O(1)
