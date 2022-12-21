function solution(sides) {
  const max = Math.max(...sides);
  const min = Math.min(...sides);

  count = 0;
  for (let i = 1; i <= max; i++) if (min + i > max) count++;
  for (let i = max + 1; i < max + min; i++) if (min + i > max) count++;

  return count;
}

console.log(solution([1, 2])); //1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13
