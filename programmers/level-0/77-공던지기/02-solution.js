function solution(numbers, k) {
  let idx = 0;
  for (let i = 1; i < k; i++) {
    idx += 2;
    if (idx > numbers.length) {
      idx %= numbers.length;
    }
  }
  return numbers[idx];
}

console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(solution([1, 2, 3], 3)); // 2
