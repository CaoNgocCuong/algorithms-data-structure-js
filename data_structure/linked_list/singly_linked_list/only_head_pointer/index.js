// ---------------------------- Linked List ------------------------
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Big O => O(1)
  prepend(value) {
    const node = new Node(value);

    if (!this.isEmpty()) {
      node.next = this.head;
    }

    this.head = node;
    this.size++;
  }

  // Big O => O(n)
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let preNode = this.head;

      while (preNode.next) {
        preNode = preNode.next;
      }

      preNode.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Your index is invalid!");
      console.log("Remember index start with 0!");
      console.log(`Current size = ${this.size}, your index = ${index}!`);
      return false;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let preNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        preNode = preNode.next;
      }

      node.next = preNode.next;
      preNode.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Your index is invalid!");
      console.log("Remember index start with 0!");
      console.log(`Current size = ${this.size}, your index = ${index}!`);
      return null;
    }

    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
      removeNode.next = null;
    } else {
      let preNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        preNode = preNode.next;
      }

      removeNode = preNode.next;
      preNode.next = removeNode.next;
      removeNode.next = null;
    }

    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("Linked List is empty!");
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prevNode = this.head;

      while (prevNode.next && prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }

      if (prevNode.next) {
        const removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        removeNode.value = null;
        removeNode.next = null;
        this.size--;

        return value;
      }

      console.log(`Your value = ${value} does not existed in Linked List!`);
      return null;
    }
  }

  searchValue(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let index = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.next;
      index++;
    }

    return -1;
  }

  reverse() {
    let prevNode = null;
    let currentNode = this.head;

    while (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.head = prevNode;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Linked List is empty!!!");
    } else {
      let currentNode = this.head;
      let result = "";

      while (currentNode) {
        result += `${currentNode.value} -> `;
        currentNode = currentNode.next;
      }

      result += "null";
      console.log("- - - - -- - - -- - - -- - - -- - - -- ");
      console.log("Linked List: ", result);
    }
  }
}

console.log("----------------------- Testing ... ----------------------------");
const instance = new LinkedList();
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
console.log("insideee.dev - getSize :>", instance.getSize());
// ------------------------------------ Test Prepend -------------------------
// instance.print();
// instance.prepend(10);
// instance.print();
// instance.prepend(20);
// instance.print();
// instance.prepend(30);
// instance.print();
// ------------------------------------ Test Append -------------------------
// instance.print();
// instance.append(10);
// instance.print();
// instance.append(20);
// instance.print();
// instance.append(30);
// instance.print();
// ------------------------------------ Test Insert -------------------------
instance.print();
instance.insert(10, 0);
instance.print();
instance.insert(20, 0);
instance.print();
console.log("insideee.dev - getSize :>", instance.getSize());
instance.insert(30, 2);
instance.insert(40, 5);
instance.print();
// ------------------------------------ Test Remove Node from index -------------------------
// instance.removeFrom(-1);
// instance.removeFrom(1);
// instance.print();
// instance.removeFrom(3);
// instance.print();
// instance.removeFrom(1);
// instance.print();
// ----------------------- Test Remove Node from value -------------------------
// instance.removeValue(-1);
// instance.removeValue(10);
// instance.print();
// console.log("insideee.dev - getSize :>", instance.getSize());
// instance.removeValue(30);
// instance.print();
// console.log("insideee.dev - getSize :>", instance.getSize());
// instance.removeValue(20);
// instance.print();
// console.log("insideee.dev - getSize :>", instance.getSize());
// ----------------------- Test search ----------------------------------------
// console.log("insideee.dev - search 10 :>", instance.searchValue(10));
// console.log("insideee.dev - search 1 :>", instance.searchValue(1));
// console.log("insideee.dev - search 30 :>", instance.searchValue(30));
// ------------------------- Test Reverse ------------------------------------
instance.reverse();
console.log("insideee.dev - Reverse :>");
instance.print();
