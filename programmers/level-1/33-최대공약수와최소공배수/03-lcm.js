// 유클리드 호제법 (Euclidean algorithm) 사용
// 최소 공배수 (Least Common Multiple)

function solution(num1, num2, gcd) {
  return (num1 * num2) / gcd;
}

console.log(solution(16, 24, 8)); // 48
