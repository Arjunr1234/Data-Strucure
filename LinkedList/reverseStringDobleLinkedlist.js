class Node {
  constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
  }

  append(data) {
      const newNode = new Node(data);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.size++;
  }

  reverseToString() {
      let current = this.tail;
      let reversedString = "";
      while (current) {
          reversedString += current.data;
          current = current.prev;
      }
      return reversedString;
  }
}

function reverseString(str) {
  const dll = new DoublyLinkedList();
  for (let char of str) {
      dll.append(char);
  }
  return dll.reverseToString();
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);
