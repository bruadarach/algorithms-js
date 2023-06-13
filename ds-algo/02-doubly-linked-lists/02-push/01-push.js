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
}

let myDoublyLinkedList = new DoublyLikedList(1);
myDoublyLinkedList.push(2);
console.log(myDoublyLinkedList);
// DoublyLikedList {
//     head: <ref *1> Node {
//       val: 1,
//       next: Node { val: 2, next: null, prev: [Circular *1] },
//       prev: null
//     },
//     tail: <ref *2> Node {
//       val: 2,
//       next: null,
//       prev: <ref *1> Node { val: 1, next: [Circular *2], prev: null }
//     },
//     length: 2
//   }
