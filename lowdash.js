/**
 * Deeply-nested objects testing cloneDeep and isEqualDeep implementations
 */
const nestedObj = { asdf: 4, dd: { "2f": 5 }, d: { f: [1, 2, 3] } };
const nestedArr = [1, [2, 3], [[[], 6], 6], 8];
const sameObj = { asdf: 4, dd: { "2f": 5 }, d: { f: [1, 2, 3] } };
const sameArr = [1, [2, 3], [[[], 6], 6], 8];
const notSameObj = { asdf: 4, dd: { "2f": 51 }, d: { f: [1, 2, 3] } };
const notSameArr = [1, [2, 3], [[[1], 6], 6], 8];

const cloneDeep = (obj) => {
  // handle falsey values and primitives
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  let res = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    // Prevent self-references to parent object
    // if (Object.is(obj[key], obj)) continue;
    const value = obj[key];
    res[key] = value instanceof Object ? cloneDeep(value) : value;
  }

  return res;
};

console.log("cloneDeep with Object and Array");
console.log(cloneDeep(nestedObj));
console.log(cloneDeep(nestedArr));

const cloneArr = (items) => {
  return items.map((item) => {
    return Array.isArray(item) ? cloneArr(item) : item;
  });
};

console.log("\ncloneArr results");
console.log(cloneArr([[1], [2, [3]], [4], 5]));

/**
 * Performs deep equality check on two objects.
 */
const isEqualDeep = (o1, o2) => {
  // type mismatch
  if (typeof o1 !== typeof o2) {
    return false;
  }

  // primitives
  if (typeof o1 !== "object" && typeof o2 !== "object") {
    return o1 === o2;
  }

  // Date equality - Date.getTime()
  else if (o1 instanceof Date && o2 instanceof Date) {
    return o1.getTime() === o2.getTime();
  }

  // Array equality
  else if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length !== o2.length) {
      return false;
    }
    return o1.every((item, i) => isEqualDeep(item, o2[i]));
  }

  // object equality
  else if (Object.entries(o1).length === Object.entries(o2).length) {
    return Object.keys(o1).every((key) => isEqualDeep(o1[key], o2[key]));
  }

  // If none of the conditions are satisfied the objects are not equal
  return false;
};

// Test cases for isEqualDeep
console.log("\nisEqualDeep called on deeply nested array and object"); // expect TFTF
console.log(
  isEqualDeep(nestedObj, sameObj),
  isEqualDeep(nestedObj, notSameObj)
);
console.log(
  isEqualDeep(nestedArr, sameArr),
  isEqualDeep(nestedArr, notSameArr)
);
// console.log(isEqualDeep(new Date(1010), new Date(100))); // Example for Date just cause

// TODO: not actually sure if these are correct
const debounce = (callback, timeout) => {
  return setTimeout(callback, timeout);
};

const throttle = (callback, interval) => {
  return setInterval(callback, interval);
};

/**
 * Returns a mapping of the groupBy param to an array of items that satisfies the condition.
 */
const groupBy = (items, param) => {
  const grouped = {};
  for (const item of items) {
    if (param(item) in grouped) {
      grouped[param(item)].push(item);
    } else {
      grouped[param(item)] = [item];
    }
  }
  return grouped;
};

const users = [6.5, 4.12, 6.8, 5.4];
// console.log(groupBy(users, Math.floor));

/**
 * turns the keys of a deeply-nested object into camelCase
 */
const humpify = (obj) => {
  const humpifiedObj = {};
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    humpifiedObj[camelize(key)] =
      value instanceof Object ? humpify(obj[key]) : value;
  }
  return humpifiedObj;
};

/**
 * Helper to camelize a string.
 * I didn't write this. Do I look like I hate myself?
 *
 * (Spoiler alert: I do.)
 */
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

console.log(
  humpify({
    "EquipmentClass name": "EquipmentClass name",
    "EquipmentClass name search wahhhhht": 66,
    "EquipmentClass name kitchen dumb waht": {
      FakeNameBurger1: 6,
      "hi my name is john": 7,
    },
  })
);

const chunk = (items, size) => {
  let res = [];
  let curr = [];
  for (const i of items) {
    curr.push(i);
    if (curr.length === size) {
      res.push(curr);
      curr = [];
    }
  }
  if (curr) res.push(curr);
  return res;
};

console.log(chunk([1, 2, 3, 4, 5], 0));

const stringify = (obj) => {
  let res = Array.isArray(obj) ? "[" : "{";
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const key = Object.keys(obj)[i];
    let value = obj[key];
    if (i > 0) {
      res += ",";
    }
    if (!Array.isArray(obj)) {
      res += `"${key}":`;
    }
    res += value instanceof Object ? stringify(value) : value;
  }
  return res + (Array.isArray(obj) ? "]" : "}");
};

const obj = {
  3: { 5: { a: { b: [1, 2, 3] } }, c: [1, [2, [3]]], d: 5, e: 6 },
};
const arr = [1, 2, [3, 4, [5, 6]]];

// verify that we get the same output as JSON.stringify
console.log(stringify(obj), JSON.stringify(obj));

// verify that the result of parsing the stringified object yields the same object
console.log(isEqualDeep(JSON.parse(stringify(obj)), obj));

// test same things on just a nested array
console.log(stringify(arr), JSON.stringify(arr));
console.log(isEqualDeep(JSON.parse(stringify(arr)), arr));
