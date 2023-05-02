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
}

const myStack = new Stack('hello');
myStack.makeEmtpy();
console.log(myStack);

module.exports = Stack;
