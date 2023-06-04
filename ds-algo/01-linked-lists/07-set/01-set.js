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

  get(index) {
    // scenario 1: index is out of range
    if (index < 0 || index >= this.length) return undefined;

    // scenario 2: index is valid
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      // need to return true to stop running at this point
      //   return true;
      return this;
    }
    return false;
  }
}

let myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);

console.log(myLinkedList.get(1));
// Node {
//     value: 1,
//     next: Node { value: 2, next: Node { value: 3, next: null } }
//   }
console.log(myLinkedList.get(-1)); // undefined
console.log(myLinkedList.get(100)); // 3

console.log(myLinkedList.set(1, 100));
// LinkedList {
//     head: Node { value: 0, next: Node { value: 100, next: [Node] } },
//     tail: Node { value: 3, next: null },
//     length: 4
//   }
console.log(myLinkedList.set(100, 0)); // false
