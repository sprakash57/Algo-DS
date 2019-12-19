class PriorityQueue {
    constructor() {
        this.values = [];
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift()
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vt) {
        this.adjacencyList[vt] || (this.adjacencyList[vt] = []);
    }

    addEdge(vt1, vt2, weight) {
        this.adjacencyList[vt1] && this.adjacencyList[vt1].push({ node: vt2, weight });
        this.adjacencyList[vt2] && this.adjacencyList[vt2].push({ node: vt1, weight });
    }

    dijkstra(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let result = [];
        //Build initial state
        for (let vt in this.adjacencyList) {
            if (vt === start) {
                distances[vt] = 0;
            } else {
                distances[vt] = Infinity;
            }
            nodes.enqueue(vt, distances[vt]);
            previous[vt] = null;
        }
        while (nodes.values) {
            let smallest = nodes.dequeue().val;
            if (smallest === end) {
                while (previous[smallest]) {
                    result.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //Find neighbors
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //Calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    if (candidate < distances[nextNode.node]) {
                        distances[nextNode.node] = candidate; //Updating new smallest distance to neighbor
                        previous[nextNode.node] = smallest; //Updating previous - how to get to neighbor
                        nodes.enqueue(nextNode.node, candidate); //Push data to queue with new priority
                    }
                }
            }
        }
        return result.concat(start).reverse();
    }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);
console.log(g.dijkstra('A', 'E'));