function solution(spell, dic) {
  return dic.filter((v) => {
    return (
      spell.filter((letter) => v.includes(letter) === true).length ===
      spell.length
    );
  }).length > 0
    ? 1
    : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); // 2
