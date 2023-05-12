class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(7);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  getIndex(key) {
    let index = this._hash(key);
    return index;
  }

  set(key, value) {
    const index = this.getIndex(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    // const index = this.getIndex(key);
    let index = this._hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable();
myHashTable.set('washers', 50);
myHashTable.set('bolts', 1000);
myHashTable.set('lumber', 20);

// Use the get() method with all these keys
console.log(myHashTable.get('bolts'));

console.log(myHashTable);

module.exports = HashTable;
