class CircularQueue {
  constructor(capacity) {
    this.container = new Array(capacity);
    this.currentLength = 0;
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.container[this.rear] = element;
      this.currentLength = this.currentLength + 1;

      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const item = this.container[this.front];
    this.container[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength = this.currentLength - 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.container[this.front];
  }

  print() {
    if (this.isEmpty()) console.log("CircularQueue is empty");

    let i;
    let str = "";
    for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += this.container[i] + " -> ";
    }

    str += this.container[i];

    console.log("Print CircularQueue :>", str);
  }
}

const circularQueue = new CircularQueue(5);
console.log("isEmpty :>", circularQueue.isEmpty());
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.enqueue(1)", circularQueue.enqueue(1));
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.enqueue(2)", circularQueue.enqueue(2));
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.enqueue(3)", circularQueue.enqueue(3));
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("is full :>", circularQueue.isFull());
console.log("circularQueue.enqueue(4)", circularQueue.enqueue(4));
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.enqueue(5)", circularQueue.enqueue(5));
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.enqueue(6)", circularQueue.enqueue(6));
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.dequeue()", circularQueue.dequeue());
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.peek()", circularQueue.peek());
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.enqueue(6)", circularQueue.enqueue(6));
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");
console.log("circularQueue.enqueue(7)", circularQueue.enqueue(7));
circularQueue.print();
console.log("- - - - - - - - - - - - - - - - - - -");

console.log("is full :>", circularQueue.isFull());
