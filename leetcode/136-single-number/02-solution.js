/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {};

  if (nums.length === 1) return nums[0];

  for (const num of nums) {
    //map[num] = map[num] ? map[num] + 1 : 1;
    map[num] = map[num] + 1 || 1;
  }

  for (const key in map) {
    if (map[key] === 1) return Number(key);
  }
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

// time complexity: O(n)
// space complexity: O(n)
