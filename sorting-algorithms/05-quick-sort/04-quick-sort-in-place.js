// use the first element as the pivot
// in-place

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

function quickSort(arr, left = 0, right = arr.length - 1) {
  // RangeError: Maximum call stack size exceeded
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
    return arr; // RangeError: Maximum call stack size exceeded
  }
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

console.log(arr);
