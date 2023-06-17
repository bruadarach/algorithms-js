class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  /* only initialize the root, not creating a new Node */
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      // newNode value is equal to a node we already have in the tree
      if (newNode.value === temp.value) return undefined;
      // newNode.value < temp.value
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        // newNode.value > temp.value
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;

    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        // value === temp.value
        return true;
      }
    }
    return false;
  }
}

let myTree = new BST();
myTree.insert(5);
myTree.insert(1);
myTree.insert(9);
myTree.insert(2);
myTree.insert(8);

console.log(myTree.contains(8)); // true
console.log(myTree.contains(100)); // false

let myTree2 = new BST();
console.log(myTree2.contains(0)); // false

// time complexity: O(log n) - best and average case
// time complexity: O(n) - worst case
