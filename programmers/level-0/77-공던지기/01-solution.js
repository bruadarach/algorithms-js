function solution(numbers, k) {
  let pitcher = 1;

  for (let i = 0; i < k - 1; i++) {
    pitcher += 2;
    if (pitcher > numbers.length) {
      pitcher -= numbers.length;
    }
  }
  return pitcher;
}

console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(solution([1, 2, 3], 3)); // 2
