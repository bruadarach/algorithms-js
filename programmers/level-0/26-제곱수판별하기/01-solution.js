function solution(n) {
  num = 1;

  while (true) {
    if (num * num === n) return 1;
    else if (num * num < n) num++;
    else if (num * num > n) return 2;
  }
}

console.log(solution(144)); // 1
console.log(solution(976)); // 2
