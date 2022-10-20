/**
 * What is the output of this for loop?
 *
 * Answer: 3 3 3. This is because var is not block-scoped so by the time we leave the for loop and
 * handle the event queue i is read to be 3 3 3.
 */
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

/**
 * How can we fix this?
 *
 * By using keyword 'let', which is block scoped.
 */
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

/**
 * What if we can't use 'let'?
 * Then we have to create a new closure for i.
 * We pass in 'i' to a function closing the the setTimeout, and the input will have function scope.
 */
for (var i = 0; i < 3; i++) {
  function timer(iter) {
    setTimeout(() => {
      console.log(iter);
    }, iter * 1000);
  }
  timer(i);
}
