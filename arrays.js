const map = (items, callback) => {
  let res = [];
  for (const item of items) {
    res.push(callback(item));
  }
  return res;
};

const reduceVerbose = (items, callback, initVal = 0) => {
  let acc = initVal;
  for (const item of items) {
    acc = callback(acc, item);
  }
  return acc;
};

const reduce = (items, callback, initVal = 0) => {
  items.forEach((item) => (initVal = callback(initVal, item)));
  return initVal;
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

const every = (items, callback) => {
  for (const item of items) {
    if (!callback(item)) return false;
  }
  return true;
};

const flat = (items) => {
  let res = [];
  items.forEach((item) =>
    Array.isArray(item) ? res.push(...flat(item)) : res.push(item)
  );
  return res;
};

const flatN = (items, n = Infinity) => {
  let res = [];
  items.forEach((item) =>
    Array.isArray(item) && n > 0
      ? res.push(...flatN(item, n - 1))
      : res.push(item)
  );
  return res;
};

console.log(every(test, (x) => x > 0));
const nestedArr = [1, [2, 3], [[[], 6], 6], 8];
console.log("\nFlatten array recursively");
console.log(flat(nestedArr));
console.log("\nFlatten array recursively with depth limit");
console.log(flatN(nestedArr, 1));

// TODO: investigate is it possible to chain non-native implementation
const flatMap = (items, callback) => {
  return [].concat(...items.map((item) => callback(item)));
};

const flatMapVerbose = (items, callback) => {
  let res = [];
  items.forEach((item) => {
    res.push(...callback(item));
  });
  return res;
};

const obj1 = { value: [1, 2, 3] };
const obj2 = { value: [4, 5, 6] };
const obj3 = { value: [7, 8, 9] };
const arr = [obj1, obj2, obj3];
console.log(flatMap(arr, ({ value }) => value));
console.log(flatMapVerbose(arr, ({ value }) => value));

const join = (items, separator = "") => {
  let res = "";
  for (let i = 0; i < items.length; i++) {
    res += i > 0 ? separator + items[i] : items[i];
  }
  return res;
};

const reverse = (items) => {
  let res = [];
  for (let i = items.length - 1; i > -1; i--) {
    res.push(items[i]);
  }
  return res;
};

const elements = ["Fire", "Air", "Water", "Earth", "Weed"];
console.log(join(elements, "$"));
console.log(reverse(elements));
