class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLikedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined; // if this.tail === null // if this.length === 0

    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    // Edge case: if this.length === 0
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.head.prev = null; // problematic line
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let myDoublyLinkedList = new DoublyLikedList(1);
// myDoublyLinkedList.push(2);
console.log(myDoublyLinkedList.shift());
console.log(myDoublyLinkedList);
// Node { val: 1, next: null, prev: null }
// DoublyLikedList { head: null, tail: null, length: 0 }
