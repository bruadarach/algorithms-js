// class
class Cookie {
  constructor(color) {
    this.color = color;
  }

  // getter
  getColor() {
    return this.color;
  }
  // setter
  setColor(color) {
    this.color = color;
  }
}

// instance
// new calls the constructor
let cookieOne = new Cookie("yellow");
let cookieTwo = new Cookie("blue");

console.log(cookieOne.getColor()); // yellow
console.log(cookieTwo.getColor()); // blue

// change the color
cookieOne.setColor("red");
cookieTwo.setColor("green");
console.log(cookieOne.getColor()); // red
console.log(cookieTwo.getColor()); // green

/* how to use class in data structures */
class LinkedList {
  constructor(value) {
    // ...
  }
  push(value) {
    //...
  }
  pop() {
    //...
  }
  unshift(value) {
    //...
  }
  shift() {
    //...
  }
  insert(index, value) {
    //...
  }
  remove(index) {
    //...
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(1);
myLinkedList.pop();
myLinkedList.unshift(0);
myLinkedList.shift();
myLinkedList.insert(0, 1);
myLinkedList.remove(0);
