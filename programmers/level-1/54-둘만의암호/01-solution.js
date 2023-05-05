function solution(s, skip, index) {
  let answer = "";
  const regex = new RegExp(`[${skip}]`, "g");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".replaceAll(regex, "");

  for (const char of s) {
    answer += alphabet[(alphabet.indexOf(char) + index) % alphabet.length];
  }
  return answer;
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
