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
