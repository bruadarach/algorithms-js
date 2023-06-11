// remove nth node from end of list and return its head

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

  removeNthFromEnd(k) {
    // Edge case: If the list is empty, there is nothing to remove
    if (this.head === null) return;

    // Create a dummy node and point it to the head of the list
    const dummy = new Node(0);
    dummy.next = this.head;

    // Initialize two pointers, slow and fast, to the dummy node
    let slow = dummy;
    let fast = dummy;

    // Move the fast pointer k nodes ahead
    for (let i = 0; i < k; i++) {
      // Edge case: If the fast pointer reaches the end before k nodes, k is out of range
      if (fast === null) return;

      fast = fast.next;
    }

    // Move both pointers until the fast pointer reaches the end
    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    // Remove the nth node from the end by updating the pointers
    slow.next = slow.next.next;

    // Update the head if the first node was removed
    this.head = dummy.next;
  }
}

/* subject test 1 : find kth node from the end in a linked list */
let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.removeNthFromEnd(2);
myLinkedList.printList();
// 1
// 2
// 3
// 5

console.log("-----");

// /* subject test 2 : k is larger than the length of the linked list */
myLinkedList.makeEmpty();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.removeNthFromEnd(10); // ERROR
myLinkedList.printList();
// 1
// 2
// 3
// 4
// 5

console.log("-----");

/* subject test 3 : linked list has only one node */
myLinkedList.makeEmpty();
myLinkedList.push(1);
myLinkedList.removeNthFromEnd(1);
myLinkedList.printList();
// null

console.log("-----");

myLinkedList.makeEmpty();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.removeNthFromEnd(1);
myLinkedList.printList();
// 1

// /* subject test 4 : linked list is empty */
myLinkedList.makeEmpty();
myLinkedList.removeNthFromEnd(1);
myLinkedList.printList();
// null
console.log("-----");
