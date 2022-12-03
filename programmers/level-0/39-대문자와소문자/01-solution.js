function solution(my_string) {
  return [...my_string]
    .map((v, i) =>
      v === my_string[i].toLowerCase()
        ? my_string[i].toUpperCase()
        : my_string[i].toLowerCase()
    )
    .join("");
}

console.log(solution("cccCCC")); // "CCCccc"
console.log(solution("abCdEfghIJ")); // "ABcDeFGHij"
