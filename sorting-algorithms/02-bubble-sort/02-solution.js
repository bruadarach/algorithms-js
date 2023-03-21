// Big-O => O(n^2)

function bubbleSort(arr) {
  var noSwaps;
  //   for (let i = 0; i < arr.length; i++) {
  // for (let j = 0; j < arr.length; j++) {
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
}

const arr = [5, 3, 4, 1, 2];
bubbleSort(arr); // [1, 2, 3, 4, 5]
console.log(arr);
