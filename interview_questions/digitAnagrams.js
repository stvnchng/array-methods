const isDigitAnagram = (a, b) => {
  const countA = new Array(10).fill(0);
  const countB = new Array(10).fill(0);

  while (a) {
    let lastDigit = a % 10;
    countA[lastDigit] += 1;
    a = Math.floor(a / 10);
  }

  while (b) {
    let lastDigit = b % 10;
    countB[lastDigit] += 1;
    b = Math.floor(b / 10);
  }

  for (let i = 0; i < 10; i++) {
    if (countA[i] !== countB[i]) {
      return false;
    }
  }
  return true;
};

console.log(isDigitAnagram(240, 204));
console.log(isDigitAnagram(2470, 2704));
console.log(isDigitAnagram(2471, 2704));
