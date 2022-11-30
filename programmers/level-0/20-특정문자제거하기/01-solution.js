function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

console.log(solution("abcdef", "f")); // "abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"
