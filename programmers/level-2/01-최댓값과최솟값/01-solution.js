function solution(s) {
  /* a `String` of numbers => an `Array` of numbers 
  // 1. console.log(s.split(" ").map((i) => Number(i)));

  // 2. console.log(s.split(" ").map(Number));

  // 3. console.log(Array.from(s.split(" "), Number));
  */

  const arr = Array.from(s.split(" "), Number);
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

console.log(solution("1 2 3 4")); // "1 4"
console.log(solution("-1 -2 -3 -4")); // "-4 -1"
console.log(solution("-1 -1")); // "-1 -1"
