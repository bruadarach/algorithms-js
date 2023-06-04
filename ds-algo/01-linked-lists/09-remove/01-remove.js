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

  insert(index, value) {
    // insert in the beginning
    if (index === 0) return this.unshift(value);
    // insert in the end
    if (index === this.length) return this.push(value);
    // index is out of range
    if (index < 0 || index > this.length) return false;

    // insert in the middle
    // 1. create new Node
    const newNode = new Node(value);
    // 2. find the previous node
    let temp = this.get(index - 1);
    // 3. save the next node
    newNode.next = temp.next;
    // 4. update the previous node
    temp.next = newNode;
    // 5. increment the length
    this.length++;
    // 6. return true
    // return true;
    return this;
  }

  remove(index) {
    // remove in the beginning
    if (index === 0) return this.shift();
    // remove in the end
    if (index === this.length - 1) return this.pop();
    // index is out of range
    if (index < 0 || index >= this.length) return undefined;

    // remove in the middle
    // 1. find the previous node
    let before = this.get(index - 1);
    // 2. find the target node
    let temp = before.next;
    // 3. update the previous node
    before.next = temp.next;
    // 4. break the connection of the target node
    temp.next = null;
    // 5. decrement the length
    this.length--;
    // 6. return the target node
    return temp;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);

console.log(myLinkedList.remove(1));
// Node { value: 2, next: null }
console.log(myLinkedList);
// LinkedList {
//     head: Node { value: 1, next: Node { value: 3, next: null } },
//     tail: Node { value: 3, next: null },
//     length: 2
//   }
