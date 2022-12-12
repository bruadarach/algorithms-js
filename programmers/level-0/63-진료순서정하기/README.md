## 문제 설명 [(link)](https://school.programmers.co.kr/learn/courses/30/lessons/120835?language=javascript)

외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

<br>

## 제한사항

- 중복된 원소는 없습니다.
- 1 ≤ emergency의 길이 ≤ 10
- 1 ≤ emergency의 원소 ≤ 100

<br>

## 입출력 예

| emergency             | result                |
| --------------------- | --------------------- |
| [3, 76, 24]           | [3, 1, 2]             |
| [1, 2, 3, 4, 5, 6, 7] | [7, 6, 5, 4, 3, 2, 1] |
| [30, 10, 23, 6, 100]  | [2, 4, 3, 5, 1]       |

<br>

## 입출력 예 설명

<br>

### 입출력 예 #1

> emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.

<br>

### 입출력 예 #2

> emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.

<br>

### 입출력 예 #3

> emergency가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.

<br>

## 노트

`Array.sort()`

The sort() method sorts the elements of an array `in place` and returns the reference to the same array, now sorted.

### 자바스크립트의 데이터 유형

1. 원시 데이터 타입

   - 원시 타입은 복사 후 값을 변경해도 다른 변수에는 영향을 주지 않음
   - => 깊은 복사(Deep Copy): 조 주소를 공유X, 참조 공간도 복사

2. 참조형 데이터 타입

   - 참조형 데이터 타입은 복사 후 값을 변경하면 다른 변수에도 영향을 줌
   - => 얕은 복사(Shallow Copy): 참조 주소를 공유

<br>

### 배열 복사 방법 (얕은 복사)

: 단, 1 레벨(1차원 배열)에 대해서는 깊은 복사가 허용되나 2 레벨(2차원 배열)이상 부터는 깊은 복사가 되지 않습니다.

1. slice()

   - `array.slice()`

2. concat()

   - `[].concat(array);`

3. spread 연산자
   - `[...array]`
4. Array.from()
   - `Array.from(array)`

<br>

### 객체 복사 방법 (얕은 복사)

: 배열과 마찬가지로 1 레벨은 깊은 복사가 허용되나 2 레벨 부터는 깊은 복사가 되지 않습니다.

1. Object.assign()
   - `Object.assign({},object);`
2. spread 연산자
   - `{...object}`

<br>

### 깉은 복사 방법

1. 모든 깊이에 있는 객체까지 복사하는 `재귀 함수` 구현
   - (e.g) `cloneFunction(object)`
   - (단점) 직접 코드 구현해야 함.
2. `JSON` 사용
   - `JSON.parse(JSON.stringify(object))`
   - (단점) 모든 데이터가 복사되지 않거나, 타입이 변경되는 문제가 있음
   - (문제) 원본 객체와 복제된 객체의 date 프로퍼티의 데이터 타입이 일치하지 않는 문제가 발생함.
3. `lodash`의 `cloneDeep()` 사용
   - `_.cloneDeep(object)`
   - (단점) 1번의 단점을 커버해주지만, lodash 패키지가 설치되어 있어야 함.

<br>

## 참고

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- https://stackoverflow.com/questions/9592740/how-can-you-sort-an-array-without-mutating-the-original-array
- https://developer-talk.tistory.com/86
