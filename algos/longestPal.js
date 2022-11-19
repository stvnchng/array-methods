/**
 * 409. Longest Palindrome
 *
 * https://leetcode.com/problems/longest-palindrome/
 * Compute the length of the longest possible palindrome formed by
 * rearranging the chars in s.
 */
const longestPal = (s) => {
  // The longest palindrome is going to be all even-number occurring chars
  // plus one odd-number occurring char IF there are any
  // We can use a hash to perform an add/remove to know which ones are odd
  const hash = new Set();
  for (const c of s) {
    if (hash.has(c)) {
      hash.delete(c);
    } else {
      hash.add(c);
    }
  }
  const diff = hash.size > 0 ? hash.size - 1 : 0;
  return s.length - diff;
};

const s = "abccccdd";
console.log(longestPal(s));
