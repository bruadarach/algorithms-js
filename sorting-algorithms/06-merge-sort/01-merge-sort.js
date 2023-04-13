function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  // divide in the middle till the array has only one element
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  //   return sortedArr.concat(leftArr, rightArr);
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 4, 5, 7, 1, 3, 6, 2];
console.log(mergeSort(arr)); // [1, 2, 3, 4,5, 6, 7, 8]
console.log(arr); // [8, 4, 5, 7, 1, 3, 6, 2];
