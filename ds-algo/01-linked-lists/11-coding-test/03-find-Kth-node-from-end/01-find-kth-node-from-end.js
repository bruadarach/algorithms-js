class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  findKthFromEnd(k) {
    // Initialize slow and fast pointers at head
    let slow = this.head;
    let fast = this.head;

    // Move fast pointer k steps ahead
    // Find all null cases
    for (let i = 0; i < k; i++) {
      // If fast reaches null, k is out of range
      if (fast === null) return null;
      fast = fast.next;
    }

    // Iterate until fast reaches the end
    while (fast !== null) {
      // Move slow and fast pointers one step
      slow = slow.next;
      fast = fast.next;
    }

    // When fast reaches end, slow is at kth from end
    return slow;
  }
}

/* subject test 1 : find kth node from the end in a linked list */
let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
  console.log(kthNodeFromEnd.value);
} else {
  console.log("Not found");
}

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/

/* subject test 2 : k is larger than the length of the linked list */
const k2 = 6;
const kthNodeFromEnd2 = myLinkedList.findKthFromEnd(k2);
console.log(kthNodeFromEnd2); // null

/* subject test 3 : linked list has only one node */
myLinkedList.makeEmpty();
myLinkedList.push(1);
const k3 = 1;
const kthNodeFromEnd3 = myLinkedList.findKthFromEnd(k3);
console.log(kthNodeFromEnd3.value); // 1

/* subject test 4 : linked list is empty */
myLinkedList.makeEmpty();
const k4 = 1;
const kthNodeFromEnd4 = myLinkedList.findKthFromEnd(k4);
console.log(kthNodeFromEnd4); // null

// time complexity: O(n)
// space complexity: O(1)