# **Stack: Sort Stack**

Implement a function called **`sortStack()`** that takes a stack of integers as input and sorts the stack in ascending order (with the smallest element on top) using an additional temporary stack.

<br>

## Input:

- A Stack object **`stack`** containing integer values.

<br>

## Output:

- The function should modify the original input **`stack`**, sorting its elements in ascending order.

<br>

## Constraints:

- You must use the provided Stack class to store and manipulate the elements.
- You cannot use any other data structures or built-in sorting methods for this task.

<br>

## Function Signature:

```jsx
function sortStack(stack) {
  // Your implementation goes here
}
```

<br>

## Example 1:

Suppose you have a Stack object, **`stack`**, with the following values:

[5, 3, 1, 4, 2]

After calling the **`sortStack()`** function:

```jsx
sortStack(stack);
```

The **`stack`** should now have the following values:

[5, 4, 3, 2, 1]

<br>

## Example 2:

Suppose you have a Stack object, **`stack`**, with the following values:

[-3, 0, 7, 1, -2]

After calling the **`sortStack()`** function:

```jsx
sortStack(stack);
```

The **`stack`** should now have the following values:

[7, 1, 0, -2, -3]
