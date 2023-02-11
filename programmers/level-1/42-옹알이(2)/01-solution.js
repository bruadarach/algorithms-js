function solution(babbling) {
  const possible = ["aya", "ye", "woo", "ma"];
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < possible.length; j++) {
      babbling[i] = babbling[i].replace(possible[j], "1");
    }
  }
  console.log(babbling);
  return babbling.filter((el) => el.replaceAll("1", "").length === 0).length;
}
console.log(solution(["aya", "yee", "u", "maa"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2
console.log(solution(["ayayeaya"])); // 1

/*
문제 조건 중 연속해서 같은 발음을 하는 것을 어려워 하는 것
즉, 연속하지 않고 중복(반복)하여 같은 단어를 사용할 수 있습니다.
ex) aya + ye + aya ← 가능합니다.
*/
