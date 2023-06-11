# **LL: Find Kth Node From End**

Implement a member function called **`findKthFromEnd(k)`** that finds and returns the kth node from the end of the linked list.

**Note: this `LinkedList` implementation does not have a `length` member variable.**

<br>

## Output:

- Return the kth node from the end of the linked list.
- If the value of **`k`** is greater than or equal to the number of nodes in the list, return **`null`**.

<br>

## Constraints:

- You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
- You can only traverse the linked list once.

<br>

## Example 1:

Suppose you have a LinkedList object, list, with the following values:

1 -> 2 -> 3 -> 4 -> 5

After calling the **`findKthFromEnd(2)`** function:

`1. let kthNode = list.findKthFromEnd(2);`

The kthNode should have the value 4.

<br>

## Example 2:

Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the **`findKthFromEnd(4)`** function:

`1. let kthNode = list.findKthFromEnd(4);`

The kth Node should have the value 3.
