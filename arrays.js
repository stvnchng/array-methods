const map = (items, callback) => {
  let res = [];
  for (const item of items) {
    res.push(callback(item));
  }
  return res;
};

const reduce = (items, callback, initVal = 0) => {
  items.forEach((item) => (initVal = callback(initVal, item)));
  return initVal;
};

const filter = (items, callback) => {
  let res = [];
  items.forEach((item) => callback(item) && res.push(item));
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
console.log(
  "map test, expects [ 1, 4, 9, 16, 25, 36 ]:",
  map(test, (x) => x ** 2)
);
console.log(
  "reduce test, expects 720:",
  reduce(test, (a, b) => a * b, 1)
);
console.log(
  "filter test, expects [2, 4, 6]:",
  filter(test, (x) => x % 2 === 0)
);
console.log(
  "sort test, expects [ 1, 3, 5, 6, 6, 34 ]:",
  sort([6, 34, 5, 6, 3, 1], null)
);

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

const nestedArr = [1, [2, 3], [[[], 6], 6], 8];
console.log("\nflat array recursively", flat(nestedArr));
console.log("flat array recursively w/ depth", flatN(nestedArr, 1));

const flatMap = (items, callback) => {
  return [].concat(...items.map((item) => callback(item)));
};

const flatMapReduce = (items, callback) => {
  return reduce(items, (acc, next) => [...acc, ...callback(next)], []);
};

const obj1 = { value: [1, 2, 3] };
const obj2 = { value: [4, 5] };
const obj3 = { value: [6] };
const arr = [obj1, obj2, obj3];
console.log(
  "flatMap",
  flatMap(arr, ({ value }) => value)
);
console.log(
  "flatMapReduce",
  flatMapReduce(arr, ({ value }) => value)
);

const join = (items, separator = "") => {
  let res = "";
  for (let i = 0; i < items.length; i++) {
    res += i > 0 ? separator + items[i] : items[i];
  }
  return res;
};

// Reverse in place
const rip = (items) => {
  for (let i = 0; i < Math.floor(items.length / 2); i++) {
    let temp = items[i];
    items[i] = items[items.length - i - 1];
    items[items.length - i - 1] = temp;
  }
  return items;
};

const elements = ["Fire", "Air", "Water", "Earth", "Weed"];
console.log("\njoin result:", join(elements, "$"));
console.log("in-place Array.reverse():", rip(elements));

/**
 * Recursive and iterative binary search implementations
 */
const binSearch = (nums, target, l, r) => {
  if (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      return binSearch(nums, target, l, mid - 1);
    }
    return binSearch(nums, target, mid + 1, r);
  }
  return -1;
};

const binSearchIt = (nums, target, l, r) => {
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("binsearch recursive:", binSearch(nums, 4, 0, nums.length));
console.log("binserach iterative:", binSearchIt(nums, 4, 0, nums.length));
