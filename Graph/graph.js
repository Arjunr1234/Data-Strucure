class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  bfsShortestPath(startVertex, endVertex) {
    if (startVertex === endVertex) {
      return 0;
    }

    let visited = {};
    let queue = [];
    let distance = {};
    let predecessors = {};

    distance[startVertex] = 0;
    queue.push(startVertex);
    visited[startVertex] = true;

    while (queue.length > 0) {
      let currentVertex = queue.shift();

      if (currentVertex === endVertex) {
        return this.getPath(predecessors, startVertex, endVertex);
      }

      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          distance[neighbor] = distance[currentVertex] + 1;
          predecessors[neighbor] = currentVertex;
          queue.push(neighbor);
        }
      }
    }

    return []; // If endVertex is not reachable from startVertex
  }

  getPath(predecessors, startVertex, endVertex) {
    const path = [];
    let currentVertex = endVertex;
    while (currentVertex !== startVertex) {
      path.unshift(currentVertex);
      currentVertex = predecessors[currentVertex];
    }
    path.unshift(startVertex);
    return path;
  }

  bfsTraversal(startVertex) {
    let visited = {};
    let result = [];
    let queue = [startVertex];
    visited[startVertex] = true;

    while (queue.length > 0) {
      let currentVertex = queue.shift();
      result.push(currentVertex);

      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return result;
  }
  dfsTraversal(startVertex) {
    let visited = {};
    let result = [];

    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);
                        
      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    };

    dfs(startVertex);

    return result;
  }
}
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log(graph.bfsShortestPath("A", "E"));
graph.display();
console.log(graph.dfsTraversal("A"));