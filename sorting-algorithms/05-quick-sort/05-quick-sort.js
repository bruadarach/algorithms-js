// use the last element as the pivot
// not in-place

function quickSort(array) {
  // edge case
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];
  //   for (let i = 0; i < array.length - 1; i++) {
  //     if (array[i] < pivot) {
  //       leftArr.push(array[i]);
  //     } else {
  //       rightArr.push(array[i]);
  //     }
  //   }

  for (const el of array.slice(0, array.length - 1)) {
    // if (el < pivot) {
    //   leftArr.push(el);
    // } else {
    //   rightArr.push(el);
    // }
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [4, 6, 7, 1, 2, 5, 3, -1, -2, 0];
console.log(quickSort(arr)); // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
console.log(arr); // [4, 6, 7, 1, 2, 5, 3, -1, -2, 0]
