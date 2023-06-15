# **Stack: Parentheses Balanced**

Implement a function called **`isBalancedParentheses()`** that checks if a given string containing parentheses is balanced or not.

<br>

## Input:

- A string **`parentheses`**.

<br>

## Output:

- The function should return a boolean value, **`true`** if the input string contains balanced parentheses, and **`false`** if not.

<br>

## Constraints:

- You must use the provided Stack class to check if the parentheses are balanced.
- You cannot use built-in string manipulation methods for this task.

<br>

## Function Signature:

```jsx
function isBalancedParentheses(parentheses) {
  // Your implementation goes here
}
```

<br>

## Example 1:

```jsx
const input = "(()())";
const output = isBalancedParentheses(input);
```

The **`output`** should be **`true`**, as the input string contains balanced parentheses.

<br>

## Example 2:

```jsx
const input = "(()";
const output = isBalancedParentheses(input);
```

The **`output`** should be **`false`**, as the input string contains unbalanced parentheses.

<br>

## Example 3:

```jsx
const input = ")(";
const output = isBalancedParentheses(input);
```

The **`output`** should be **`false`**, as the input string contains unbalanced parentheses.
