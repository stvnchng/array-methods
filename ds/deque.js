/**
 * An implementation of a Deque (double-ended queue)
 *
 * This is basically a doubly-linked list. It supports
 * push and pop from both ends in constant time (allegedly).
 *
 * There are also extra helpers such as concating and removing
 * multiple items from both ends, and peeking all items.
 */
class DequeItem {
  constructor(value = null) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor(items = []) {
    this.head = new DequeItem();
    this.tail = new DequeItem();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.concat(items);
  }

  pop() {
    const tailItem = this.tail.prev;
    const newTail = tailItem.prev;
    this.tail.prev = newTail;
    newTail.next = this.tail;
    return tailItem.value;
  }

  push(item) {
    const tailItem = this.tail.prev;
    const newTail = new DequeItem(item);
    this.tail.prev = newTail;
    tailItem.next = newTail;
    newTail.next = this.tail;
    newTail.prev = tailItem;
  }

  popLeft() {
    const headItem = this.head.next;
    const newHead = headItem.next;
    this.head.next = newHead;
    newHead.prev = this.head;
    return headItem.value;
  }

  pushLeft(item) {
    const headItem = this.head.next;
    const newHead = new DequeItem(item);
    this.head.next = newHead;
    headItem.prev = newHead;
    newHead.prev = this.head;
    newHead.next = headItem;
  }

  peekAll() {
    let headItem = this.head.next;
    while (headItem.value) {
      console.log(headItem.value);
      headItem = headItem.next;
    }
  }

  concat(items) {
    for (const item of items) {
      this.push(item);
    }
  }

  concatLeft(items) {
    for (let i = items.length - 1; i >= 0; i--) {
      this.pushLeft(items[i]);
    }
  }

  removeN(n) {
    while (n) {
      this.pop();
      n--;
    }
  }

  removeLeftN(n) {
    while (n) {
      this.popLeft();
      n--;
    }
  }
}

const deque = new Deque([3, 4, 5]);
deque.concat([6, 7, 8, 9, 10]);
deque.concatLeft([1, 2]);
deque.peekAll(); // expects 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
deque.removeLeftN(2);
deque.removeN(3);
deque.peekAll(); // expects 3, 4, 5, 6, 7
