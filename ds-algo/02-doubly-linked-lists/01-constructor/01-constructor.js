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
}

let myDoublyLinkedList = new DoublyLikedList(1);
console.log(myDoublyLinkedList);

// DoublyLikedList {
//     head: Node { val: 1, next: null, prev: null },
//     tail: Node { val: 1, next: null, prev: null },
//     length: 1
//   }
