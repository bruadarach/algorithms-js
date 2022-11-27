function solution(numbers, num1, num2) {
  //  return numbers.slice(num1, num2 + 1);

  // splice(start, deleteCount, item1, item2, itemN)
  return numbers.splice(num1, num2 - num1 + 1);
}

console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [2,3,4] // numbers.splice(1, 3)
console.log(solution([1, 3, 5], 1, 2)); // [3,5]
