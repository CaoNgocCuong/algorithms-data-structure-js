// ---------------------------- Linked List ------------------------
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListWithHeadAndTail {
  constructor() {
    this.head = null;
    this.tail = null;
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

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // Big O => O(1)
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  // Big O => O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = this.head;
    }

    this.size--;
    return value;
  }

  // Big O => O(n)
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    let value = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevNode = this.head;

      while (prevNode.next !== this.tail) {
        prevNode = prevNode.next;
      }

      prevNode.next = null;
      this.tail = prevNode;
    }

    this.size--;

    return value;
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

module.exports = LinkedListWithHeadAndTail;
// console.log("----------------------- Testing ... ----------------------------");
// const instance = new LinkedListWithHeadAndTail();
// console.log("insideee.dev - isEmpty :>", instance.isEmpty());
// console.log("insideee.dev - getSize :>", instance.getSize());
// instance.append(1);
// instance.append(2);
// instance.append(3);
// instance.prepend(0);
// console.log("insideee.dev - isEmpty :>", instance.isEmpty());
// console.log("insideee.dev - getSize :>", instance.getSize());
// instance.print();
// instance.removeFromFront();
// instance.print();
// instance.removeFromEnd();
// instance.print();
