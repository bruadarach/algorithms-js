function solution(A, B) {
  if (A === B) return 0;
  count = 1;
  for (let i = A.length - 1; i >= 0; i--) {
    if (A.slice(i) + A.slice(0, i) === B) return count;
    count++;
  }
  return -1;
}

console.log(solution("hello", "ohell")); // 1
console.log(solution("apple", "elppa")); // -1
