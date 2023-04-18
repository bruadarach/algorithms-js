function arrLength(arr) {
  if (arr.isEmpty()) {
    return 0;
  }

  // const [head, ...tail] = arr;
  const tail = arr.slice(1);
  return 1 + arrLength(tail);
}

let output = arrLength([1, -2, 1, 3]);
console.log(output); // --> 4
