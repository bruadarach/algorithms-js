function solution(babbling) {
  const possible = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < possible.length; j++) {
      babbling[i] = babbling[i].replaceAll(possible[j], "1");
    }
  }

  return babbling.filter((el) => el.replaceAll("1", "").length === 0).length;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
