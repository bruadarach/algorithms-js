function solution(n) {
  i = 1;
  while ((6 * i) % n !== 0) i++;
  return i;
}

console.log(solution(6)); // 1
console.log(solution(10)); // 5
console.log(solution(4)); // 2
