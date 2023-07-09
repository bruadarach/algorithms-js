// 1. breaks arrays in half
// 2. base case: when array.length is 1
// 3. use merge() to put arrays together

function mergeSort(array) {
  if (array.length === 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }

  return combined;
}

console.log(mergeSort([5, 3, 4, 1, 2, 7, 8, 6]));
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]

// big O of merge sort
// space complexity: O(n)
// time complexity - best case O(n log n)
// time complexity - worst case O(n log n)
// time complexity - average case O(n log n)

// breaking apart the array into smaller arrays is O(log n)
// merging the arrays is O(n)
