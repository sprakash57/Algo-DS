class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vt) {
        this.adjacencyList[vt] || (this.adjacencyList[vt] = []);
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1] && this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2] && this.adjacencyList[v2].push(v1);
    }

    removevEdge(v1, v2) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1] = this.adjacencyList[v1].filter(vt => vt !== v2)
        if (this.adjacencyList[v2]) this.adjacencyList[v2] = this.adjacencyList[v2].filter(vt => vt !== v1)
    }

    removeVertex(vt) {
        for (let item of this.adjacencyList[vt]) {
            this.removevEdge(vt, item);
        }
        delete this.adjacencyList[vt];
    }
}

const g = new Graph();
g.addVertex('Pune')
g.addVertex('Delhi')
g.addVertex('Kolkata')
g.addEdge('Kolkata', 'Delhi')
g.addEdge('Kolkata', 'Pune');
g.removeVertex('Delhi');
// console.log('before-----', g);
//g.removevEdge('Kolkata', 'Pune');
console.log('after-----', g);