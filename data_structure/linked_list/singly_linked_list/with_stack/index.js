// ------------------- Linked List Stack ---------------------
const LinkedList = require("../head_and_tail_pointers/index");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  // Big O => O(1)
  push(value) {
    this.list.prepend(value);
  }

  // Big O => O(1)
  pop() {
    return this.list.removeFromFront();
  }

  // Big O => O(1)
  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

console.log("----------------- Testing ... ---------------");
const instance = new LinkedListStack();
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
instance.push(10);
instance.push(20);
instance.push(30);
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
console.log("insideee.dev - get size :>", instance.getSize());
instance.print();
console.log("insideee.dev - peek() :>", instance.peek());
console.log("insideee.dev - get size :>", instance.getSize());
instance.print();
console.log("insideee.dev - pop() :>", instance.pop());
instance.print();
console.log("insideee.dev - get size :>", instance.getSize());
console.log("insideee.dev - pop() :>", instance.pop());
instance.print();
console.log("insideee.dev - get size :>", instance.getSize());
instance.print();
