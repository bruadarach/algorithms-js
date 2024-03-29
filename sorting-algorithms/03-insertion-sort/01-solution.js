// Big O: O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
}

const arr = [8, 20, -2, -4, -6];
insertionSort(arr);
console.log(arr); // [-6, -4, -2, 8, 20]
