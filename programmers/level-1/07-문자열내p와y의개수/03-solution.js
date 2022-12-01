function solution(s) {
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
