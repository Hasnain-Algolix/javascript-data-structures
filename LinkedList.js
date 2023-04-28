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

  // Remove first item
  shift() {
    // if list is empty
    if (!this.head) return undefined;

    // Make reference to first item
    let temp = this.head;
    // Set Head equal to next item
    this.head = this.head.next;
    // Break the connection of the temp/first item
    temp.next = null;
    this.length--;

    // If list has only one item
    if (this.length === 0) {
      this.tail = nul;
    }

    return temp;
  }

  // Get item by index
  get(index) {
    // Verify the index is not greater or less then the length of the list
    if (index < 0 || index >= this.length) return undefined;

    // Get the item and make a reference to it
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  // Update value of a Node by given Index
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
}

// Testing for Push()
const linkedListItem = new LinkedList('Apple');
linkedListItem.push('Mango');
linkedListItem.push('Orange');
linkedListItem.push('Banana');

// Testing for Pop()
// linkedListItem.pop();
// console.log(linkedListItem);

// Testing Unshift()
// linkedListItem.unshift('Banana');
// console.log(linkedListItem);

// Testing Shift()
// linkedListItem.shift();
// console.log(linkedListItem);

// Testing Get()
// console.log(linkedListItem.get(1));

// Testing Set()
linkedListItem.set(0, 'Watermelon');
console.log(linkedListItem);

module.exports = LinkedList;
