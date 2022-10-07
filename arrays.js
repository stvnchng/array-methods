const map = (items, callback) => {
  let res = [];
  for (const item of items) {
    res.push(callback(item));
  }
  return res;
};

const reduce = (items, callback, initVal = 0) => {
  let acc = initVal;
  for (const item of items) {
    acc = callback(acc, item);
  }
  return acc;
};

const filter = (items, callback) => {
  let res = [];
  for (const item of items) {
    if (callback(item)) res.push(item);
  }
  return res;
};

/**
 * Recursive mergeSort
 */
const merge = (left, right, callback) => {
  let sorted = [];
  while (left.length && right.length) {
    if (callback) {
      // TODO: figure this out later
    } else {
      if (left[0] <= right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
  }
  return [...sorted, ...left, ...right];
};

const sort = (items, callback) => {
  if (items.length <= 1) return items;
  const mid = Math.floor(items.length / 2);
  const left = sort(items.slice(0, mid));
  const right = sort(items.slice(mid, items.length));
  return merge(left, right, callback);
};

const test = [1, 2, 3, 4, 5, 6];
console.log(map(test, (x) => x ** 2));
console.log(reduce(test, (a, b) => a * b, 1));
console.log(filter(test, (x) => x % 2 == 0));
console.log(sort([6, 34, 5, 6, 3, 1], null));
