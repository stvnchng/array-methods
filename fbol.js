const fbol = (upto) => {
  [...Array(upto + 1).keys()].filter(i => i !== 0).forEach((i) => console.log("Fizz".repeat(Number(i % 3 === 0)) + "Buzz".repeat(Number(i % 5 === 0)) || i));
};

fbol(100)