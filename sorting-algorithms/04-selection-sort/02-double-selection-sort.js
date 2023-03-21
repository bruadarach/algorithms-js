function doubleSelectionSort() {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    min = start;
    max = end;

    for (let i = start; i <= end; i++) {
      if (arr[i] < arr[min]) {
        min = i;
      }
      if (arr[i] > arr[max]) {
        max = i;
      }
    }

    if (start !== min) {
      [arr[start], arr[min]] = [arr[min], arr[start]];
    }

    // Important
    if (max === start) {
      max = min;
    }

    if (end !== max) {
      [arr[end], arr[max]] = [arr[max], arr[end]];
    }

    /* Wrong Code
    if (start !== min) {
      [arr[start], arr[min]] = [arr[min], arr[start]];
    }

    if (end !== max) {
      [arr[end], arr[max]] = [arr[max], arr[end]];
    }
    */

    start++;
    end--;
  }
}

const arr = [5, 3, 4, 1, 2];
doubleSelectionSort(arr); // [1, 2, 3, 4, 5]
console.log(arr);
