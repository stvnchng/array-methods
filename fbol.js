const fbol = (i) => [...Array(i).keys()].forEach((i) => i > 0 && console.log("Fizz".repeat(i % 3 === 0) + "Buzz".repeat(i % 5 === 0) || i));

fbol(101);
