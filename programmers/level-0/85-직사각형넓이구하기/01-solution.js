function solution(dots) {
  const x = dots.map((dot) => dot[0]);
  const y = dots.map((dot) => dot[1]);

  return (
    Math.abs(Math.max(...x) - Math.min(...x)) *
    Math.abs(Math.max(...y) - Math.min(...y))
  );
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); // 1
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); // 4
