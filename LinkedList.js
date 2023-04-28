const Node = require('./Node');

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  // Add item to the end of the LinkedList
  push(value) {
    // Create new Node
    const newNode = new Node(value);

    // If LinkedList doesn't have any value
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If LinkedList does have values
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // Increase the length
    this.length++;

    // Return LinkedList
    return this;
  }
}

const linkedListItem = new LinkedList('Apple');
linkedListItem.push('Mango');
console.log(linkedListItem);

module.exports = LinkedList;
