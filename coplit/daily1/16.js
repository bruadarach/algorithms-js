function isIsogram(str) {
  if (str.length === 0) {
    return true;
  }

  let cache = {};
  let strLowered = str.toLowerCase();

  for (let i = 0; i < strLowered.length; i++) {
    if (cache[strLowered[i]]) {
      return false;
    }
    cache[strLowered[i]] = true;
  }

  return true;
}

let output = isIsogram("aba");
console.log(output); // false

output = isIsogram("Dermatoglyphics");
console.log(output); // true

output = isIsogram("moOse");
console.log(output); // false
