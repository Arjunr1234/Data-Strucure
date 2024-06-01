class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
  }
  class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let node = this.root;
    
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
  
      // Check if the character node exists in children
      if (!node.children[char]) {
        // If it doesn't exist, create a new node
        node.children[char] = new Node();
      }
  
      // Move to the next depth in the Trie 
      node = node.children[char];
  
      // Mark the end of the word if it's the last charac
      if (i === word.length - 1) {
        node.isEndOfWord = true;
      }
    }
  }
  
  contains(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return false; // Character not found in Trie
      }
    }
    return node.isEndOfWord; // Check if the last node marks the end of a word
  }
  
  startsWithPrefix(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return false; // Prefix not found in Trie
      }
    }
    return true; // Prefix found in the Trie
  }
  
  delete(word) {
    if (!this.contains(word)) {
      return false; // Word not found in Trie
    }
  
    let nodes = [];
   // console.log("This is the root: ",this.root);
    let node = this.root;
    for (let char of word){
      nodes.push({ char, node });
      node = node.children[char];
    }
    console.log("this is nodes: ", nodes)
  
    node.isEndOfWord = false;
    console.log("This is the first Poped: ", nodes.pop());
    while (nodes.length > 0) {
      let { char, node } = nodes.pop();
      if (
        Object.keys(node.children[char].children).length === 0 &&
        !node.children[char].isEndOfWord
      ) {
        delete node.children[char];
      } else {
        break;
      }
    }
  
    return true; // Word successfully deleted from Trie
  }
  
  getWordsWithPrefix(prefix) {
    let node = this.root;
  
    // Traverse the Trie to the node representing the prefix
    for (let char of prefix) {
  
      if (!node.children[char]) {
        return []; // Prefix not found in the Trie
      }
      node = node.children[char];
    }
     
    // Collect all words with the given prefix
    let words = [];
    this.collectWords(node, prefix, words);
  
    return words;
  }
  
  collectWords(node, prefix, words) {
    if (node.isEndOfWord) {
      words.push(prefix);
    }
  
    for (let [char, childNode] of Object.entries(node.children)) {
     //  console.log("This is the entries: ",[char,childNode]);
      this.collectWords(childNode, prefix + char, words);
    }
  }
  }
  const trie=new Trie()
  trie.insert("Hello");
  trie.insert("Haill");
  trie.insert("v");
  trie.insert("arjun");
  trie.insert("arun");
  console.log("This is delete: ",trie.delete("arun"));
  
  console.log(trie.root)
  console.log(trie.getWordsWithPrefix(""));