function solution(x) {
  return (
    Number(x) % [...String(x)].reduce((acc, cur) => acc + Number(cur), 0) === 0
  );
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
