function arrSum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  return head + arrSum(tail);
}

let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1
