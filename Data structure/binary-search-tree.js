class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                else current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                else current = current.right;
            }
        }
    }

    find(value) {
        if (!this.root) return false;
        let current = this.root;
        while (true) {
            if (value === current.value) return true;
            if (value < current.value) {
                if (current.left === null) return false;
                else current = current.left;
            } else {
                if (current.right === null) return false;
                else current = current.right;
            }
        }
    }
    //Traverse every node at same level either from left or right horizontally
    breadthFirstSearch() {
        let data = [], queue = [], current = this.root;
        queue.push(current);
        while (queue.length) {
            let node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    //Preorder means node -> left -> right
    dfsPreOrder() {
        let data = [], current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    //Postorder means left -> right -> node
    dfsPostOrder() {
        let current = this.root, data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    //Inorder left -> node -> right
    dfsInOrder() {
        let data = [], current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
// console.log(bst);
console.log('------------');
bst.insert(3);
bst.insert(20);
bst.insert(8);
console.log(bst.breadthFirstSearch());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());