function solution(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12
