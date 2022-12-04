function solution(progresses, speeds) {
  progresses = progresses.map((ele, idx) =>
    Math.ceil((100 - ele) / speeds[idx])
  );
  // [ 7, 3, 9 ]
  // [ 5, 10, 1, 1, 20, 1 ]

  let result = [];
  let temp = [progresses[0]];

  for (let i = 1; i < progresses.length; i++) {
    if (temp[0] >= progresses[i]) {
      temp.push(progresses[i]);
    } else {
      result.push(temp);
      temp = [progresses[i]];
    }
  }
  result.push(temp);
  return result.map((ele) => ele.length);
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
