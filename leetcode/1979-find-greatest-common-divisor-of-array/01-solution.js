/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let smallestNum = sortedNums[0];
  let largestNum = sortedNums[sortedNums.length - 1];

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  return gcd(smallestNum, largestNum);
};

console.log(findGCD([2, 5, 6, 9, 10])); // 2
console.log(findGCD([7, 5, 6, 8, 3])); // 1
console.log(findGCD([3, 3])); // 3
