// 2. 주어진 수의 절반을 대상으로만 확인하기
// 약수는 본인을 제외하고 n/2 보다 클 수 없기 때문에 절반값까지만 체크
function solution(n) {
  let result = [1];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) result.push(i);
  }
  return [...result, n];
}

console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29)); // [1, 29]
