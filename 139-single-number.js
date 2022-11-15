/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // => require: O(n) time complexity, O(1) space complexity

  // (!) this solution : O(n) time complexity, O(n) space complexity
  //=> count values and return only 1 count

  const map = {};

  if (nums.length === 1) return nums[0];

  for (const num of nums) {
    if (map[num] === undefined) map[num] = 0;
    map[num]++;
  }

  for (const key in map) {
    if (map[key] === 1) return Number(key);
  }
};

var nums = [1];
console.log(singleNumber(nums)); // 1

var nums = [2, 2, 1];
console.log(singleNumber(nums)); // 1

var nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // 4
