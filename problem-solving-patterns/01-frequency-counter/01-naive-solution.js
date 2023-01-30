/*  Time Complexity : O(N^2)

    - `for` * `**indexOf**` = O(N^2)
        - `indexOf` would potentially iterate the entire array, which is a nested loop.
        - We always try to avoid nested loops.
*/

function same(arr1, arr2) {
  if (arr1.length !== arr1.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
