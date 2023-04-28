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

  // Remove last item
  pop() {
    // Check if Linked List is empty
    if (!this.head) return undefined;

    // Linked List have multiple items
    let pre = this.head;
    let temp = this.head;

    // Iterate over the items and select and check every single item, if it points to next node or not, until we get the node that is pointing to null
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // If list has only one item
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Return deleted item
    return temp;
  }

  unshift(value) {
    // Create new Node
    const newNode = new Node(value);

    // Check if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Is list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

// Testing for Push()
const linkedListItem = new LinkedList('Apple');
linkedListItem.push('Mango');
// linkedListItem.push('Banana');
// linkedListItem.push('Orange');
// linkedListItem.push('Melon');
// console.log(linkedListItem);

// Testing for Pop()
// linkedListItem.pop();

// Testing Unshift()
linkedListItem.unshift('Banana');
console.log(linkedListItem);

module.exports = LinkedList;
