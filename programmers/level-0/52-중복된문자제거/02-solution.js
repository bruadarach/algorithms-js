function solution(my_string) {
  return [...new Set(my_string)].join("");
}

console.log(solution("people")); // "peol"
console.log(solution("We are the world")); // "We arthwold"
