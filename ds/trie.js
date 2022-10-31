/**
 * An implementation of a Trie (prefix tree).
 *
 * This Trie supports searching with wildcards (*) by calling
 * wildSearch. As long as the position of "*" corresponds to a
 * letter in the Trie, lookup will return true.
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor(words = []) {
    this.root = new TrieNode();
    for (const word of words) {
      this.insert(word);
    }
  }

  insert(word) {
    let curr = this.root;
    for (const char of word) {
      if (!(char in curr.children)) curr.children[char] = new TrieNode();
      curr = curr.children[char];
    }
    curr.endOfWord = true;
  }

  search(word) {
    let curr = this.root;
    for (const char of word) {
      if (!(char in curr.children)) return false;
      curr = curr.children[char];
    }
    return curr.endOfWord;
  }

  startsWith(prefix) {
    let curr = this.root;
    for (const char of prefix) {
      if (!(char in curr.children)) return false;
      curr = curr.children[char];
    }
    return true;
  }

  // wildSearch is an enhanced search() that allows for wildcards (*) in a word
  wildSearch(word, root = this.root) {
    let curr = root;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "*") {
        // if any path down the Trie matches, the wildcard position is valid!
        return Object.keys(curr.children).some((char) =>
          this.wildSearch(word.slice(i + 1), curr.children[char])
        );
      } else if (word[i] in curr.children) {
        curr = curr.children[word[i]];
      } else {
        // if we hit this case, this means one of two things is true:
        // 1) we have no matches or 2) we reached the end of the Trie
        // but the input word continues. Either way, we return false.
        return false;
      }
    }
    return curr.endOfWord;
  }
}

const trie = new Trie(["cat", "car", "bar", "ban", "carp"]);
console.log("Test cases for Trie");
console.log(trie.search("cat")); // true
console.log(trie.search("can")); // false
console.log(trie.wildSearch("c*r")); // true
console.log(trie.wildSearch("*a*")); // true
console.log(trie.wildSearch("*az")); // false
console.log(trie.wildSearch("cae")); // false
console.log(trie.wildSearch("car")); // true
console.log(trie.wildSearch("car*")); // true
