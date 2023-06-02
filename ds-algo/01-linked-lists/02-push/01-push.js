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
    const newNode = new Node(value);
    // edge case - empty linked list : head and tail are null
    if (!this.head) {
      // if this.head is null
      this.head = newNode;
      this.tail = newNode;
    } else {
      // [last node] -> [new node]
      // last node === tail node
      // let lastNode point to newNode
      this.tail.next = newNode;
      // [tail] -> [new node]
      // let tail update/point to newNode
      this.tail = newNode;
    }
    // increment the length
    this.length++;
    // return the entire linked list
    return this;
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

myLinkedList.push(5);
console.log(myLinkedList);
// LinkedList {
//     head: Node { value: 4, next: Node { value: 5, next: null } },
//     tail: Node { value: 5, next: null },
//     length: 2
//   }

myLinkedList.push(6);
console.log(myLinkedList);
// LinkedList {
//     head: Node { value: 4, next: Node { value: 5, next: [Node] } },
//     tail: Node { value: 6, next: null },
//     length: 3
//   }

const emptyList = new LinkedList();
console.log(emptyList);
// LinkedList {
//     head: Node { value: undefined, next: null },
//     tail: Node { value: undefined, next: null },
//     length: 1
//   }
