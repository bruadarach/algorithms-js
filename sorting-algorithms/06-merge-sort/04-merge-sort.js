function merge(leftArr, rightArr) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);
  let leftArr = array.slice(0, middleIndex);
  let rightArr = array.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([1, 4, 2, 8, 365, 123, 50, -1, -2, 0])); // [-2, -1, 0, 1, 2, 4, 8, 50, 123, 365]
