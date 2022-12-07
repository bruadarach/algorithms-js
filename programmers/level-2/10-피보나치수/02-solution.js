// 런타임 에러
// 메모이제이션(Memoization)

function solution(n) {
  const memo = [0, 1];
  const memogenerator = (n) => {
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    if (memo[n] !== undefined) return memo[n];
    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = memogenerator(n - 1) + memogenerator(n - 2);
    return memo[n];
  };
  return memogenerator(n);
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
