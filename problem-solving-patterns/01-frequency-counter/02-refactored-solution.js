/*  Time Complexity : O(N)

    - `two loops` is vastly better than `two nested loops`.
    - `3 for loops`, therefore `O(3N) => O(N)`
        - Instead of looping over the first array, and then checking for each value in a sub loop of the second array, 
        - we can loop over each array one time individually.

    => 3 for loops, therefore O(3N) => O(N)
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // (undefined || 0) === 0
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }

  console.log(frequencyCounter1); // { '1': 1, '2': 1, '3': 1 }
  console.log(frequencyCounter2); // { '1': 1, '4': 1, '9': 1 }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
