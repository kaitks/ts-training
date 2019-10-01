/* eslint-disable class-methods-use-this */
const tree = [3, 5, 2, 1, 4, 6, 7];

class EmptyBinaryTree {
    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }

    isEmpty() {
        return true;
    }

    getHeight() {
        return -1;
    }
}

class BinaryTree {
    constructor(data) {
        this.data = data;
        this.left = new EmptyBinaryTree();
        this.right = new EmptyBinaryTree();
    }

    isEmpty() {
        return false;
    }

    add(element) {
        if (element < this.data) {
            if (!this.left.isEmpty()) this.left.add(element);
            else this.left = new BinaryTree(element);
        } else if (!this.right.isEmpty()) this.right.add(element);
        else this.right = new BinaryTree(element);
    }

    getHeight() {
        return 1 + Math.max(this.left.getHeight(), this.right.getHeight());
    }
}

const binaryTree = new BinaryTree(tree[0]);
for (let i = 1; i < tree.length; i++) {
    binaryTree.add(tree[i]);
}

console.log(binaryTree.getHeight());
