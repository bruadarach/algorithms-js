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

  // shift()
  pop() {
    if (this.length === 0) return undefined;

    let temp = this.top;
    // this.top = this.top.next;
    this.top = temp.next;
    temp.next = null;

    this.length--;
    // no need to write an edge case, when length is 0 , like shift() in LinkedList,
    // because Stack doesn't have the equivalent of tail, it only has top.
    return temp;
  }
}

const myStack = new Stack(1);
myStack.push(2);

console.log(myStack.pop());
// Node { value: 2, next: null }

console.log(myStack.pop());
// Node { value: 1, next: null }

console.log(myStack.pop());
// undefined
