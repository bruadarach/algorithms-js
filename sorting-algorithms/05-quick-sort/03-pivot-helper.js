function pivot(arr, start = 0, end = arr.length - 1) {
  //   function swap(array, i, j) {
  //     let temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }

  // ES2015 Version
  // function swap(arr, idx1, idx2) {
  //   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  // }

  const pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      // swap(arr, swapIdx, i);
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      console.log(arr);
    }
  }
  // swap(arr, start, swapIdx);
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  console.log(arr);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3
// [ 4,2,8,1,5,7,6,3 ]
// [ 4,2,1,8,5,7,6,3 ]
// [ 4,2,1,3,5,7,6,8]

// [ 3,2,1,4,5,7,6,8 ] // now 4 is in th correct position
