// --------------------------- Hash Table -------------------------
class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let resultKey = 0;

    for (let i = 0; i < key.length; i++) {
      resultKey += key.charCodeAt(i);
    }

    return resultKey % this.size;
  }

  set(key, value) {
    const hashKeyIndex = this.hash(key);

    const bucket = this.table[hashKeyIndex];

    if (!bucket) {
      this.table[hashKeyIndex] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const hashKeyIndex = this.hash(key);

    const bucket = this.table[hashKeyIndex];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }

    return undefined;
  }

  remove(key) {
    const hashKeyIndex = this.hash(key);

    const bucket = this.table[hashKeyIndex];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  print() {
    console.log("insideee.dev - table :>", this.table);

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log("insideee.dev - data :>", i, "-", this.table[i]);
      }
    }
  }
}

const instance = new HashTable(4);
instance.set("12cuong", "hihi");
console.log("insideee.dev - get 12cuong :>", instance.get("12cuong"));
instance.print();
instance.remove("12cuong");
instance.print();

// ********************************************* NOTE **********************************************
// Big O => O(n) => however with hash table the collision is very minimal and can be reduced to a great extent by having better hashing function and because of that generally consider the average case time complexity instead of worst case time complexity when it comes to hash table, the average case complexity is constant => O(1)
