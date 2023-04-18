function reverseArr(arr) {
  if (arr.length === 0) {
    return [];
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  return reverseArr(tail).concat(head);
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]
