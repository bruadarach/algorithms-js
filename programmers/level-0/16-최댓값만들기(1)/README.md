## 문제 설명 [(link)](https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript)

정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

<br>

## 제한사항

- 0 ≤ numbers의 원소 ≤ 10,000
- 2 ≤ numbers의 길이 ≤ 100

<br>

## 입출력 예

| numbers               | result |
| --------------------- | ------ |
| [1, 2, 3, 4, 5]       | 20     |
| [0, 31, 24, 10, 1, 9] | 744    |

<br>

## 입출력 예 설명

<br>

### 입출력 예 #1

> 두 수의 곱중 최댓값은 4 \* 5 = 20 입니다.

<br>

### 입출력 예 #1

> 두 수의 곱중 최댓값은 31 \* 24 = 744 입니다.

<br>

## 노트

> remove an element in Array

- use `indexOf()` & `splice()`

```js
let index = array.indexOf(item);
if (index !== -1) {
  array.splice(index, 1);
}
```

- use `filter()`

```js
array.filter((ele) => ele !== "value");
```

<br>

> find the maximum number

- Math.max

```js
Math.max(1, 2, 3);
```

```js
let array = [1, 2, 3];
Math.max(...array);
```
