/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let idx = m + n - 1;
  let idx1 = m - 1;
  let idx2 = n - 1;
  while (idx1 >= 0 && idx2 >= 0) {
    if (nums1[idx1] > nums2[idx2]) {
      nums1[idx] = nums1[idx1];
      idx1--;
    } else {
      nums1[idx] = nums2[idx2];
      idx2--;
    }
    idx--;
  }
  while (idx2 >= 0) {
    nums1[idx] = nums2[idx2];
    idx--;
    idx2--;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
