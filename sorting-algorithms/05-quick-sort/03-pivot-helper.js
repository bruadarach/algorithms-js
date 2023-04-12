// use the first element as the pivot
// in-place

// arr = [4, 8, 2, 1, 5, 7, 6, 3], start = 1, end  = 7
function pivot(arr, start = 0, end = arr.length - 1) {
  //   function swap(array, i, j) {
  //     let temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }

  // ES2015 Version
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  const pivot = arr[start]; // arr[0] = '4'
  let swapIdx = start; // swapIdx = 0
  for (let i = start + 1; i <= end; i++) {
    // i = 1, arr[1] = '8' // pivot '4' > '8' ? => No, not going to do anything.
    // i = 2, arr[2] = '2' // pivot '4' > '2' ? => Yes, swapIdx = 1, swap(arr, 1, 2) // [4, 2, 8, 1, 5, 7, 6, 3]
    // i = 3, arr[3] = '1' // pivot '4' > '1' ? => Yes, swapIdx = 2, swap(arr, 2, 3) // [4, 2, 1, 8, 5, 7, 6, 3]
    // i = 4, arr[4] = '5' // pivot '4' > '5' ? => No, not going to do anything.
    // i = 5, arr[5] = '7' // pivot '4' > '7' ? => No, not going to do anything.
    // i = 6, arr[6] = '6' // pivot '4' > '6' ? => No, not going to do anything.
    // i = 7, arr[7] = '3' // pivot '4' > '3' ? => Yes, swapIdx = 3, swap(arr, 3, 7) // [4, 2, 1, 3, 5, 7, 6, 8]
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      // [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      // console.log(arr);
    }
  }
  // if there's nothing less than the pivot '4', swap the pivot index with the swapIdx index
  // start = 0, swapIdx = 3 // [4, 2, 1, 3, 5, 7, 6, 8] //=> [3, 2, 1, 4, 5, 7, 6, 8]
  swap(arr, start, swapIdx);
  // [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  // console.log(arr);
  return swapIdx; // 3
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(pivot(arr)); // 3
console.log(arr);

// [ 4,2,8,1,5,7,6,3 ]
// [ 4,2,1,8,5,7,6,3 ]
// [ 4,2,1,3,5,7,6,8]

// [ 3,2,1,4,5,7,6,8 ] // now 4 is in th correct position

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

const arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(pivot(arr)); // 3
console.log(arr);
*/
