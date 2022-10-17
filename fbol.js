const fbol = (start = 1, end) => {
  [...Array(end + 1).keys()].filter(i => i >= start).forEach((i) => console.log("Fizz".repeat(Number(i % 3 === 0)) + "Buzz".repeat(Number(i % 5 === 0)) || i));
};

fbol(1, 100)