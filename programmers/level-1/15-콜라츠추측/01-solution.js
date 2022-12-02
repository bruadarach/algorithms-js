function solution(num) {
  if (num === 0) return 0;
  let count = 0;

  while (num !== 1 && count <= 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return count < 500 ? count : -1;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
