// 2. 주어진 수의 제곱근까지만 순회하면서 확인하기

function solution(n) {
  // Set 객체를 활용하여 중복 추가된 약수 제거
  const result = new Set();

  // 1) 제곱근까지만 순회하면서 확인
  // n의 약수 중 가장 큰 수는 n의 제곱근을 넘어가지 않기 때문
  // Math.sqrt(24) = 4.898979485566356
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.add(i);
      // 2) 제곱근까지 순회하는 경우, n/i의 몫도 약수이므로 추가
      result.add(n / i);
    }
  }

  return [...result].sort((a, b) => a - b);
}

console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29)); // [1, 29]
console.log(solution(1));

// time complexity: O(√n)
// space complexity: O(√n)
