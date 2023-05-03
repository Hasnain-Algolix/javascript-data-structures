const Node = require('./Node');

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  // Empty List
  makeEmtpy() {
    this.top = null;
    this.length = 0;
  }

  // Push Method
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  // Pop() Method
  pop() {
    if (this.length === 0) return undefined;

    let temp = this.top;
    this.top = thie.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myStack = new Stack('hello');
myStack.makeEmtpy();
console.log(myStack);

module.exports = Stack;
