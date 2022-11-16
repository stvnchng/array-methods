/**
 * Imagine a world where you could make an api call to an endpoint
 * and finally figure out how to solve that pesky leetcode problem.
 *
 * Worry not, because very soon you might never have to worry about
 * failing a technical interview ever.
 */
const twoSum = {
  solution: (arr, target) => {
    const seen = {};
    for (const num of arr) {
      if (target - num in seen) {
        return `${num} and ${target - num} make ${target}`;
      } else {
        seen[num] = true;
      }
    }
    return -1;
  },
};

// Stringify the JSON to account for Functions
const stringifiedFunc = JSON.stringify(twoSum, function (key, value) {
  if (typeof value === "function") {
    return "/Function(" + value.toString() + ")/";
  }
  return value;
});

// Convert to an object using a reviver function that
// recognizes the /Function(...)/ value and converts it
// into a function via -shudder- `eval`.
const parsedFuncString = JSON.parse(stringifiedFunc, function (key, value) {
  if (
    typeof value === "string" &&
    value.startsWith("/Function(") &&
    value.endsWith(")/")
  ) {
    value = value.substring(10, value.length - 2);
    return (0, eval)("(" + value + ")");
  }
  return value;
});

console.log(parsedFuncString.solution([1, 3, 5, 7], 12));
