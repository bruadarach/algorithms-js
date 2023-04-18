function powerOfTwo(num) {
  if (num === 1) {
    return true;
  }

  if (num % 2) {
    return false;
  }

  let powered = 2;
  while (powered < num) {
    powered = powered * 2;
  }

  return powered === num;
}

let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false
