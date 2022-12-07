function solution(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return [...s]
    .map((v) => {
      if (v === " ") return " ";

      if (v === v.toUpperCase()) {
        return upper[(upper.indexOf(v) + n) % upper.length];
      } else {
        return lower[(lower.indexOf(v) + n) % lower.length];
      }
    })
    .join("");
}

console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"
