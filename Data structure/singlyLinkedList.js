class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Insert at last
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    //Traverse all nodes
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
    //Remove from last
    pop() {
        if (!this.head) return undefined;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }  
        let current = this.head;
        let newTail = this.tail;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }
    //Remove from the start
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return currentHead;
    }

    unshift(val) {
        let node = new Node(val);
        let oldHead = this.head;
        this.head = node;
        this.head.next = oldHead;
        this.length++;
        if (this.length === 1) this.tail = node;
        return this;
    }

    get(val) {
        if (val >= this.length || val < 0) return undefined;
        let current = this.head;
        while(val > 0) {
            current = current.next
            val--;
        }
        return current;
    }

    set(index, val) {
        if (index >= this.length || index < 0) return undefined;
        let count = 0;
        let current = this.head;
        while(count < index) {
            current = current.next;
            count++;
        }
        current.value = val;
        return current;
    }

    insert(index, val) {
        if (index > this.length || index < 0) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        let newNode = new Node(val);
        let previousNode = this.get(index - 1);
        let temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    reverse() {
        if (this.length <= 1) return this.head || false;
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;
        while(currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return true;
    }
}

let sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
// sll.push(3);
// sll.push(4);
// sll.unshift(5);
console.log(sll);
console.log('--------');
// console.log(sll.insert(2,5));
// console.log(sll);
console.log(sll.reverse());
sll.traverse();