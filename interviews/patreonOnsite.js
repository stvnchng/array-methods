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
  return items.map((item) => (Array.isArray(item) ? cloneArr(item) : item));
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

/**
 * Implement a data model for a shopping cart that uses a set of coupons
 */
class Cart {
  constructor(coupons) {
    this.coupons = coupons;
  }
}
