function solution(a, b) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; // 2023년 1월 1일은 일요일이므로 시작 요일을 일요일로 설정
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 2023년은 윤년이 아님
  let totalDate = b - 1; // 1월 1일은 0일이므로

  for (let i = 1; i < a; i++) {
    totalDate = totalDate + months[i - 1]; // index는 0부터 시작하므로
  }
  return days[totalDate % 7]; // 7로 나눈 나머지가 요일의 index
}

console.log(solution(1, 1)); // "SUN"
console.log(solution(4, 2)); // "SUN"
console.log(solution(5, 1)); // "MON"
console.log(solution(12, 25)); // "MON"
