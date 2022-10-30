/**
 * Task is to generate all possible passwords from a given char set
 */
let charSet = ["A", "T", "M", "@", "$"];

/**
 * For every character in the given pool, we generate all possible combinations
 * for that length. This scales exponentially.
 * @param {*} charSet - pool of chars to choose from
 * @param {*} output - password we want to generate
 * @param {*} n - length of current output password
 * @returns nothing, just prints all possible chars
 */
let numPasswords = 0;
const generate = (charSet, output, n) => {
  if (output.length) {
    console.log(output);
    numPasswords++;
  }
  if (n === 0) {
    return;
  }
  for (let i = 0; i < charSet.length; i++) {
    generate(charSet, output + charSet[i], n - 1);
  }
};

generate(charSet, "", 2);
console.log(numPasswords);
// Total number of passwords is the sum of permutations for each password length
// e.g. for n = 3, numPasswords = 5 + 5^2 + 5^3 = 155
