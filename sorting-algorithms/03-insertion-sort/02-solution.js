// Big O: O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
}

const arr = [3, 2, 1, 5, 4];
insertionSort(arr);
console.log(arr); // [1,2,3,4,5]
