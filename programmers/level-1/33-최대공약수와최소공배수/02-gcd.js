// 유클리드 호제법 (Euclidean algorithm) 사용
// 최대 공약수(Greatest Common Divisor)

function solution(num1, num2) {
  return num1 % num2 === 0 ? num2 : solution(num2, num1 % num2);
}

console.log(solution(16, 24)); // 8
