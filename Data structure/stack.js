class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let current = this.first;
            this.first = node;
            this.first.next = current;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null
        let removed = this.first;
        if(this.size === 1) {
            this.first = null;
        } else {
            this.first = removed.next;
        }
        this.size--;
        return removed.value;
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack);
console.log('-----------');
console.log(stack.pop());
console.log('-----------');
console.log(stack);
