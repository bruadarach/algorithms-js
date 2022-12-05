function solution(s) {
  return s
    .split(" ")
    .map((v, i) =>
      [...v]
        .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
