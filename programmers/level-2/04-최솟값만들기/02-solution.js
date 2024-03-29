function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
