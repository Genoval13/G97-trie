class Node {
  constructor(data) {
    this.key = data;
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = {
      children: {},
      end: false,
      key: null
    };
  }

  insert(word) {
    
  }

  contains(word) {
    // does trie contain word?
  }
  
  remove(word) {
    // remove word from trie
  }

  depthFirstSearch(prefix) {
    // return all words given a prefix
  }
  breadthFirstSearch(prefix) {
   // return all words given a prefix

  }
}

module.exports = { Node, Trie };
