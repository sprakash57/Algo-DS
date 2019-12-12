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

    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        while (true) {
            let current = this.values[idx];
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            if (leftIdx >= length || rightIdx >= length) break;
            let leftChild = this.values[leftIdx];
            let rightChild = this.values[rightIdx];
            if (rightChild > leftChild && rightChild > current) {
                this.values[idx] = rightChild;
                this.values[rightIdx] = current;
                idx = rightIdx;
            } else if (leftChild > current) {
                this.values[idx] = leftChild;
                this.values[leftIdx] = current;
                idx = leftIdx;
            }
        }
    }
    //Remove max value present in heap
    removeMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(39)
// maxBinaryHeap.insert(41)
// maxBinaryHeap.insert(18)
// maxBinaryHeap.insert(27)
// maxBinaryHeap.insert(12)
// maxBinaryHeap.insert(40)
console.log(maxBinaryHeap)
console.log(maxBinaryHeap.removeMax());
console.log(maxBinaryHeap)
