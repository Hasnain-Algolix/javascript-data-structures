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

  // Dequeue() Method
  dequeue(value) {
    if (this.length === 0) return undefined;

    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

const myStack = new Queue('Apple');
myStack.enqueue('Orange');
// myStack.makeEmtpy();
console.log(myStack);

module.exports = Queue;
