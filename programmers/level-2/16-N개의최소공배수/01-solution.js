function solution(arr) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
