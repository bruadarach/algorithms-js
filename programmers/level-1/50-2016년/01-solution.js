// the faster solution

function solution(a, b) {
  let days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년은 2월이 29일
  let plusDay = b - 1; // index는 0부터 시작하므로

  for (let i = 1; i < a; i++) {
    plusDay = plusDay + months[i - 1]; // 1월부터 a-1월까지의 일수를 더함
  }
  return days[plusDay % 7]; // 7로 나눈 나머지가 요일의 index
}

console.log(solution(5, 24)); // "TUE"
