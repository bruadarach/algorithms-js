function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    //temp 변수는 현재 요소인 array[i]의 값을 임시로 저장
    let temp = array[i]; // 1 => 3
    // var j because we need to use j outside of the loop
    // j 변수는 현재 요소(array[i])의 이전 요소부터 시작하여 왼쪽으로 이동하며, 정렬된 부분의 요소들과 비교
    for (var j = i - 1; array[j] > temp && j >= 0; j--) {
      // if the previous element is greater than the current element, move the previous element to the next position
      // array[j] > temp 조건은 이전 요소가 현재 요소보다 큰지 확인합니다.
      // 만약 크다면, 이전 요소를 현재 위치(array[j+1])로 옮기고
      // j 값을 감소시켜서 왼쪽으로 계속 이동합니다.
      array[j + 1] = array[j];
      // [5, 5, 4, 1, 2] // 1st iteration

      // now j-- is working!
      // j = -1
    }
    // 내부 for 루프가 종료되면, temp 값을 이전 요소보다 작은 위치에 삽입합니다.
    // array[-1+1] = array[0] = temp = 3
    array[j + 1] = temp;
    // [3, 5, 4, 1, 2] // 1st iteration
  }
  return array;
}

console.log(insertionSort([5, 3, 4, 1, 2])); // [ 1, 2, 3, 4, 5 ]

// big O of insertion sort
// best case: O(n) - when the array is already (or almost) sorted
// worst case: O(n^2) - when the array is sorted in reverse order
// average case: O(n^2) - when the array is not sorted
// space complexity: O(1) - constant space
