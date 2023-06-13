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
}

let myDoublyLinkedList = new DoublyLikedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.unshift(0);
console.log(myDoublyLinkedList);
// DoublyLikedList {
//     head: <ref *1> Node {
//       val: 0,
//       next: Node { val: 1, next: [Node], prev: [Circular *1] },
//       prev: null
//     },
//     tail: <ref *2> Node {
//       val: 2,
//       next: null,
//       prev: Node { val: 1, next: [Circular *2], prev: [Node] }
//     },
//     length: 3
//   }
