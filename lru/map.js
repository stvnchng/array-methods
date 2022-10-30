/**
 * LRU with TTL using built-in Map object.
 */
class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    // cache maps key to [value, expireTime]
    this.cache = new Map();
    // expired just maps key to expireTime because value is voided upon expiry
    // when we have to evict, first check this map and evict the min expireTime first
    this.expired = new Map();
  }

  get(key, time) {
    if (this.cache.has(key)) {
      const [item, expireTime] = this.cache.get(key);
      if (time > expireTime) {
        this.expired.set(key, expireTime);
        return "-1, key " + key + " expired at time " + time;
      }
      this.cache.delete(key);
      this.cache.set(key, [item, expireTime]);
      return item;
    }
    return "-1, not found";
  }

  put(key, value, time) {
    // delete the key if it exists
    if (this.cache.has(key)) this.cache.delete(key);
    // set the key as most recent
    this.cache.set(key, [value, time]);
    if (this.cache.size > this.capacity) {
      if (this.expired.size) {
        const minExpTime = Math.min(...this.expired.values());
        const keyToDelete = [...this.expired.keys()].find(
          (key) => this.expired.get(key) === minExpTime
        );
        this.expired.delete(keyToDelete);
        this.cache.delete(keyToDelete);
        console.log("evicted key", keyToDelete);
      } else {
        const firstKey = this.getFirst();
        this.cache.delete(firstKey);
        console.log("evicted first key", firstKey);
      }
    }
  }

  getFirst() {
    return this.cache.keys().next().value;
  }
}

const lRUCache = new LRU(2);
console.time("LRU Cache Runtime");
lRUCache.put(1, 3, 10);
lRUCache.put(2, 4, 5);
console.log(lRUCache.get(1, 1));
console.log(lRUCache.get(1, 11));
console.log(lRUCache.get(2, 5));
console.log(lRUCache.get(2, 6));
lRUCache.put(3, 100, 10); // evicts key 2
console.log(lRUCache.get(2, 1));
lRUCache.put(4, 4, 10); // evicts key 1
console.log(lRUCache.get(1, 1));
console.log(lRUCache.get(3, 1));
console.log(lRUCache.get(4, 1));
console.timeEnd("LRU Cache Runtime");
// Expected output:
// 3
// -1, key 1 expired at time 11
// 4
// -1, key 2 expired at time 6
// evicted key 2
// -1, not found
// evicted key 1
// -1, not found
// 100
// 4

// const keyToDelete = [...this.expiredCache].reduce((a, b) =>
//   a[1] < b[1] ? a : b
// )[0];
