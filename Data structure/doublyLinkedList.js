class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse() {
        if (!this.head) return undefined
        let currHead = this.head
        while(currHead.next) {
            console.log(currHead)
            currHead = currHead.next
        }
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let prevTail = '';
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            prevTail = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            prevTail.prev = null;
        }
        this.length--;
        return prevTail;
    }

    shift() {
        if (!this.head) return undefined;
        let currHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = currHead.next;
            currHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return currHead;
    }

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let currHead = this.head;
            currHead.prev = node;
            this.head = node
            this.head.next = currHead;
            this.head.prev = null;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined
        let current = ''
        if (index <= this.length/2) {
            let pos = 0;
            current = this.head
            while(pos !== index) {
                current = current.next
                pos++
            }
        } else {
            console.log('Working from end')
            current = this.tail
            let pos = this.length - 1
            while(pos !== index) {
                current = current.prev
                pos--
            }
        }
        return current
    }

    set(index, val) {
        if (index > this.length || index < 0) return undefined
        let current = ''
        if (index <= this.length/2) {
            let pos = 0;
            current = this.head
            while(pos !== index) {
                current = current.next
                pos++
            }
        } else if (index = this.length - 1){
            this.tail.value = val
            current = this.tail
        } else {
            let pos = this.length - 1
            current = this.head
            while (pos !== index) {
                current = current.prev
                pos--
            }
        }
        current.value = val
        return current
    }

    insert(index, val) {
        let node = new Node(val)
        if(index > this.length && index < 0) return undefined
        if (index === this.length) {
            this.push(val)
            return true
        }
        if(!this.head) {
            this.head = node
            this.tail = node
            this.length++
            return true
        }
        let before = this.get(index - 1);
        let after = before.next;
        before.next = node
        node.next = after
        node.prev = before
        after.prev = node
        this.length++;
        return node;
    }

    remove(index) {
        if (!this.head) return undefined;
        if (this.length === index) this.pop();
        if (this.length === 1) {
            this.head =null;
            this.tail = null;
            this.length = 0;
            return true
        }
        let found = this.get(index);
        let after = found.next;
        let before = found.prev;
        before.next = after;
        after.prev = before;
        found.next = null;
        found.prev = null;
        this.length--;
        return true;
    }
}

let dll = new DoublyLinkedList();
dll.push(2);
dll.push(21);
dll.push(5);
dll.push(8);
console.log('------------');
// console.log(dll.unshift(100));
console.log('------------');
// console.log(dll.insert(2, 78))
console.log('------------');
console.log(dll.remove(2))
console.log(dll)
// dll.traverse();
