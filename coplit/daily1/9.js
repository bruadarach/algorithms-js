function ABCheck(str) {
  if (str === undefined) {
    return false;
  }

  str = str.toLowerCase();

  for (let i = 4; i < str.length; i++) {
    if (
      (str[i] === "a" && str[i - 4] === "b") ||
      (str[i] === "b" && str[i - 4] === "a")
    ) {
      return true;
    }
  }

  return false;
}

let output = ABCheck("lane Borrowed");
console.log(output); // --> true
