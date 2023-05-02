const Node = require('./Node');

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  // Empty List
  makeEmtpy() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const item = new DoublyLinkedList('Orange');
item.makeEmtpy();
console.log(item);

module.exports = DoublyLinkedList;
