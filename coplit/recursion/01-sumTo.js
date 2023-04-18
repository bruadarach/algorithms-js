function sumTo(num) {
  if (num <= 1) {
    return num;
  }

  return num + sumTo(num - 1);
}

let output = sumTo(10);
console.log(output); // --> 55
