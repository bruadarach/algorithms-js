function solution(str1, str2) {
  return str1.indexOf(str2) !== -1 ? 1 : 2;
  // return str1.includes(str2) ? 1 : 2;
  // return str1.split(str2).length > 1 ? 1 : 2
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); //
console.log(solution("ppprrrogrammers", "pppp")); //2
