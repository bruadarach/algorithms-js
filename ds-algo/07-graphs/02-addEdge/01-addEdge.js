class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    // if vertex already exists, return false
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }
}

const myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(2);
console.log(myGraph);
// Graph { adjacencyList: { '1': [], '2': [] } }

console.log(myGraph.addEdge(1, 2)); // true
console.log(myGraph);
// Graph { adjacencyList: { '1': [ 2 ], '2': [ 1 ] } }

console.log(myGraph.addEdge(1, 3)); // false
