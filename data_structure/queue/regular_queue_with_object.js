// ----------------------- Queue --------------------------
// => Because dequeue with Queue using array has Big O = O(n) linear => Bad => Use Object instead
console.log(
  "0---------------------------------------------------------------------------------------------0"
);
console.log(
  "Because dequeue with Queue using array has Big O = O(n) linear => Bad"
);
class QueueV2 {
  constructor() {
    this.queue = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.queue[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;

    return item;
  }

  peek() {
    return this.queue[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log("QueueV2 :>", this.queue);
  }
}

const queueV2 = new QueueV2();
console.log("insideee.dev - size :>", queueV2.size());
queueV2.enqueue(10);
queueV2.enqueue(20);
queueV2.enqueue(30);
queueV2.print();
console.log("insideee.dev - isEmpty :>", queueV2.isEmpty());
console.log("insideee.dev - dequeue :>", queueV2.dequeue());
console.log("insideee.dev - dequeue :>", queueV2.dequeue());
console.log("insideee.dev - peek :>", queueV2.peek());
console.log("insideee.dev - size :>", queueV2.size());
queueV2.print();
