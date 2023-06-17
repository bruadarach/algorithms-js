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

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

let myTree = new BST();
myTree.insert(5);
myTree.insert(1);
myTree.insert(9);
myTree.insert(2);
myTree.insert(8);

console.log(myTree.minValueNode(myTree.root));
// Node {
//   value: 1,
//   left: null,
//   right: Node { value: 2, left: null, right: null }
// }

console.log(myTree.minValueNode(myTree.root.right));
// Node { value: 8, left: null, right: null }

// time complexity: O(log n)
