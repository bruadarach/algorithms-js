function firstReverse(str) {
  return str.split("").reverse().join("");
}

let output = firstReverse("codestates");
console.log(output); // "setatsedoc"

output = firstReverse("I love codestates");
console.log(output); // "setatsedoc evol I"
