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

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
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

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;

    if (index <= this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;

    before.next = newNode;
    newNode.prev = before; // new line
    newNode.next = after;
    after.prev = newNode; // new line
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const temp = this.get(index);
    // const before = temp.prev;
    // const after = temp.next;

    // before.next = after;
    // after.prev = before;
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;

    temp.prev = null;
    temp.next = null;

    this.length--;
    return temp;
  }

  reverse() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this;

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let before = null;
    let after = null;

    for (let i = 0; i < this.length; i++) {
      after = temp.next;
      temp.next = before;
      temp.prev = after;
      before = temp;
      temp = after;
    }
    return this;
  }
}

let myDoublyLinkedList = new DoublyLikedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);

console.log(myDoublyLinkedList.reverse());
// DoublyLikedList {
//     head: <ref *1> Node {
//       val: 3,
//       next: Node { val: 2, next: [Node], prev: [Circular *1] },
//       prev: null
//     },
//     tail: <ref *2> Node {
//       val: 1,
//       next: null,
//       prev: Node { val: 2, next: [Circular *2], prev: [Node] }
//     },
//     length: 3
//   }
