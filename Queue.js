const Node = require('./Node');

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  // Empty List
  makeEmtpy() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Enqueue() Method
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    this;
  }
}

const myStack = new Queue('hello');
myStack.makeEmtpy();
console.log(myStack);

module.exports = Queue;
