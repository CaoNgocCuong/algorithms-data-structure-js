// ---------------------------- Stack ------------------------
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(`insideee.dev - Stack = :>`, this.stack);
  }
}

const instance = new Stack();
console.log("insideee.dev - isEmpty :>", instance.isEmpty());
instance.push("First element");
instance.push("Second element");
console.log("insideee.dev - size :>", instance.size());
console.log("insideee.dev - pop() :>", instance.pop());
console.log("insideee.dev - peek() :>", instance.peek());
instance.print();
