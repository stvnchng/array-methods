/**
 * Call allows you to change the context in which a function is being called.
 */
const person = {
  name: "Somebody",
  hello: function (input) {
    console.log(this.name + " says hello to " + input);
  },
};

const stevenPerson = {
  name: "Steven",
};

/**
 * Difference between call and apply - matter of arraying the input
 */
person.hello.call(stevenPerson, "Bob from call");
person.hello.apply(stevenPerson, ["Bob from apply"]);

/**
 * bind returns a function with a different context
 */
const stevenHello = person.hello.bind(stevenPerson);

stevenHello("the bind function");

/**
 * Some tricky problems with call and apply
 */
const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [6, 7, 8, 9, 10];
numbers.push.apply(numbers, moreNumbers);
console.log(numbers);
console.log(Math.max.apply(null, numbers));

function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); // this should print out John. Bind chaining is invalid.
