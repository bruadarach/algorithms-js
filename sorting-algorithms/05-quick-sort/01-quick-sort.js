/* Big O */
// Worst case (when the array is already sorted): O(n^2)
// Average case: O(n log n)

// use the last element as the pivot
// not in-place

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [5, 3, 4, 1, 2];
console.log(quickSort(arr)); // [1, 2, 3, 4, 5]
console.log(arr); // [ 5, 3, 4, 1, 2 ]
