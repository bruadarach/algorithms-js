# **Has Loop**

Implement a member function called **`hasLoop()`** that checks if the linked list has a loop or not.

<br>

## Output:

- Return **`true`** if the linked list has a loop.
- Return **`false`** if the linked list does not have a loop.

<br>

## Constraints:

- You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
- You can only traverse the linked list once.

<br>

### Example 1:

Suppose you have a LinkedList object, list, with the following values:

1 -> 2 -> 3 -> 4 -> 5, and no loop

After calling the **`hasLoop()`** function:

`1. let result = list.hasLoop();`

The result should be **`false`**.

<br>

### Example 2:

Now suppose you have a LinkedList object, list, with the following values:

1 -> 2 -> 3 -> 4 -> 5 -> 6, and a loop exists between nodes 6 and 3

After calling the **`hasLoop()`** function:

`1. let result = list.hasLoop();`

The result should be **`true`**.
