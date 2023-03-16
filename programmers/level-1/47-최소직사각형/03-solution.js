function solution(sizes) {
  const rotated = sizes.map(([width, height]) =>
    width < height ? [height, width] : [width, height]
  );

  let maxSize = [0, 0];
  rotated.forEach(([width, height]) => {
    if (width > maxSize[0]) maxSize[0] = width;
    if (height > maxSize[1]) maxSize[1] = height;
  });
  return maxSize[0] * maxSize[1];
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); //4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); //120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); //133
