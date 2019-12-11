class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(data) {
        let parentIdx = -Infinity, parent = -Infinity;
        this.values.push(data);
        let idx = this.values.length - 1;
        while (idx > 0) {
            parentIdx = Math.floor((idx - 1) / 2);
            parent = this.values[parentIdx];
            if (data <= parent) break;
            this.values[parentIdx] = data;
            this.values[idx] = parent;
            idx = parentIdx;
        }
        return this.values;
    }

    removeMax() {
        let root = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
    }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41)
maxBinaryHeap.insert(39)
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(18)
maxBinaryHeap.insert(27)
maxBinaryHeap.insert(12)
console.log(maxBinaryHeap.insert(40))
