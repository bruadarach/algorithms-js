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
}

const myGraph = new Graph();
myGraph.addVertex("Sujeong");
console.log(myGraph);
// Graph { adjacencyList: { Sujeong: [] } }

console.log(myGraph.addVertex("Minji")); // true
console.log(myGraph);
//Graph { adjacencyList: { Sujeong: [], Minji: [] } }

console.log(myGraph.addVertex("Minji")); // false
