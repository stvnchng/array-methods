/**
 * Basically do this:
 *
 * add(1)(2)(3)(4)...(n)
 */
const add = (a) => {
  return (b) => {
    if (b) return add(a + b);
    return a;
  };
};

const mult = (a) => {
  return (b) => {
    if (b) return mult(a * b);
    return a;
  };
};

console.log(add(1)(2)(3)(4)());
console.log(mult(1)(2)(3)(4)());

/**
 * Make this possible
 *
 * calc.add(10).mult(5).sub(30).add(49);
 */

const calc = {
  total: 0,
  add(x) {
    this.total += x;
    return this;
  },
  sub(x) {
    this.total -= x;
    return this;
  },
  mult(x) {
    this.total *= x;
    return this;
  },
};
const res = calc.add(10).mult(5).sub(30).add(49);

console.log(res.total);
