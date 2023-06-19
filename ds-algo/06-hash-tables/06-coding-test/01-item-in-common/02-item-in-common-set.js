// use an object

function itemCommon(arr1, arr2) {
  let set = new Set(arr1);
  for (let item of arr2) {
    if (set.has(item)) return true;
  }
  return false;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 5];

console.log(itemCommon(arr1, arr2)); // true

let array1 = [1, 3, 5];
let array2 = [2, 4, 6];

console.log(itemCommon(array1, array2)); // false

// time complexity : O(n)
