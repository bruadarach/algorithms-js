function solution(numbers) {
  let result = 1;
  result *= numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  result *= numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // 20
console.log(solution([0, 31, 24, 10, 1, 9])); // 744
