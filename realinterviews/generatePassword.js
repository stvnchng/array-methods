/**
 * Task is to generate all possible passwords from a given char set
 */
let charSet = ["A", "T", "M", "@", "$"];

/**
 *
 * @param {*} charSet
 * @param {*} output - password we want to generate
 * @param {*} n - length of current output password
 * @returns
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
