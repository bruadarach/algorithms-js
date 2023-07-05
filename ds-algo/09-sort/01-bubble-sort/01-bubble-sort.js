// naive solution

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    console.log(array);
    // [ 3, 4, 1, 2, 5 ] // 0st iteration
    // [ 3, 1, 2, 4, 5 ] // 1st iteration
    // [ 1, 2, 3, 4, 5 ] // 2nd iteration
    // [ 1, 2, 3, 4, 5 ] // 3rd iteration
    // [ 1, 2, 3, 4, 5 ] // 4th iteration
    // => every turn, the largest number is bubbled up to the end
    // => so, we can reduce the number of iterations by 1 in next turn
  }
  return array;
}

console.log(bubbleSort([5, 3, 4, 1, 2])); // [ 1, 2, 3, 4, 5 ]
