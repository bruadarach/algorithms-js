class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  euqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;

    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next; // this.first = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(1);
myQueue.euqueue(2);
myQueue.euqueue(3);
console.log(myQueue.dequeue());
// Node { value: 1, next: null }
console.log(myQueue);
// Queue {
//     first: Node { value: 2, next: Node { value: 3, next: null } },
//     last: Node { value: 3, next: null },
//     length: 2
//   }
