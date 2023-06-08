/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let uniqueNum = 0;
  for (let n of nums) {
    // XOR
    uniqueNum ^= n; // 0 = 0 ^ n;
  }
  return uniqueNum;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

// time complexity: O(n)
// space complexity: O(1)

/** XOR ^
 * x = 4 => 0100
 * y = 2 => 0010
 * x ^ y => 0110 => 6
 *
 * x ^ x => 0000 => 0
 *
 * x ^ 0 => x
 * x ^ 0 => 0100 * 0000 => 0100 => 4 =>
 *
 * 0 ^ 0 => 0000 => 0
 */

// use `x ^ x => 0`
// use `x ^ 0 => x`
// use `0 ^ 0 => 0`

/** Example (1)
 * nums = [2, 2, 1]
 * 2 ^ 2 ^ 1 => 0 ^ 1 => 1
 */

/** Example (2)
 * nums = [4, 1, 2, 1, 2]
 * 4 ^ 1 ^ 2 ^ 1 ^ 2 => 4 ^ 1 ^ 1 ^ 2 ^ 2 => 4 ^ 0 ^ 0 => 4 ^ 0 => 4
 */
