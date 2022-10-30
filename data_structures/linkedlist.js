class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

/**
 * Traverse a linked list and print values until we hit null
 */
const traverse = (head) => {
  while (head) {
    console.log(head.value);
    head = head.next;
  }
};

traverse(head);

/**
 * Reverse and output a linked list
 */
const reverse = (head) => {
  let prev = null;
  let curr = head;
  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  console.log("reversing head...");
  // console.dir(prev, { depth: null });
  traverse(prev);
};

reverse(head);

const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
