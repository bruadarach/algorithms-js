function solution(my_string, letter) {
  return [...my_string].filter((char) => char !== letter).join("");

  //   return Array.from(my_string)
  //     .filter((char) => char !== letter)
  //     .join("");
}

console.log(solution("abcdef", "f")); // "abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"
