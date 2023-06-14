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

  // unshift()
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this; // the entire Stack class
  }
}

const myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
// Stack {
//     top: Node { value: 3, next: Node { value: 2, next: [Node] } },
//     length: 3
//   }
