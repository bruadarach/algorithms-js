function solution(arr1, arr2) {
  //   let result = [];
  //   let temp = [];
  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr1[i].length; j++) {
  //       temp.push(arr1[i][j] + arr2[i][j]);
  //     }
  //     result.push(temp);
  //     temp = [];
  //   }
  //   return result;

  return arr1.map((arr, i) => arr.map((num, j) => num + arr2[i][j]));
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4,6],[7,9]]

console.log(solution([[1], [2]], [[3], [4]])); // [[4],[6]]
