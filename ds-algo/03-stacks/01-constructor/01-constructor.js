class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
}

const myStack = new Stack(1);
console.log(myStack);
// Stack { top: Node { value: 1, next: null }, length: 1 }
