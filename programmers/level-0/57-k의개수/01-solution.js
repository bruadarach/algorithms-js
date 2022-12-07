function solution(i, j, k) {
  let count = 0;
  for (i = i; i <= j; i++) {
    if (String(i).includes(String(k)))
      count += [...String(i)].filter((v) => v === String(k)).length;
  }
  return count;
}

console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0
