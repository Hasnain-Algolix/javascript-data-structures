const Node = require('./Node');

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
}

const newNode = new Node('item');

module.exports = LinkedList;
