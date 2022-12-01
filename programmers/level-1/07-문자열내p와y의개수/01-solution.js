function solution(s) {
  let countP = 0;
  let countY = 0;
  [...s.toLowerCase()].forEach((char) => {
    if (char === "p") countP++;
    if (char === "y") countY++;
  });

  return countP === countY;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
