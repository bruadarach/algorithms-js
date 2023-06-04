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
    // edge case - empty LinkedList : head and tail are null
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
    // return the entire LinkedList
    return this;
  }

  pop() {
    // scenario 1: empty LinkedList
    if (!this.head) return undefined;
    // if (this.length === 0) return undefined;

    // scenario 2: items in LinkedList
    // pre & temp are pointers
    // loop through the LinkedList
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      // move forward
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // scenario 3: one item in LinkedList
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    // 1. create new Node
    const newNode = new Node(value);

    // 2. (edge case) empty in LinkedList
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 3. items in LinkedList
      // update the head Node
      newNode.next = this.head;
      this.head = newNode;
    }
    // 4. increment length
    this.length++;
    // 5. return the entire LinkedList
    return this;
  }

  shift() {
    // scenario 1: empty LinkedList => head and tail are null
    if (!this.head) return undefined;

    // scenario 2: two or more items in LinkedList
    let temp = this.head;
    this.head = this.head.next;
    // (!important) break the connection of the first/temp node
    temp.next = null;
    // decrement the length
    this.length--;

    // scenario 3: one item left in LinkedList
    // length is 0, but this is not an empty LinkedList.
    // (still there is one item left, after following the scenario 2 codes)
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
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

myLinkedList.pop();
console.log(myLinkedList);
// LinkedList {
//     head: Node { value: 4, next: Node { value: 5, next: null } },
//     tail: Node { value: 5, next: null },
//     length: 2
//   }

myLinkedList.pop();
myLinkedList.pop();
// empty LinkedList
console.log(myLinkedList);
// LinkedList { head: null, tail: null, length: 0 }

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.unshift(0);
console.log(myLinkedList);
// LinkedList {
//     head: Node { value: 0, next: Node { value: 1, next: [Node] } },
//     tail: Node { value: 3, next: null },
//     length: 4
//   }

myLinkedList.shift();
console.log(myLinkedList);
// LinkedList {
//   head: Node { value: 1, next: Node { value: 2, next: [Node] } },
//   tail: Node { value: 3, next: null },
//   length: 3
// }
