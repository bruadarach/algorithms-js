class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  //   constructor(value) {
  //     const newNode = new Node(value);
  //     this.root = newNode;
  //     this.count = 1;
  //   }

  /* only initialize the root, not create a new Node */
  constructor() {
    this.root = null;
  }
}

let myTree = new BST();
console.log(myTree);
// BST { root: null, count: 0 }
