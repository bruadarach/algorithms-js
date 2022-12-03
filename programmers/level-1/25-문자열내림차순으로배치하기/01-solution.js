function solution(s) {
  //   let lowercase = "";
  //   let uppercase = "";

  //   [...s].forEach((ele) =>
  //     ele === ele.toLowerCase() ? (lowercase += ele) : (uppercase += ele)
  //   );

  //   return (
  //     [...lowercase].sort((a, b) => b.localeCompare(a)).join("") +
  //     [...uppercase].sort((a, b) => b.localeCompare(a)).join("")
  //   );

  return [...s].sort().reverse().join("");
}

console.log(solution("Zbcdefg")); // "gfedcbZ"
