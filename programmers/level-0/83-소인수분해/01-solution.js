function solution(n) {
  let result = [];
  let i = 2;

  while (n >= 2) {
    if (n % i === 0) {
      result.push(i);
      n /= i;
    } else {
      i++;
    }
  }

  return [...new Set(result)];
}

console.log(solution(12)); // [2, 3]
console.log(solution(7)); // [7]
console.log(solution(420)); // [2, 3, 5, 7]
