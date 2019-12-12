/**
 * Write a mn-binary-heap -> lower numbers mean higher priorities
 * Use priority present in node to build heap
 * enqueue new node and placed it based on priority
 * dequeue method removes node and rearrange queue according to priority
 */

class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        let idx = this.values.length - 1
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (priority > parent.priority) break;
            this.values[parentIdx] = node;
            this.values[idx] = parent;
            idx = parentIdx;
        }
        return this.values;
    }

    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        while (true) {
            let current = this.values[idx];
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 1;
            if (leftIdx >= length || rightIdx >= length) break;
            let leftChild = this.values[leftIdx];
            let rightChild = this.values[rightIdx];
            if (rightChild.priority < leftChild.priority && rightChild.priority < current.priority) {

            }
        }
    }

    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
    }
}

let priorityQueue = new PriorityQueue();

// priorityQueue.enqueue('Student', 6)
priorityQueue.enqueue('SE', 5)
// priorityQueue.enqueue('SSE', 4)
// priorityQueue.enqueue('TA', 3)
priorityQueue.enqueue('STA', 2)
priorityQueue.enqueue('TL', 1)
console.log(priorityQueue);