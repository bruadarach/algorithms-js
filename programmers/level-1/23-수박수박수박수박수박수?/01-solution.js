function solution(n) {
  //   return n % 2 === 0
  //     ? "수박".repeat(Math.floor(n / 2))
  //     : "수박".repeat(Math.floor(n / 2)) + "수";

  return "수박".repeat(n / 2) + (n % 2 !== 0 ? "수" : "");
}

console.log(solution(3)); // '수박수'
console.log(solution(4)); // '수박수박'
