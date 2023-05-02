const Node = require('./Node');

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
}

const item = new DoublyLinkedList('Orange');
console.log(item);

module.exports = DoublyLinkedList;
