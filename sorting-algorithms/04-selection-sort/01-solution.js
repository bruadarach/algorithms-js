// Big O: O(n^2)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // if (i !== lowest) {
    //   let temp = arr[i];
    //   arr[i] = arr[lowest];
    //   arr[lowest] = temp;
    // }

    /* ES6 */
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}

const arr = [5, 3, 4, 1, 2];
selectionSort(arr); // [1, 2, 3, 4, 5]
console.log(arr);
