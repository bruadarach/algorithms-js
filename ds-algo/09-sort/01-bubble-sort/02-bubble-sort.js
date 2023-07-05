/*
    Optimization 1: Reduce the number of comparisons and swaps.

    - In each pass, the largest element "bubbles" to the end of the list, 
    so after each pass, the last element is sorted and no longer needs to be compared.
    
    - By reducing the range of elements to be compared in subsequent passes, 
    we can optimize the algorithm further.

    Optimization 2: Add a flag to check if any swaps were made in a pass.
    
    - After each pass through the list, if no swaps were made, 
    it means the list is already sorted, and we can terminate the algorithm.
    
    - This optimization helps reduce unnecessary iterations 
    when the list is already sorted or nearly sorted.
*/

function bubbleSort(array) {
  let swapped;

  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

console.log(bubbleSort([5, 3, 4, 1, 2])); // [ 1, 2, 3, 4, 5 ]

// big O of bubble sort
// best case: O(n) - when the array is already (or almost) sorted
// worst case: O(n^2) - when the array is sorted in reverse order
// average case: O(n^2) - when the array is not sorted
// space complexity: O(1) - constant space
