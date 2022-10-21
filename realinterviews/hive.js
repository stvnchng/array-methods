/**
 * Hive Frontend Round 1 Questions
 *
 * 1. Explain Promise and async/await
 *
 * 2. Explain debouncing/throttling
 *
 * 3. Explain webpack/Babel
 *
 * 4. Explain ways for how to load a website faster.
 *
 */

const inc = (x) => {
  x++;
  return x;
};

const dec = (x) => {
  x--;
  return x;
};

const trace = (x) => {
  console.log(x);
  return x;
};

// return type: function
const pipe = () => {};

const myPipedFunctionA = pipe(inc, trace, inc, trace);

myPipedFunctionA(15); // prints 16, 17
myPipedFunctionA(10); // prints 11, 12

const myPipedFunctionB = pipe(dec, dec, dec, trace);

myPipedFunctionB(20); // prints 17
myPipedFunctionB(0); // prints -3

const myPipedFunctionC = pipe(myPipedFunctionA, myPipedFunctionB);

const myPipedNone = pipe();

console.log(myPipedNone(15)); // prints 15
