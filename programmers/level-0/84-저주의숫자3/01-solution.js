function solution(n) {
  let num = 1;
  let count = 1;
  while (count < n) {
    num++;
    if (num % 3 !== 0 && !String(num).includes("3")) count++;
  }
  return num;
}

console.log(solution(15)); // 25
console.log(solution(40)); // 76
