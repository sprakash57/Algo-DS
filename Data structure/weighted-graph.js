class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vt) {
        if (!this.adjacencyList[vt]) this.adjacencyList[vt] = [];
    }

    addEdge(vt1, vt2, weight) {
        this.adjacencyList[vt1] && this.adjacencyList[vt1].push({ node: vt2, weight });
        this.adjacencyList[vt2] && this.adjacencyList[vt2].push({ node: vt1, weight });
    }
}

let wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addEdge('A', 'B', 9);
wg.addEdge('A', 'C', 8);
wg.addEdge('B', 'C', 10);
console.log(wg.adjacencyList);
