function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

console.log(solution([1, 2, 3, 4, 5])); // 20
console.log(solution([0, 31, 24, 10, 1, 9])); // 744
