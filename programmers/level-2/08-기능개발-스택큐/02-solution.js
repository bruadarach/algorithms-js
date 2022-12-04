function solution(progresses, speeds) {
  progresses = progresses.map((ele, idx) =>
    Math.ceil((100 - ele) / speeds[idx])
  );

  let result = [];
  let maxNum = [progresses[0]];
  let count = 1; // add count!

  for (let i = 1; i < progresses.length; i++) {
    if (maxNum[0] >= progresses[i]) {
      count++;
    } else {
      result.push(count);
      count = 1;
      maxNum = [progresses[i]];
    }
  }
  result.push(count);
  return result; // change here!
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
