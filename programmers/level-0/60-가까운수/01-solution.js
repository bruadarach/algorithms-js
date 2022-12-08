function solution(array, n) {
  array = [...array, n].sort((a, b) => a - b);
  const idx = [...array, n].sort((a, b) => a - b).indexOf(n);

  if (idx === array.length - 1) return array[array.length - 2];
  if (idx === 0) return array[1];

  return Math.abs(n - array[idx - 1]) > Math.abs(n - array[idx + 1])
    ? array[idx + 1]
    : array[idx - 1];
}

console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12
