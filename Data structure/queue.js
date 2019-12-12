class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    //enqueue
    insert(val) {
        let node = new Node(val);
        if (!this.start) {
            this.start = node;
            this.end = node;
        } else {
            this.end.next = node;
            this.end = node;
        }
        return ++this.size;
    }
    //dequeue
    remove() {
        if (!this.start) return null;
        let removed = this.start
        if (this.size === 1) {
            this.start = null;
            this.end = null;
        } else {
            this.start = removed.next
            this.start.next = null;
        }
        this.size--;
        return removed.value;
    }
}

let queue = new Queue();
queue.insert(1);
queue.insert(2);
queue.insert(3);
console.log(queue);
console.log('------------');
console.log(queue.remove());
console.log('------------');
console.log(queue);