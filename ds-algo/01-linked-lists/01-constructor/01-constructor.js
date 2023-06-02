class Node {
  constructor(value) {
    // create new Node
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // create new Node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    // head and tail are the same
    this.length = 1;
  }
  push(value) {
    // create new Node
    // add Node to end
  }

  unshift(value) {
    // create new Node
    // add Node to beginning
  }

  insert(index, value) {
    // create new Node
    // insert Node
  }
}

let myLinkedList = new LinkedList(4);

console.log(myLinkedList);
// LinkedList {
//     head: Node { value: 4, next: null },
//     tail: Node { value: 4, next: null },
//     length: 1
//   }
