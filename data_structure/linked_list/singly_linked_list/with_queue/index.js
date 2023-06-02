// --------------------------- Linked List Queue -----------------------
const LinkedList = require("../head_and_tail_pointers/index");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    return this.list.print();
  }
}

console.log("----------------- Testing ... ----------------------");
const instance = new LinkedListQueue();
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
console.log("insideee.dev - getSize :>", instance.getSize());
instance.enqueue(10);
instance.enqueue(20);
instance.enqueue(30);
instance.print();
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
console.log("insideee.dev - getSize :>", instance.getSize());
console.log("insideee.dev - peek() :>", instance.peek());
console.log("insideee.dev - getSize :>", instance.getSize());
instance.dequeue();
instance.print();
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
console.log("insideee.dev - getSize :>", instance.getSize());
instance.dequeue();
instance.print();
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
console.log("insideee.dev - getSize :>", instance.getSize());
instance.dequeue();
instance.print();
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
console.log("insideee.dev - getSize :>", instance.getSize());
