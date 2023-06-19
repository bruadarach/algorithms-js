/*
 자연수가 들어있는 배열 arr가 매개변수로 주어집니다. 
 배열 arr안의 숫자들 중에서 앞에 있는 숫자들부터 뒤에 중복되어 나타나는 숫자들 중복 횟수를 
 계산해서 배열로 return 하도록 solution 함수를 완성해주세요. 
 만약 중복되는 숫자가 없다면 배열에 -1을 채워서 return 하세요.
*/

function itemCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 5];

console.log(itemCommon(arr1, arr2)); // true

let array1 = [1, 3, 5];
let array2 = [2, 4, 6];

console.log(itemCommon(array1, array2)); // false

// time complexity : O(n)
