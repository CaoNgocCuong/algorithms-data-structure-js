// ----------------------- Queue --------------------------
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.queue[0];
    }

    return null;
  }

  size() {
    return this.queue.length;
  }

  print() {
    console.log("Queue =>", this.queue.toString());
  }
}

const queue = new Queue();
console.log("insideee.dev - size :>", queue.size());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log("insideee.dev - isEmpty :>", queue.isEmpty());
console.log("insideee.dev - dequeue :>", queue.dequeue());
console.log("insideee.dev - dequeue :>", queue.dequeue());
console.log("insideee.dev - peek :>", queue.peek());
console.log("insideee.dev - size :>", queue.size());
queue.print();

// => Because dequeue with Queue using array has Big O = O(n) linear => Bad => Use Object instead
