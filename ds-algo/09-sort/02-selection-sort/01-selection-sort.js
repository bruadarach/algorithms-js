function selectionSort(array) {
  let min;

  for (let i = 0; i < array.length - 1; i++) {
    min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    if (min !== i) [array[i], array[min]] = [array[min], array[i]];
  }
  return array;
}

console.log(selectionSort([5, 3, 4, 1, 2])); // [ 1, 2, 3, 4, 5 ]

// big O of selection sort
// best case: O(n^2) - when the array is already sorted
// worst case: O(n^2) - when the array is sorted in reverse order
// average case: O(n^2) - when the array is not sorted
// space complexity: O(1) - constant space
