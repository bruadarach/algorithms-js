function solution(cipher, code) {
  //   let result = "";
  //   for (let i = 1; i <= cipher.length / code; i++) {
  //     result += cipher[i * code - 1];
  //   }
  //   return result;

  let result = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    result += cipher[i];
  }
  return result;
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); // "attack"
console.log(solution("pfqallllabwaoclk", 2)); // "fallback"
