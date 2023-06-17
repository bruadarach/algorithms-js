class HashTable {
  // size is 7 by default because it's a prime number
  // prime numbers are helpful in spreading out the keys more uniformly
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // '_' means this is a method that should only be called by other methods
  // this method is to generate a random prime number
  _hash(key) {
    let hahs = 0;
    for (let i = 0; i < key.length; i++) {
      // '23' is a prime number, and it's helpful in spreading out the keys more uniformly
      // this.dataMap.length always ranges from 0 to 6
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    // this number is returned, always ranging from 0 to 6
    return hash;
  }
}

let myHashTable = new HashTable();
console.log(myHashTable);

// HashTable { dataMap: [ <7 empty items> ] }
