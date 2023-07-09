function mergeSort(array) {
  if (array.length === 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    const combined = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        combined.push(left.shift());
      } else {
        combined.push(right.shift());
      }
    }
    return [...combined, ...left, ...right];
  }
}

const arr = [8, 4, 5, 7, 1, 3, 6, 2];
console.log(mergeSort(arr)); // [1, 2, 3, 4,5, 6, 7, 8]
console.log(arr); // [8, 4, 5, 7, 1, 3, 6, 2];

// big O of merge sort
// space complexity: O(n)
// time complexity - best case O(n log n)
// time complexity - worst case O(n log n)
// time complexity - average case O(n log n)
