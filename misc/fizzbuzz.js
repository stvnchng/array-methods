const f = (n) =>
  [...Array(n)].map((_, i) =>
    console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i)
  );
f(101);
