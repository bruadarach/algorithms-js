// 제곱근이 정수면 약수의 개수가 홀수이고, 제곱근이 정수가 아니면 약수의 개수가 짝수이다.
function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    Number.isInteger(Math.sqrt(i)) ? (result -= i) : (result += i);
  }
  return result;
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
