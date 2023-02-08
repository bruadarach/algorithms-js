function solution(score) {
  //   const averageScores = score.map(
  //     (e) => e.reduce((cur, acc) => (acc += cur), 0) / 2
  //   );

  const averageScores = score.map((e) => (e[0] + e[1]) / 2);
  const sortedScores = [...averageScores].sort((a, b) => b - a);
  return averageScores.map((e) => sortedScores.indexOf(e) + 1);
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
); // [1, 2, 4, 3]
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
); // [4, 4, 6, 2, 2, 1, 7]
