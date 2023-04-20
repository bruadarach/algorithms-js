/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let used = new Array(nums.length).fill(false);
  let path = [];
  dfs(nums, 0, path, used, result);
  return result;
};

function dfs(nums, depth, path, used, result) {
  if (depth === nums.length) {
    result.push(path.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      path.push(nums[i]);
      used[i] = true;
      dfs(nums, depth + 1, path, used, result);
      path.pop();
      used[i] = false;
    }
  }
}

nums = [1, 2, 3];
console.log(permute(nums));

nums = [0, 1];
console.log(permute(nums));

nums = [1];
console.log(permute(nums));
