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

    dfsRecursive(vt) {
        if (!this.adjacencyList[vt]) return 'City not found';
        const result = [], visited = {};
        const adjacencyList = this.adjacencyList;
        (function traverse(vt) {
            if (!vt) return null;
            result.push(vt);
            visited[vt] = true;
            adjacencyList[vt].forEach(neighbour => {
                if (!visited[neighbour]) return traverse(neighbour);
            })
        })(vt);
        return result;
    }

    dfsIterative(start) {
        const stack = [start], result = [], visited = {};
        let current;
        visited[start] = true;
        while (stack.length) {
            console.log(stack);
            current = stack.pop();
            result.push(current);
            this.adjacencyList[current].forEach(edge => {
                if (!visited[edge]) {
                    visited[edge] = true;
                    stack.push(edge);
                }
            })
        }
        return result;
    }

    breadthFirstSearch(start) {
        const queue = [start], result = [], visited = {};
        let current;
        visited[start] = true;
        while (queue.length) {
            current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach(edge => {
                if (!visited[edge]) {
                    visited[edge] = true;
                    queue.push(edge)
                }
            })
        }
        return result;
    }
}

const g = new Graph();
g.addVertex('Agra')
g.addVertex('Banglore')
g.addVertex('Cochin')
g.addVertex('Delhi')
g.addVertex('Ellora')
g.addVertex('Faridabad')
g.addEdge('Agra', 'Banglore')
g.addEdge('Agra', 'Cochin');
g.addEdge('Banglore', 'Delhi');
g.addEdge('Delhi', 'Ellora');
g.addEdge('Delhi', 'Faridabad');
g.addEdge('Faridabad', 'Ellora');
g.addEdge('Ellora', 'Cochin');
// console.log(g.dfsRecursive('Agra'));
console.log(g.dfsIterative('Agra'));
// console.log(g.breadthFirstSearch('Agra'));