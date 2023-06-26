// ----------------- Binary Search Tree -----------------
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

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(rootNode, newNode) {
    if (rootNode.value > newNode.value) {
      if (rootNode.left === null) {
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else {
      if (rootNode.right === null) {
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  search(rootNode, valueSearch) {
    if (!rootNode) {
      return false;
    } else {
      if (rootNode.value === valueSearch) {
        return true;
      } else if (rootNode.value < valueSearch) {
        return this.search(rootNode.right, valueSearch);
      } else {
        return this.search(rootNode.left, valueSearch);
      }
    }
  }

  preOrderTraversal(root) {
    if (root) {
      console.log(root.value);
      this.preOrderTraversal(root.left);
      this.preOrderTraversal(root.right);
    }
  }

  inOrderTraversal(root) {
    if (root) {
      this.inOrderTraversal(root.left);
      console.log(root.value);
      this.inOrderTraversal(root.right);
    }
  }

  postOrderTraversal(root) {
    if (root) {
      this.postOrderTraversal(root.left);
      this.postOrderTraversal(root.right);
      console.log(root.value);
    }
  }

  // Breadth First Search (BFS)
  levelOrderTraversal() {
    // Use the optimised queue implementation
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const dequeueItem = queue.shift();
      console.log(dequeueItem.value);

      if (dequeueItem.left) {
        queue.push(dequeueItem.left);
      }

      if (dequeueItem.right) {
        queue.push(dequeueItem.right);
      }
    }
  }

  getMin(rootNode) {
    if (!rootNode.left) {
      return rootNode.value;
    }

    return this.getMin(rootNode.left);
  }

  getMax(rootNode) {
    if (!rootNode.right) {
      return rootNode.value;
    }

    return this.getMax(rootNode.right);
  }
}

const BST = new BinarySearchTree();
console.log("Binary is empty?", BST.isEmpty());
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(3);
BST.insert(7);
console.log("Binary is empty?", BST.isEmpty());
// console.log("has 10? ", BST.search(BST.root, 10));
// console.log("has 15? ", BST.search(BST.root, 15));
// console.log("has 20? ", BST.search(BST.root, 20));
// console.log("has 25? ", BST.search(BST.root, 25));
BST.preOrderTraversal(BST.root);
console.log("---------------------------------------");
BST.inOrderTraversal(BST.root);
console.log("---------------------------------------");
BST.postOrderTraversal(BST.root);
console.log("---------------------------------------");
BST.levelOrderTraversal();
console.log("---------------------------------------");
console.log("Min = ", BST.getMin(BST.root));
console.log("Max = ", BST.getMax(BST.root));
