/**
 * LRU Cache with TTL
 *
 * Implemented with a doubly-LL and no built-in objects.
 */
class Node {
  constructor(key, value, time) {
    this.key = key;
    this.value = value;
    this.time = time;
    this.expired = false;
    this.next = null;
    this.prev = null;
  }
}

class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.head = new Node(0, 0, 0);
    this.tail = new Node(0, 0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key, time) {
    if (key in this.cache) {
      const node = this.cache[key];
      this.remove(node);
      this.add(node);
      if (time > node.time) {
        const res = "-1, key " + key + " expired at time " + time;
        // node has expired, remove it and add it to the left to be evicted first
        node.expired = true;
        this.remove(node);
        this.addLeft(node);
        return res;
      }
      return node.value;
    }
    return "-1, not found";
  }

  put(key, value, time) {
    // if node exists in cache, remove it from the LL so we can move it to the end
    if (key in this.cache) {
      this.remove(this.cache[key]);
    }
    // add new node to the end of the LRU queue and store it in the cache
    const node = new Node(key, value, time);
    this.add(node);
    this.cache[key] = node;
    // delete the leftmost node if we are full
    if (Object.keys(this.cache).length > this.capacity) {
      const head = this.head.next;
      this.remove(head);
      delete this.cache[head.key];
      console.log("evicted key", head.key);
    }
  }

  addLeft(node) {
    const headNode = this.head.next;
    // TODO: is this right?
    while (headNode.expired) {
      // current head node is expired! we need to insert in a way such that TTL is from lowest to highest
      while (headNode.time < node.time) {
        headNode = headNode.next;
      }
      break;
    }
    // connect headNode <=> node, node <=> head
    headNode.prev = node;
    this.head.next = node;
    node.next = headNode;
    node.prev = this.head;
  }

  add(node) {
    // move key to end by setting most recent node next to node
    const lastNode = this.tail.prev;
    // create links between lastNode <=> node, node <=> tail
    lastNode.next = node;
    this.tail.prev = node;
    node.prev = lastNode;
    node.next = this.tail;
  }

  remove(node) {
    // get refs to neighbor nodes and link them to each other
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
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
