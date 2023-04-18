function computeWhenDouble(interestRate) {
  let rate = 1 + interestRate / 100;
  let principal = 1;
  let year = 0;
  while (principal < 2) {
    principal = principal * rate;
    year++;
  }
  return year;
}

let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8
