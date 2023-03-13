// faster than 01-solution.js

function solution(brown, yellow) {
  const total = brown + yellow;

  // 가로, 세로 최소 길이 시작 => [3,3]
  for (let i = 3; i <= total; i++) {
    // x(가로) * y(세로) 쌍 찾기
    if (total % i === 0) {
      // (x-2) * (y-2) === yellow
      if ((i - 2) * (total / i - 2) === yellow) {
        return [i, total / i].reverse();
      }
    }
  }
}

console.log(solution(10, 2)); // [4, 3] // [가로(항상 세로보다 크다), 세로]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // 	[8, 6]
