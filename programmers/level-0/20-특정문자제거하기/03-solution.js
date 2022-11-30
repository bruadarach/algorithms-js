function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

console.log(solution("abcdef", "f")); // "abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"
