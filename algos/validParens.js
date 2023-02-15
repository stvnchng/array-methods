const validParens = (s) => {
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (const c of s) {
    if (c in pairs) {
      stack.push(c);
    } else if (c == pairs[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
    // console.log(stack);
  }
  return stack.length === 0;
};

console.log(validParens("()[]{}"));
console.log(validParens("((()))"));
