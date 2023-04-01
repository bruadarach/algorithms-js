// the faster solution

function solution(a, b) {
  let days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]; // 2016년 1월 1일은 금요일이므로 시작 요일을 금요일로 설정
  let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년은 2월이 29일
  let totalDate = b - 1; // 1월 1일은 0일이므로

  for (let i = 1; i < a; i++) {
    totalDate = totalDate + months[i - 1]; // index는 0부터 시작하므로
  }
  return days[totalDate % 7]; // 7로 나눈 나머지가 요일의 index
}

console.log(solution(1, 1)); // "FRI"
console.log(solution(5, 24)); // "TUE"
