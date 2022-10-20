const fb = (i) => [...Array(i).keys()].forEach((i) => console.log("Fizz".repeat(i % 3 === 0) + "Buzz".repeat(i % 5 === 0) || i));

fb(101);
