function solution(numbers, direction) {
  //   if (direction === "right") {
  //     temp = numbers.pop();
  //     numbers.unshift(temp);
  //     return numbers;
  //   } else {
  //     temp = numbers.shift();
  //     numbers.push(temp);
  //     return numbers;
  //   }

  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());

  return numbers;
}

console.log(solution([1, 2, 3], "right")); // [3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left")); // [455, 6, 4, -1, 45, 6, 4]
