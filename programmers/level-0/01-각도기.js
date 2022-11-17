function solution(angle) {
  // if (angle > 0 && angle < 90) {
  //     return 1
  // } else if (angle === 90) {
  // return 2
  // } else if (angle > 90 && angle < 180) {
  //     return 3
  // } else if (angle === 180) {
  //     return 4
  // }

  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
  // return [0, 90, 91, 180].filter(x => angle>=x).length;
}

console.log(solution(70)); // 1
console.log(solution(90)); // 2
console.log(solution(110)); // 3
console.log(solution(180)); // 4
