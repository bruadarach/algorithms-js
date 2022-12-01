function solution(s) {
  let count = 0;
  [...s.toLowerCase()].forEach((char) => {
    if (char === "p") count++;
    if (char === "y") count--;
  });

  return count === 0;
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
