function solution(answers) {
  const fisrtStudent = [1, 2, 3, 4, 5];
  const secondStudent = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdStudent = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const studentAnswers = [
    answers.filter(
      (answer, idx) => answer === fisrtStudent[idx % fisrtStudent.length]
    ).length,
    answers.filter(
      (answer, idx) => answer === secondStudent[idx % secondStudent.length]
    ).length,
    answers.filter(
      (answer, idx) => answer === thirdStudent[idx % thirdStudent.length]
    ).length,
  ];

  const max = Math.max(...studentAnswers);

  return studentAnswers.reduce((acc, cur, idx) => {
    if (cur === max) {
      acc.push(idx + 1);
    }
    return acc;
  }, []);
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); //	[1,2,3]
