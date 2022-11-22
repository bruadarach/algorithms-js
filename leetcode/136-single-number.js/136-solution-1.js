/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // require: O(n) time complexity, O(1) space complexity

  // this solution : O(n) time complexity, O(n) space complexity
  // count values and return only 1 count

  let map = {};

  for (let i = 0; i < nums.length; i++) {
    // if (!map[nums[i]]) {
    //   map[nums[i]] = 1;
    // } else {
    //   map[nums[i]] += 1;
    // }

    //map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;

    map[nums[i]] = (map[nums[i]] || 0) + 1;
    console.log(map);
    /*
    논리합(||)의 경우
    || 의 경우, 둘 중 하나만 true면 true로 평가되므로 왼쪽 피연산자가 true이면 바로 true를 반환한다.

    true || false; // true(오른쪽의 false는 볼 것도 없이, 왼쪽의 true 반환)
    true || true; // true(오른쪽의 true는 볼 것도 없이, 왼쪽의 true 반환)
    false || true; // true (오른쪽 값이 반환된다)
    false || false; // false (오른쪽 값이 반환된다)
    false || "banana"; // "banana"
    "apple" || "banana"; // "apple"
    */
  }

  for (let j = 0; j < nums.length; j++) {
    if (map[nums[j]] == 1) {
      return nums[j];
    }
  }
};

var nums = [1];
console.log(singleNumber(nums)); // 1

var nums = [2, 2, 1];
console.log(singleNumber(nums)); // 1

var nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // 4
