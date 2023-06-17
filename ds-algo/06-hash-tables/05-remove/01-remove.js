class HashTable {
  // size is 7 by default because it's a prime number
  // prime numbers are helpful in spreading out the keys more uniformly
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // '_' means this is a method that should only be called by other methods
  // this method is to generate a random prime number
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // '23' is a prime number, and it's helpful in spreading out the keys more uniformly
      // this.dataMap.length always ranges from 0 to 6
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    // this number is returned, always ranging from 0 to 6
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
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

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }

  remove(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          this.dataMap[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }
}

let myHashTable = new HashTable();
myHashTable.set("lucky", 8);
myHashTable.set("deoqua", 3);

console.log(myHashTable.remove("deoqua")); // true
console.log(myHashTable.remove("deoqua")); // false

console.log(myHashTable.keys()); // [ 'lucky' ]
