class LL {
  constructor() {
    this.stack = [];
  }

  add(value) {
    this.stack.push(value);
  }

  removeFromTail() {
    return this.stack.pop();
  }

  insert(value, index) {
    if (index <= this.stack.length && index >= 0) {
      let temp = [];
      let numToRemove = this.stack.length - index;
      while (numToRemove > 0) {
        temp.push(this.removeFromTail());
        numToRemove--;
      }
      this.stack.push(value);
      while (temp.length) {
        this.stack.push(temp.pop());
      }
    } else {
      console.error("index is out of bounds for index", index);
    }
  }
}

let ll = new LL();
ll.add(1);
ll.add(2);
ll.add(4);
ll.add(5);
console.log(ll);
ll.insert(3, 2);
console.log(ll);
ll.insert(0, 0);
console.log(ll);
ll.removeFromTail();
ll.removeFromTail();
ll.removeFromTail();
console.log(ll);
ll.insert(3, 3);
console.log(ll);
