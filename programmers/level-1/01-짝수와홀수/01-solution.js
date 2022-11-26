function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
  // return num % 2 ? "Odd" : "Even" // 0 === false
}

console.log(solution(3)); // 'Odd'
console.log(solution(4)); // 'Even'
console.log(solution(0)); // 'Even'
