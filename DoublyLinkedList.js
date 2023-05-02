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

  // Push Method
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const item = new DoublyLinkedList('Orange');
item.makeEmtpy();
item.push('Banana');
item.push('Orange');
console.log(item);

module.exports = DoublyLinkedList;
