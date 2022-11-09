const process = (cmds) => {
  let res = [];
  const cmdList = cmds.split("");
  for (const cmd of cmdList) {
    if (cmd === "_") {
      res.pop();
    } else {
      res.push(cmd);
    }
  }
  return res.join("");
};

// console.log(process("____abcdefg") == "abcdefg");
// console.log(process("ab______c") == "c");
// console.log(process("ab__c") == "c");
// console.log(process("abc_d__efg") == "aefg");
// console.log(process("abcdefg") == "abcdefg");
// console.log(process("abcdefg____") == "abc");
// console.log(process("_______") == "");
// console.log(process("abcdefg__________") == "");

// N - length of a cmd
// Time O(N)
// Space O(N)

// compare(string1, string2) -> bool (True if process(string1) == process(string2) else False)
// caveat: we want compare to be asymptotically more efficient than calling process twice
const compare = (s1, s2) => {
  let i1 = s1.length - 1;
  let i2 = s2.length - 1;
  let n1,
    n2 = 0;
  while (i1 >= 0 && i2 >= 0) {
    if (s1[i1] !== "_" && s2[i2] !== "_" && !n1 && !n2) {
      if (s1[i1] !== s2[i2]) return false;
      i1--;
      i2--;
    } else {
      while (s1[i1] === "_") {
        n1++;
        i1--;
      }
      while (s2[i2] === "_") {
        n2++;
        i2--;
      }
      if (s1[i1] !== "_" && n1) {
        i1--;
        n1--;
      }
      if (s2[i2] !== "_" && n2) {
        i2--;
        n2--;
      }
    }
  }
  return true;
};

console.log(compare("____abcdefg", "abcdefg"));
console.log(compare("ab______c", "c"));
console.log(compare("ab__c", "c"));
console.log(compare("abc_d__efg", "aefg"));
console.log(compare("abcdefg", "abcdefg"));
console.log(compare("abcdefg____", "abc"));
// console.log(compare());
// console.log(compare());
// console.log(compare());
