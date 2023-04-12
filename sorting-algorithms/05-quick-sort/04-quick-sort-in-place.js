// use the first element as the pivot
// in-place

function quickSort(arr, left = 0, right = arr.length - 1) {
  // RangeError: Maximum call stack size exceeded
  // 3. therefore, let's add a condition to stop the recursion
  // 4. left and right are the indices of subarray, and it will be smaller and smaller until it becomes the same index, 0 and 0. //=> it means the subarray has only one element
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
    return arr; // 1. RangeError: Maximum call stack size exceeded // => stack overflow
    // 2. reasons of stack overflow : no base case, no return statement, no exit condition or recursion call
  }
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      // console.log(arr);
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  // console.log(arr);
  return swapIdx;
}

const arr = [4, 6, 9, 1, 2, 5, 3];
console.log(quickSort(arr)); // [1, 2, 3, 4, 5, 6, 9]
// [ 4, 6, 9, 1, 2, 5, 3 ] // 1. find the pivot : '4'
// [ 3, 2, 1, 4, 6, 9. 5 ] // 2. move all the values less than the pivot to the left of the pivot
//            4
//     3,2,1      6,9,5
//         3        6
//      2,1        5  9
//        2
//      1

console.log(arr); // [1, 2, 3, 4, 5, 6, 9]

/* summary without comments
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start]; // arr[0] = '4'
  let swapIdx = start; // swapIdx = 0
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
    return arr; 
  }
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(pivot(arr)); // 3
console.log(arr);
*/
