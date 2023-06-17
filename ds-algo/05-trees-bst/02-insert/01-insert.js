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
}

let myTree = new BST();
myTree.insert(5);
myTree.insert(1);
myTree.insert(9);
myTree.insert(2);
myTree.insert(8);

myTree.insert(10);
console.log(myTree);
// BST {
//     root: Node {
//       value: 5,
//       left: Node { value: 1, left: null, right: [Node] },
//       right: Node { value: 9, left: [Node], right: [Node] }
//     }
//   }

// BST {
//     root: Node {
//       value: 5,
//       left: Node { value: 8, left: null, right: [Node] },
//       right: Node { value: 9, left: [Node], right: [Node] }
//     }
//   }

// time complexity:
// - Average : tree is balanced : O(log n)
// - Worst : tree is unbalanced : O(n)
