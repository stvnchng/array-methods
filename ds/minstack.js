/**
 * An implementation of a min stack that supports all stack operations plus
 * being able to retrieve the min element. All operations should be O(1).
 */
class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    if (!this.stack.length) {
      this.stack.push([val, val]);
    } else {
      if (val < this.getMin()) {
        this.stack.push([val, val]);
      } else {
        this.stach.push([val, currMin]);
      }
    }
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1][0];
  }

  getMin() {
    return this.stack[this.stack.length - 1][1];
  }
}

const stack = new MinStack();
stack.push(0);
stack.push(-1);
stack.push(-2);
stack.pop();
console.log(stack.peek()); // -1
stack.pop();
console.log(stack.getMin()); // 0
