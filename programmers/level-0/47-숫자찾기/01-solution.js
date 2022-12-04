function solution(num, k) {
  return String(num).indexOf(String(k)) > -1
    ? Number(String(num).indexOf(String(k))) + 1
    : -1;
}

console.log(solution(29183, 1)); // 3
console.log(solution(232443, 4)); // 4
console.log(solution(123456, 7)); // -1
